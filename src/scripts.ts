import ShortUniqueId from "short-unique-id";
import { Color, ListsDataObj, ListObj, TaskObj, tasksDataObj } from "./types";
import { useEffect, useState } from "react";

const lists: ListsDataObj = {};
const getLists = () => lists;
const uid = new ShortUniqueId({ length: 10 });
const randomInt = (x: number) => Math.floor(Math.random() * x);
const randomColor: () => Color = () => {
  const hex = "0123456789abcdef";
  return ("#" +
    Array(6)
      .fill(0)
      .map(() => hex[Math.floor(randomInt(hex.length))])
      .join("")) as Color;
};
const randomList: () => ListObj = () => {
  const list = createList("Example list");
  list.tasks = Object.fromEntries(
    Array(4)
      .fill(0)
      .map(() => {
        const task = randomTask();
        return [task.id, task];
      })
  );
  return list;
};
const randomTask: () => TaskObj = () => {
  const id = uid.rnd();
  const task: TaskObj = {
    id: uid.rnd(),
    color: randomColor(),
    text: "This is a task that still needs to be done with ID " + id,
  };
  return task;
};

const createTask = (text: string | undefined) => {
  const task: TaskObj = {
    id: uid.rnd(),
    color: randomColor(),
    text: text,
  };
  return task;
};

// add a task to a specified list and return changed tasks list
const addTask = (task: TaskObj, listId: string) => {
  if (listId in lists) {
    const list = lists[listId];
    list.tasks[task.id] = task;
    return list.tasks;
  }
};

// return the full task from the list
const findTask = (taskId: string, listId: string) => {
  if (listId in lists)
    if (taskId in lists[listId].tasks) return lists[listId].tasks[taskId];
};

const deleteTask = (taskId: string, listId: string) => {
  if (listId in lists) delete lists[listId].tasks[taskId];
};

// Create a new list
const createList = (title: string) => {
  const list: ListObj = {
    title: title,
    color: randomColor(),
    id: uid.rnd(),
    tasks: {} as tasksDataObj,
  };
  return list;
};

// Adds a list to the list of lists
const addList = (list: ListObj, lists: ListsDataObj) => {
  lists[list.id] = list;
  console.log(lists);
  return lists;
};
const deleteList = (listId: string) => {
  delete lists[listId];
  return lists;
};

const initalizeLists = (amount: number) => {
  const initial = {} as ListsDataObj;
  for (let i = 0; i < amount; i++) {
    const newList = randomList();
    addList(newList, initial);
  }
  return initial;
};

const isObjEmpty = (obj: object) => {
  return Object.keys(obj).length === 0;
};

const useLists = () => {
  const [lists, setLists] = useState({} as ListsDataObj);

  // Initialize list from stored data
  useEffect(() => {
    if (isObjEmpty(lists)) {
      const storedData = localStorage.getItem("todoLists") ?? "";
      const parsedData: ListsDataObj = JSON.parse(storedData);
      const toSet = isObjEmpty(parsedData) ? initalizeLists(2) : parsedData;
      setLists(toSet);
    }
  }, []);

  // save Lists to localData on change
  useEffect(() => {
    localStorage.setItem("todoLists", JSON.stringify(lists));
  }, [lists]);

  return { lists, setLists };
};

export {
  useLists,
  getLists,
  initalizeLists,
  uid,
  randomInt,
  randomColor,
  randomTask,
  randomList,
  createTask,
  addTask,
  findTask,
  deleteTask,
  deleteList,
  createList,
  addList,
};
