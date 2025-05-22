import { useState } from "react";
import { ListObj, TaskObj, tasksDataObj } from "../types";
import { IconButton } from "./staples/IconButton";
import Task from "./Task";
import { FaRegSquarePlus } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";
import { BiSolidSave } from "react-icons/bi";
import { createTask } from "../scripts";

interface ListProps {
  info: ListObj;
  updateInfo: (newInfo: ListObj) => void;
}

export default function List({ info, updateInfo }: ListProps) {
  const [editMode, setEditMode] = useState(info.title === undefined);
  const [title, setTitle] = useState(info.title);

  // Save changes when tasks are edited
  // useEffect(() => {}, tasks);

  // Allows the list and its individual tasks to be updated/deleted
  const toggleEdit = () => {
    updateInfo({ ...info, title: title });
    setEditMode(!editMode);
  };

  // Adds a new blank task row
  const addBlankTask = () => {
    updateTask(createTask(undefined));
  };

  // Change one single task
  const updateTask = (task: TaskObj) => {
    updateAllTasks({ ...info.tasks, [task.id]: task });
  };

  // Change entire list of tasks
  const updateAllTasks = (updatedTasks: tasksDataObj) => {
    updateInfo({ ...info, tasks: updatedTasks });
  };

  // Saves an edit to a task, old or new
  const saveTask = (text: string | undefined, id: string) => {
    if (info.tasks[id]) updateTask({ ...info.tasks[id], text: text });
  };

  const deleteTask = (taskId: string) => {
    const { [taskId]: _, ...remaining } = info.tasks;
    updateAllTasks(remaining);
  };

  return (
    <article className="flex flex-col text-teal-800" data-list-id={info.id}>
      <header
        className={
          "text-4xl bg-teal-600 w-full rounded-t-2xl p-6 text-teal-950 font-semibold flex justify-between" +
          (Object.values(info.tasks).length === 0 ? " rounded-2xl" : "")
        }
      >
        <IconButton
          icon={<FaRegSquarePlus />}
          label="add task"
          onClick={addBlankTask}
        />
        {editMode ? (
          <input
            type="text"
            aria-label="input list title"
            className="grow text-inherit px-1 mx-4 bg-teal-50 rounded focus:outline-teal-700 focus:outline-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h2>{info.title}</h2>
        )}
        <IconButton
          icon={editMode ? <BiSolidSave /> : <RiEdit2Fill />}
          label="edit list"
          onClick={toggleEdit}
        />
      </header>
      <ul className="bg-teal-200 rounded-b-xl overflow-clip">
        {Object.values(info.tasks).map((t) => (
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
