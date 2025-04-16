import { ListObj } from "../types";
import Task from "./Task";
export default function List({ info }: { info: ListObj }) {
  const listItems = info.tasks.map((t) => <Task task={t} />);
  return (
    <article className="flex flex-col text-cyan-900" data-list-id={info.id}>
      <h2 className="text-4xl bg-teal-600 w-full rounded-t-2xl p-6 text-cyan-950 font-semibold ">
        {info.title}
      </h2>
      <ul className="bg-teal-200 rounded-b-xl overflow-clip">{listItems}</ul>
    </article>
  );
}
