import React from "react";
import { SocialIcon } from "react-social-icons";
import Particle from "./components/Particles";
import { Typewriter } from "react-simple-typewriter";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-[#232946] absolute">
      <Particle />
      <div>
        <p className="lg:text-7xl md:text-5xl sm:text-3xl text-3xl font-bold font-press-start relative items-center  text-[#fffffe]">
          CaballaValley
        </p>
      </div>
      <div className="mt-4 text-2xl text-[#b8c1ec] font-montserrat font-bold">
        <Typewriter
          loop
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
          words={[
            "Charlamos sobre programación...",
            "Desde el norte de África.",
            "Ceuta",
          ]}
        />
      </div>
      <div className="mt-8 gap-4 sm:flex ">
        <SocialIcon
          className="md:w-12"
          network="twitter"
          style={{ height: 100, width: 100 }}
          url="https://twitter.com/CaballaV"
          fgColor="#001858"
          bgColor="#f582ae"
        />
        <SocialIcon
          className=""
          network="youtube"
          style={{ height: 100, width: 100 }}
          url="https://www.youtube.com/channel/UCCA6mBx3Udsaw0iPOoJ09Pw"
          fgColor="#001858"
          bgColor="#f582ae"
        />
        <SocialIcon
          className=""
          network="discord"
          url="https://discord.gg/ThK5Z3gNBP"
          fgColor="#001858"
          bgColor="#f582ae"
          style={{ height: 100, width: 100 }}
        />
        <SocialIcon
          className=""
          network="github"
          url="https://discord.gg/ThK5Z3gNBP"
          fgColor="#001858"
          bgColor="#f582ae"
          style={{ height: 100, width: 100 }}
        />
      </div>
    </div>
  );
}

export default App;
