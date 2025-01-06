import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";  // Assuming StickyScroll is correctly imported
import Image from "next/image";

// Define the Project type for clarity
interface ProjectType {
  title: string;
  description: string;
  content: React.JSX.Element;
}

// Define the `projects` array with proper types
const projects: ProjectType[] = [
  // {
  //   title: "Collaborative Editing",
  //   description:
  //     "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  //       Collaborative Editing
  //     </div>
  //   ),
  // },
  {
    title: "ABB Automation test bed solution",
    description:
      "Three phase to single phase 1kV, 500kVA source for Traction AUX converter testing, with safety interlock.3kV, 500KW DC source for Traction CC1500 product, testing setup with Safety interlock.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/prj4.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },

  {
    title: "FIMER Automation test bed solution",
    description:
      "5MW, Solar central Inverter testing setup with safety interlock.2MW, Solar central Inverter testing setup with safety interlock",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/prj2.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "TRSL Automation test bed solution",
    description:
      "3kV, 500KW DC source for EMU & MEMU product testing setup with Safety interlock4.5kV 300KW DC source for LAZIO product testing setup with Safety interlock",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/prj3.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },

  {
    title: "ABB, FIMER, SINENG, HEALTHIUM, WEIR MINERALS and HITACHI Electrical Installations and Establishment",
    description:
      "Complete electrification solution for Factory operations",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/prj1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },

  {
    title: "",
    description:
      "",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/prj1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },

  // {
  //   title: "Version control",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
  //       Version control
  //     </div>
  //   ),
  // },
  // {
  //   title: "Running out of content",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  //       Running out of content
  //     </div>
  //   ),
  // },
];

export function StickyScrollRevealDemo() {
  return (
    <section id="projects-section" className="projects">
    <div className="p-10">
      <h2 className="p-6 mb-2 text-center text-3xl font-extrabold sm:text-4xl lg:text-5xl">
        Project
      </h2>
      {/* Pass `projects` to the StickyScroll component */}
      <StickyScroll content={projects} />
    </div>
    </section>
  );
}

export default StickyScrollRevealDemo;
