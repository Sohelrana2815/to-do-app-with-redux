import { IoMenu } from "react-icons/io5";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";
export default function Navbar() {
  return (
    <nav className="h-16 flex items-center gap-3  justify-between">
      <div className="flex items-center">
        <IoMenu /> <span className="font-bold ml-2">To Do App</span>
      </div>
      <Link to="/">Tasks</Link>
      <Link to="users">Users</Link>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}
