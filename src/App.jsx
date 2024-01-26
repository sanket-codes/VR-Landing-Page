import React from "react";

const App = () => {
  return (
    <>
      {/* navbar start */}
      <nav className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl">LIGHT</h1>
        </div>
        <div>
          <ul className="flex gap-9 font-semibold items-center">
            <li className="hover:border-solid hover:border-b-2 cursor-pointer">
              Home
            </li>
            <li className="hover:border-solid hover:border-b-2 cursor-pointer">
              Company
            </li>
            <li className="hover:border-solid hover:border-b-2 cursor-pointer">
              Features
            </li>
            <li className="bg-fuchsia-500	py-2 px-5 rounded-sm text-sm cursor-pointer">
              Sign Up
            </li>
          </ul>
        </div>
      </nav>
      {/* navbar End */}
      {/* Home Part -1 Start */}
      <div className="flex justify-around mt-16 mx-10">
        {/* home p-1 text start */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-8">
            <div className="font-bold text-4xl">
              <p>Let’s Explore</p>
              <p>Three-Dimensional</p>
              <p>visual</p>
            </div>
            <p>
              With virtual technology you can see the digital world <br /> feel
              more real and you can play the game with a new style.
            </p>
          </div>
          <div className="flex items-center gap-10 font-semibold">
            <button className="bg-fuchsia-500	py-2 px-5 rounded-sm text-sm cursor-pointer">
              Get it Now
            </button>
            <a href="">Explore Device</a>
          </div>
          <div className="flex gap-10">
            <div className="flex">
              <img src="/images/Ellipse 1.png" alt="" />
              <img src="/images/Ellipse 2.png" alt="" />
              <img src="/images/Ellipse 3.png" alt="" />
              <img src="/images/Ellipse 4.png" alt="" />
            </div>
            <p>● 400k people online</p>
          </div>
        </div>
        {/* home p-1 text End */}
        {/* home p-2 text start */}
        <div>
          <img src="/images/image 1.png" alt="" />
        </div>
        {/* home p-2 text End */}
      </div>
      {/* Home Part -1 End */}
      {/* Bottom Part Start */}
      <div className="flex justify-around items-center mx-10 pb-20">
        {/* bottom p-1 start */}
        <div className="flex gap-8">
          <img src="/images/Vector 1.png" alt="" />
          <img src="/images/Vector 2.png" alt="" />
        </div>
        {/* bottom p-1 End */}
        {/* bottom p-2 start */}
        <div className="space-y-8 mt-20">
          <h1 className="font-bold text-3xl">
            New Experience In <br /> Playing Game
          </h1>
          <p>
            You can try playing the game with a <br /> new style and of course a
            more real <br /> feel, like you are the main character <br /> in
            your game and adventure in this <br /> new digital world.
          </p>
          <button className="bg-fuchsia-500	py-2 px-5 rounded-sm text-sm cursor-pointer">
            Get it Now
          </button>
        </div>
        {/* bottom p-2 End */}
      </div>
      {/* Bottom Part End */}
    </>
  );
};
export default App;
