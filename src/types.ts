export interface TaskObj {
  text: string | undefined;
  color: Color;
  id: string;
}

export interface ListObj {
  title: string;
  color: Color;
  id: string;
  tasks: tasksDataObj;
}

// Object where each key is the id for a task
export interface tasksDataObj {
  [idKey: string]: TaskObj;
}

// Object where each key is the id for a list
export interface ListsDataObj {
  [idKey: string]: ListObj;
}

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
export type MODE = "display" | "new" | "edit";

export type Color = RGB | RGBA | HEX;
