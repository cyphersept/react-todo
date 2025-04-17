import { useState } from "react";
import { ListObj, TaskObj } from "../types";
import { IconButton } from "./staples/IconButton";
import Task from "./Task";
import { FaRegSquarePlus } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";
import { BiSolidSave } from "react-icons/bi";
import { createTask } from "../scripts";

export default function List({ info }: { info: ListObj }) {
  const [editMode, setEditMode] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [tasks, setTasks] = useState(info.tasks);

  // Allows the list and its individual tasks to be updated/deleted
  const toggleEdit = () => {
    setEditMode(!editMode);
  };
  // Adds a new blank task row
  const addBlankTask = () => {
    setShowNew(true);
    setTasks([...tasks, createTask(null)]);
  };

  // Saves an edit to a task, old or new
  const saveTask = (text: string | undefined, id: string) => {
    const taskFromId: TaskObj[] = tasks.map((t) =>
      t.id !== id ? t : { id: t.id, color: t.color, text: text }
    );
    setTasks(taskFromId);
  };

  const deleteTask = (taskId: string) => {
    const index = tasks.findIndex((task) => task.id === taskId);
    console.log("deleteTask requested: " + taskId);
    if (index > -1) {
      const updated = [...tasks.slice(0, index), ...tasks.slice(index + 1)];

      setTasks(updated);
      console.log("Task successfully deleted. New list: ");
      console.log(updated);
    }
  };

  return (
    <article className="flex flex-col text-teal-800" data-list-id={info.id}>
      <header className="text-4xl bg-teal-600 w-full rounded-t-2xl p-6 text-teal-950 font-semibold flex justify-between">
        <IconButton
          icon={<FaRegSquarePlus />}
          label="add task"
          onClick={addBlankTask}
        />
        <h2>{info.title}</h2>
        <IconButton
          icon={editMode ? <BiSolidSave /> : <RiEdit2Fill />}
          label="edit list"
          onClick={toggleEdit}
        />
      </header>
      <ul className="bg-teal-200 rounded-b-xl overflow-clip">
        {tasks.map((t) => (
          <Task
            key={t.id}
            task={t}
            editMode={editMode}
            del={deleteTask}
            save={saveTask}
          />
        ))}
      </ul>
    </article>
  );
}
