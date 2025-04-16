export interface TaskObj {
  text: string;
  color: Color;
  id: string;
}

export interface ListObj {
  title: string;
  color: Color;
  id: string;
  tasks: TaskObj[];
}

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;
