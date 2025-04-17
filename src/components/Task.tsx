import { TaskObj } from "../types";
import { useRef, useState } from "react";
import { IconButton } from "./staples/IconButton";
import { FaCircleMinus } from "react-icons/fa6";
import { BiEdit, BiSolidSave } from "react-icons/bi";

interface TaskProps {
  task: TaskObj;
  editMode: boolean;
  del: (id: string) => void;
  save: (arg0: string | undefined, arg1: string) => void;
}

interface InputTaskProps {
  handleSave: (arg0: string | undefined) => void;
}

export default function Task({ task, editMode, del, save }: TaskProps) {
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const handleSave = (newText: string | null) => {
    if (newText) {
      save(newText, task.id);
      setIsEditing(false);
    }
  };
  const displayElement = (
    <label
      htmlFor={task.id}
      className={"text-center grow" + (checked ? " line-through" : "")}
    >
      {task.text}
    </label>
  );
  return (
    <li
      className={
        "relative text-xl flex items-center gap-4 hover:bg-teal-500/50 py-4 px-6 border-t-2 border-solid border-teal-800 last:pb-6" +
        (editMode ? " justify-between " : "")
      }
      data-task-id={task.id}
    >
      {editMode && (
        <div className="text-2xl flex items-center">
          <IconButton
            icon={<FaCircleMinus />}
            label="delete task"
            onClick={() => del(task.id)}
          />
        </div>
      )}
      <input
        type="checkbox"
        id={task.id}
        className="scale-200 rounded accent-teal-800 ms-2"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {task.text ? displayElement : <InputTask handleSave={handleSave} />}
      {editMode && task.text && (
        <div className="text-2xl flex items-center">
          <IconButton
            icon={<BiEdit />}
            label="edit task"
            classes=" scale-[calc(400%/3)] translate-x-0.5 hover:scale-[calc(500%/3)]"
          />
        </div>
      )}
    </li>
  );
}

function InputTask({ handleSave }: InputTaskProps) {
  const valueRef = useRef<HTMLInputElement>(null);
  const saveValueFromRef = () =>
    handleSave(valueRef.current === null ? undefined : valueRef.current?.value);

  return (
    <>
      <input
        type="text"
        aria-label="input task description"
        className="grow text-inherit px-1 ms-4 bg-teal-50 rounded focus:outline-teal-700 focus:outline-3"
        ref={valueRef}
      />
      <div className="text-2xl flex items-center ">
        <IconButton
          label="save"
          icon={<BiSolidSave />}
          onClick={saveValueFromRef}
          classes=" scale-[calc(400%/3)] translate-x-0.5 hover:scale-[calc(500%/3)]"
        />
      </div>
    </>
  );
}
