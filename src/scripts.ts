import ShortUniqueId from "short-unique-id";
import { Color, ListObj, TaskObj } from "./types";

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
    id: uid.rnd(),
    color: randomColor(),
    text: "This is a task that still needs to be done with ID " + id,
  };
  return task;
};

const createTask = (text: string | null) => {
  const task: TaskObj = {
    id: uid.rnd(),
    color: randomColor(),
    text: text,
  };
  return task;
};

export { uid, randomInt, randomColor, randomTask, randomList, createTask };
