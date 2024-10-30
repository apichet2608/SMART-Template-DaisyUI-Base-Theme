import React from "react";
import { Code2 } from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "GraphQL"],
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "AWS", "CI/CD"],
  },
];

export function Skills() {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Code2 className="w-6 h-6 text-violet-400" />
        <h2 className="text-2xl font-semibold">Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-violet-500/20 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
