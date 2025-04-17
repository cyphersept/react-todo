import "@fontsource-variable/gabarito";
import { BsClipboardPlusFill } from "react-icons/bs";
import List from "./components/List";
import { Footer } from "./components/staples/Footer";
import { WideButton } from "./components/staples/IconButton";
import { FaRegSquarePlus } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";
import { randomList } from "./scripts";

function App() {
  return (
    <>
      <header className="pt-8">
        <h1 className="text-[3.2em] p-4">To-Do</h1>
      </header>
      <menu className="flex gap-4 space-between px-8 items-center text-lg">
        <WideButton
          icon={<BsClipboardPlusFill />}
          label="New List"
          showLabel={true}
        />
        <WideButton
          icon={<FaRegSquarePlus />}
          label="Add Task"
          showLabel={true}
        />
        <WideButton icon={<RiEdit2Fill />} label="Edit" showLabel={true} />
      </menu>

      <div className="p-8">
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
  return <List info={randomList()} />;
}

export default App;
