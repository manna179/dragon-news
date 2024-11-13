import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return <div>
    <div className="flex gap-2 items-center">
        <p className="py-2 px-4 bg-[#d72050]">Latest</p>
        <Marquee pauseOnHover={true} speed={100} className="space-x-10 bg-base-200 p-2">
            <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, commodi!</Link>
            <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, commodi!</Link>
            <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, commodi!</Link>
        </Marquee>
    </div>
  </div>;
};

export default LatestNews;
