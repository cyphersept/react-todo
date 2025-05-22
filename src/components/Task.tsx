import { TaskObj } from "../types";
import { useState } from "react";
import { IconButton } from "./staples/IconButton";
import { FaCircleMinus } from "react-icons/fa6";
import { BiEdit, BiSolidSave } from "react-icons/bi";

interface TaskProps {
  task: TaskObj;
  editMode: boolean;
  del: (id: string) => void;
  save: (arg0: string | undefined, arg1: string) => void;
}

export default function Task({ task, editMode, del, save }: TaskProps) {
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(task.text === undefined);
  const [taskText, setTaskText] = useState(task.text ?? "");
  const handleSave = () => {
    if (taskText) {
      save(taskText, task.id);
      setIsEditing(false);
    }
  };

  const handleDelete = () => del(task.id);

  const handleEdit = () => setIsEditing(true);

  return (
    <li
      className={
        "relative text-xl flex items-center gap-4 hover:bg-teal-500/50 py-4 px-6 border-t-2 border-solid border-teal-800 last:pb-6" +
        (editMode ? " justify-between " : "")
      }
      data-task-id={task.id}
    >
      {editMode && <DeleteButton onClick={handleDelete} />}
      <input
        type="checkbox"
        id={task.id}
        className="scale-200 rounded accent-teal-800 ms-2"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {/* Show input field to edit task text */}
      {isEditing && editMode ? (
        <>
          <input
            type="text"
            aria-label="Edit task description"
            className="grow text-inherit px-1 ms-4 bg-teal-50 rounded focus:outline-teal-700 focus:outline-3"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <div className="text-2xl flex items-center ">
            <IconButton
              label="save"
              icon={<BiSolidSave />}
              onClick={handleSave}
              classes=" scale-[calc(400%/3)] translate-x-0.5 hover:scale-[calc(500%/3)]"
            />
          </div>
        </>
      ) : (
        <TaskTextDisplay id={task.id} text={taskText} checked={checked} />
      )}
      {editMode && task.text && <EditButton onClick={handleEdit} />}
    </li>
  );
}

function TaskTextDisplay({
  id,
  text,
  checked,
}: {
  id: string;
  text: string;
  checked: boolean;
}) {
  return (
    <label
      htmlFor={id}
      className={"text-center grow" + (checked ? " line-through" : "")}
    >
      {text}
    </label>
  );
}

function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="text-2xl flex items-center">
      <IconButton
        icon={<FaCircleMinus />}
        label="delete task"
        onClick={onClick}
      />
    </div>
  );
}

function EditButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="text-2xl flex items-center">
      <IconButton
        icon={<BiEdit />}
        label="edit task"
        onClick={onClick}
        classes=" scale-[calc(400%/3)] translate-x-0.5 hover:scale-[calc(500%/3)]"
      />
    </div>
  );
}
