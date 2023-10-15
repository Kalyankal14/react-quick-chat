import React from "react";
import { UserAuth } from "../Contexts/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = UserAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="navbar fixed z-10 bg-base-100 bg-neutral text-neutral-content">
      <div className=" containerWrap">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">QuickChat</a>
        </div>
        {currentUser ? (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={currentUser.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li onClick={handleLogout}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>{" "}
    </div>
  );
};
export default Navbar;
