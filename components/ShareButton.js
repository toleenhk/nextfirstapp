"use client";
import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

const ShareButton = () => {
  const [copy, setCopy] = useState(false);
  const handleclick = () => {
    console.log("hiiiii you !");
    setCopy(true);
    setTimeout(() => setCopy(false), 1500);
  };
  console.log(copy);

  return (
    <button
      onClick={handleclick}
      className="border flex gap-1 items-center px-2 py-1 rounded bg-gray-300  test-sm text-slate-500 hover:bg-orange-100 hover:text-slate-700"
    >
      <LinkIcon className="h-4 w-4" />

      {copy ? "is copying" : "share"}
    </button>
  );
};

export default ShareButton;
