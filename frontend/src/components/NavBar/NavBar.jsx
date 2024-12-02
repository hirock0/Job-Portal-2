import { Link, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
const NavBar = () => {
  const [menuFlag, setMenuFlag] = useState(false);

  useEffect(() => {
    const unsubscribe = () => {
      window.addEventListener("click", () => {
        setMenuFlag(false);
      });
    };
    unsubscribe();
    return () => {
      unsubscribe;
    };
  }, [menuFlag]);

  return (
    <nav className=" sticky bg-zinc-100 top-0 z-50 h-20 flex items-center">
      <section className=" w-full">
        <div className=" flex items-center justify-between">
          <div className=" border">logo</div>

          <div
            onClick={(e) => e.stopPropagation()}
            className={`${
              !menuFlag && " max-lg:translate-x-full"
            } max-lg:transition-all max-lg:fixed max-lg:top-20 max-lg:right-0 max-lg:bg-zinc-100 max-lg:h-full max-lg:w-1/2 max-lg:p-5 `}
          >
            <ul className=" flex items-center  w-full justify-center  gap-5 text-xl font-semibold max-lg:flex-col max-lg:items-start  max-lg:w-full ">
              <NavLink to={"/"}>
                <li>Home</li>
              </NavLink>
              <NavLink to={"/"}>
                <li>Find Jobs</li>
              </NavLink>
              <NavLink to={"/"}>
                <li>Find Employees</li>
              </NavLink>
              <NavLink to={"/"}>
                <li>Messages</li>
              </NavLink>
              <NavLink to={"/"} className={" lg:hidden"}>
                <li>Hire Talent</li>
              </NavLink>
            </ul>
          </div>
          <div className=" flex items-center gap-2 ">
            <button className=" max-lg:hidden font-semibold border bg-yellow-400 px-4 py-2 rounded-lg">
              Hire Talent
            </button>
            <Link
              to={"/apply"}
              className=" bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg font-semibold"
            >
              Apply as Freelance
            </Link>
            <button
              onClick={(e) => {
                e.stopPropagation(), setMenuFlag(!menuFlag);
              }}
              className=" lg:hidden"
            >
              <MdMenu size={25} />
            </button>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
