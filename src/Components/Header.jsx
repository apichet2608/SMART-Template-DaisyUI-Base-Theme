import React from "react";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

export function Header() {
  return (
    <header className="text-center mb-12">
      <img
        src="https://raw.githubusercontent.com/react-icons/react-icons/master/react-icons.svg"
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-violet-500 shadow-xl"
      />
      <h1 className="text-4xl font-bold mb-2">Apichet Juntodum</h1>
      <h2 className="text-xl text-gray-300 mb-4">Software Engineer</h2>
      <div className="flex justify-center gap-4">
        <a href="#" className="hover:text-violet-400 transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-violet-400 transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-violet-400 transition-colors">
          <Mail className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-violet-400 transition-colors">
          <Globe className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
}
