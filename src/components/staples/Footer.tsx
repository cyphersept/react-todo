import { GithubIcon } from "../Icons";

export function Footer() {
  return (
    <footer className="w-full pt-4 pb-5 bg-white text-black absolute bottom-0 ">
      <a
        href="https://github.com/cyphersept/react-todo"
        className="flex gap-4 text-lg items-center justify-center text-black underline decoration-2 "
      >
        <GithubIcon />
        cyphersept
      </a>
    </footer>
  );
}
