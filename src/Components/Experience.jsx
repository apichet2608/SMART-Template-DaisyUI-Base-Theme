import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Fujikura Electronic",
    position: "Software Engineer",
    period: "2023 - Present",
    description: [
      "Lead development of applications using React and Node.js",
      "Mentored junior developers and conducted code reviews",
      "Improved application performance by 40% through optimization",
    ],
  },
  //   {
  //     company: "Digital Solutions Ltd",
  //     position: "Software Engineer",
  //     period: "2018 - 2020",
  //     description: [
  //       "Developed and maintained multiple client-facing applications",
  //       "Implemented CI/CD pipelines reducing deployment time by 60%",
  //       "Collaborated with UX team to improve user experience",
  //     ],
  //   },
];

export function Experience() {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="w-6 h-6 text-violet-400" />
        <h2 className="text-2xl font-semibold">Experience</h2>
      </div>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <p className="text-violet-400">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-400">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
