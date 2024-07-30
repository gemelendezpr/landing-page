"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "My goal is to become a beacon of inspiration, guiding the growth and development of fellow engineers like myself who have taken unconventional paths. Despite facing non-traditional career trajectories, individuals like us have proven that we can make a difference both within and outside the company.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Gerardo Melendez",
    },
    // {
    //   fieldName: "Phone",
    //   fieldValue: "(+40) 321 654 678",
    // },
    // {
    //   fieldName: "Experience",
    //   fieldValue: "12+ Years",
    // },
    {
      fieldName: "LinkedIn",
      fieldValue: "gemelendezpr",
    },
    // {
    //   fieldName: "Nationality",
    //   fieldValue: "American",
    // },
    // {
    //   fieldName: "Email",
    //   fieldValue: "gerardomelendez05@gmail.com",
    // },
    {
      fieldName: "Job Status",
      fieldValue: "Open to work",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish",
    },
    {
      fieldName: "Email",
      fieldValue: "gerardomelendez05@gmail.com",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Demonstrating a journey of growth and achievement through diverse roles, each contributing to a solid foundation in building my character, professional skills, and values.",
  items: [
    {
      company: "Headstarter",
      position: "Software Engineering Fellow",
      duration: "2024 - Present",
    },
    {
      company: "Popular Inc.",
      position: "Banking Consultant Digital Channels",
      duration: "Mar 2021 - Oct 2023",
    },
    {
      company: "Popular Inc.",
      position: "Telephone Banking Consultant",
      duration: "Feb 2018 - Mar 2021",
    },
    {
      company: "West Elm by William Sonoma Inc.",
      position: "Visual Merchandiser | Stock Associate ",
      duration: "Oct 2014 - Feb 2018",
    },
    {
      company: "GAP Inc.",
      position: "Sales Stock Associate",
      duration: "Oct 2011 - Sep 2014",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Building a strong foundation through diverse educational experiences, continuous learning, and practical application, staying at the forefront of technology and innovation.",
  items: [
    {
      institution: "Live Virtual Course",
      degree: "Codesmith CS Prep",
      duration: "June 2024",
    },
    {
      institution: "Live Virtual Course",
      degree: "Codesmith JSB",
      duration: "May 2024",
    },
    {
      institution: "Ironhack- Miami",
      degree: "Full Stack Web Development",
      duration: "Oct 2023 - Jan 2024",
    },
    {
      institution: "Inter-American University of Puerto Rico",
      degree: "Bachelor of Science, Natural Sciences",
      duration: "2020",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Crafting seamless digital experiences with a blend of creativity and technical proficiency to drive innovation and user engagement.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl text-accent font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-white">{item.duration}</span>
                          <h3 className="text-xl text-accent max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl text-accent font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-white">{item.duration}</span>
                          <h3 className="text-xl text-accent max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl text-accent font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="text-white w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl text-accent font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-accent">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
