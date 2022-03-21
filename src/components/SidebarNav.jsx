import React from "react";

function SidebarNav() {
  return (
    <nav className="navbar r-sidebar-search-nav ">
      <form className="r-sidebar-search-nav w-100">
        <input
          className="form-control r-sidebar-search-input rounded-pill px-4"
          type="search"
          placeholder={`Search Twitter`}
          aria-label="Search"
        />
      </form>
    </nav>
  );
}

export default SidebarNav;
