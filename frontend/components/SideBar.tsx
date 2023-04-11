import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="flex-col border pl-5">
      <div className="border-b">
        <Link href="/">Home</Link>
      </div>
      <div className="border-b">
        <Link href="/movies">Movies</Link>
      </div>
      <div className="border-b">
        <Link href="/">Categories</Link>
      </div>
      <div className="border-b">
        <Link href="/">ManageCatalog</Link>
      </div>
    </div>
  );
};

export default SideBar;
