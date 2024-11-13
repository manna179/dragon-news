import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftNav from "../Components/Layout-Component/LeftNav";
import RightNav from "../Components/Layout-Component/RightNav";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-4">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12">
      <aside className="col-span-3">
        <LeftNav></LeftNav>
      </aside>
      <section className="col-span-6">
        <Outlet></Outlet>
      </section>
      <aside className="col-span-3"><RightNav></RightNav></aside>
      

      </main>
    </div>
  );
};
<h2>Home layout</h2>;
export default HomeLayout;
