import React from "react";
import { PiVirus } from "react-icons/pi";

const HomeLoader = () => {
  return (
    <div data-testid="loader" className="flex justify-center col-span-3">
      <PiVirus
        className={`text-green-500 text-2xl md:text-5xl animate-spin max-md:scale-[1.4] md:scale-[1.2]`}
      />
    </div>
  );
};

export default HomeLoader;