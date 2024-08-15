import React, { useState } from "react";
import Create from "./Create";

const Notes = ({ setCreateFunction }) => {
  return (
    <div>
      <div className="flex">
        <div className="text-4xl text-white w-1/2">
          Your Notes{" "}
          <span className="text-white text-sm">
            {" "}
            <br />
            Here You can see and create notes
          </span>
        </div>

        <div className="w-1/2 ">
          <button
            onClick={() => setCreateFunction(true)}
            className="text-white bg-orange-500 border-black py-2 px-4 rounded"
          >
            create new note!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
