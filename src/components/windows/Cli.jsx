import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowsState }) => {
  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        "I am aspiring full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.",
    },
    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () => `Frontend: React, Vanilla JS, Sass, HTML/CSS
Backend: Node.js, Express
Databases: MongoDB,
Tools: Git, Vite, Render, Vercel, Render`,
    },
    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () => `1. Portfolio Website - React + Vite
2. Docs App - React + Vite, Framer Motion
3. Employee Management App - React.js
4. ZenTask Productivity Dashboard - JavaScript, CSS
5. 30+ Projects - HTML,CSS, Scss, JavaScript, React`,
    },
    experience: {
      description: "Freelance Frontend Developer",
      usage: "experience",
      fn: () => `Freelance (Dec 2024 - April 2025)
  - Led development of 2+ applications`,
    },
    contact: {
      description: "Get contact information",
      usage: "contact",
      fn: () => `Email: vermaniraj9607@gmail.com
Phone: +91 99XXXXXX07
Location: Jharkhand, India`,
    },
    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/niraj-verma07", "_blank");
        return "Opening GitHub...";
      },
    },
    resume: {
      description: "Download resume",
      usage: "resume",
      fn: () => "Resume download started...",
    },
    social: {
      description: "View social media links",
      usage: "social",
      fn: () => `Twitter: @devniraj07
LinkedIn: /in/niraj-vermaa
Portfolio: devniraj.netlify.app`,
    },
    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring! 🚀
`;

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"nirajkumarverma:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
