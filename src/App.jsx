import { Outlet } from "react-router-dom";
import logo from "./assets/Free.png";
import { Button } from "./components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import { Menu } from "lucide-react";

function App() {
  return (
    <>
      <header className="w-screen flex justify-center items-center">
        <nav className="flex justify-between items-center 2xl:w-[70%] md:w-[70%] w-full">
          <div className="flex justify-center items-center 2xl:w-56 2xl:h-20 md:w-56 md:h-20 w-28 h-9 m-3">
            <img src={logo} alt="logo" className="w-full h-full" />
          </div>
          <div className="justify-center items-center 2xl:flex md:flex hidden m-3">
            <Button className="m-2">SingUp</Button>
            <Button className="m-2">LogIn</Button>
          </div>
          <div className="2xl:hidden md:hidden block m-3">
            <Popover>
              <PopoverTrigger>
                <Menu />
              </PopoverTrigger>
              <PopoverContent className="flex justify-center items-center">
                <Button className="m-2">SingUp</Button>
                <Button className="m-2">LogIn</Button>
              </PopoverContent>
            </Popover>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default App;
