import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ user }) {
  const navigate = useNavigate();

  const isAuthenticated = user && user.isLoggedin;

  const handleAddClick = () => {
    if (isAuthenticated) {
      navigate("/add");
    } else {
      // Redirect to the login page or show a login modal
      navigate("/");
    }
  };

  const handleViewClick = () => {
    if (isAuthenticated) {
      navigate("/view");
    } else {
      // Redirect to the login page or show a login modal
      navigate("/");
    }
  };

  return (
    <>
      <div className="bg-white/20 p-4 flex justify-around items-center w-full header mb-1 shadow-md shadow-black sticky top-0">
        <Link to={"/"} className="text-yellow-400 sm:text-3xl"></Link>
        <div className="">
          {isAuthenticated ? (
            <>
              <button
                onClick={handleAddClick}
                className="text-yellow-400 sm:text-3xl mx-7"
              >
                add
              </button>
              <button
                onClick={handleViewClick}
                className="text-yellow-400 sm:text-3xl"
              >
                view
              </button>
            </>
          ) : (
            <>
              <Link
                to={"/"}  // Change to the login page or authentication page
                className="text-yellow-400 sm:text-3xl mx-10"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
