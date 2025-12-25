import { useState } from "react";

const Accordion = ({ title, children, isOpen = false }) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div className="rounded-md">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center px-4 py-3 font-semibold text-xl">
        {title}
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>{open ? "➖" : "➕"}</span>
      </button>

      {open && <div className="px-4 pb-4 text-sm text-gray-dark">{children}</div>}
    </div>
  );
};

export default Accordion;
