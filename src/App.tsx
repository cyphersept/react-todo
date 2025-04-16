import "./App.css";
import "@fontsource-variable/gabarito";
import { BsClipboardPlusFill } from "react-icons/bs";
import List from "./components/List";
import { Color, ListObj, TaskObj } from "./types";
import ShortUniqueId from "short-unique-id";
import { Footer } from "./components/staples/Footer";
import { IconButton } from "./components/staples/IconButton";
import { FaRegSquarePlus } from "react-icons/fa6";

function App() {
  return (
    <>
      <menu className="flex gap-4 space-between px-8 items-center ">
        <IconButton
          icon={<BsClipboardPlusFill />}
          label="New List"
          showLabel={true}
        />
        <IconButton
          icon={<FaRegSquarePlus />}
          label="Add Task"
          showLabel={true}
        />
        <IconButton
          icon={<BsClipboardPlusFill />}
          label="New List"
          showLabel={true}
        />
      </menu>
      <header className="pt-8">
        <h1>To-Do</h1>
      </header>
      <div className="card">
        <Todo />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  );
}

function Todo() {
  const uid = new ShortUniqueId({ length: 10 });
  const randInt = (x: number) => Math.floor(Math.random() * x);
  const randomColor: () => Color = () => {
    const hex = "0123456789abcdef";
    return ("#" +
      Array(6)
        .fill(0)
        .map(() => hex[Math.floor(randInt(hex.length))])
        .join("")) as Color;
  };
  const randomList: () => ListObj = () => {
    const tasks = Array(4)
      .fill(0)
      .map(() => randomTask());
    const list: ListObj = {
      title: "Example List",
      color: randomColor(),
      id: uid.rnd(),
      tasks: tasks,
    };
    return list;
  };
  const randomTask: () => TaskObj = () => {
    const id = uid.rnd();
    const task: TaskObj = {
      id: id,
      color: randomColor(),
      text: "This is a task that still needs to be done with ID " + id,
    };
    return task;
  };
  return <List info={randomList()} />;
}

export default App;
