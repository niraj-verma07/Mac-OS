import React from "react";
import "./dock.scss";

const Dock = () => {
  return (
    <footer className="dock">
      <div className="icon github">
        <img src="/doc-icons/github.png" alt="" />
      </div>
      <div className="icon calender">
        <img src="/doc-icons/calendar.png" alt="" />
      </div>
      <div className="icon note">
        <img src="/doc-icons/note.png" alt="" />
      </div>
      <div className="icon pdf">
        <img src="/doc-icons/pdf.png" alt="" />
      </div>
      <div className="icon spotify">
        <img src="/doc-icons/spotify.png" alt="" />
      </div>
      <div className="icon mail">
        <img src="/doc-icons/gmail.png" alt="" />
      </div>
      <div className="icon link">
        <img src="/doc-icons/link.png" alt="" />
      </div>
      <div className="icon terminal">
        <img src="/doc-icons/terminal.png" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
