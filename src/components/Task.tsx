import { TaskObj } from "../types";

export default function Task({ task }: { task: TaskObj }) {
  return (
    <li
      className="text-xl flex gap-4 hover:bg-(--accent)/50 py-4 px-8 border-t-2 border-solid border-(--accent) last:pb-6"
      data-task-id={task.id}
    >
      <input
        type="checkbox"
        id={task.id}
        className="scale-200 rounded accent-(--accent) ms-2"
      />
      <label htmlFor={task.id}>{task.text}</label>
    </li>
  );
}
