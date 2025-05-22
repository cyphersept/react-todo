import "@fontsource-variable/gabarito";
import { BsClipboardPlusFill } from "react-icons/bs";
import List from "./components/List";
import { Footer } from "./components/staples/Footer";
import { WideButton } from "./components/staples/IconButton";
import { FaRegSquarePlus } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";
import { createList, useLists } from "./scripts";
import { ListObj } from "./types";

function App() {
  const { lists, setLists } = useLists();
  const handleNewList = () => {
    const newList = createList("New List");
    const newId = newList.id;
    setLists({ ...lists, [newId]: newList });
  };
  const handleEdit = (editedList: ListObj) => {
    setLists({ ...lists, [editedList.id]: editedList });
  };
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
          onClick={handleNewList}
        />
        <WideButton
          icon={<FaRegSquarePlus />}
          label="Add Task"
          showLabel={true}
        />
        <WideButton icon={<RiEdit2Fill />} label="Edit" showLabel={true} />
      </menu>

      <div className="p-8 flex flex-wrap gap-8 flex-col ">
        {Object.values(lists).map((list) => (
          <List info={list} updateInfo={handleEdit} key={list.id} />
        ))}
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

export default App;
