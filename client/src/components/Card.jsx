import React from "react";
import { download } from "../assets";

import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#ffffff] m-2 p-2 rounded-md col divide-y divide-slate-600 text-white">
        <p className="text-sm overflow-y-auto prompt md-1 text-black">
          {prompt}
        </p>
        <div className="mt-1 flex justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-700 text-white flex justify-center items-center mt-1 text-s font-bold">
              {name[0]}
            </div>
            <p className="text-sm text-black">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="outline-none bg-transparent border-none ">
            <img
              src={download}
              alt="download"
              className="w-6 h-6 mt-1 object-contain "
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
