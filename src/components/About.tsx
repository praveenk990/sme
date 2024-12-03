"use client";
import { OUR_EXPERTISE } from "../constants/index";
import { BackgroundGradient } from "./ui/background-gradient";

const About = () => {
  return (
    <div className="p-12">
      <h2 className="text-center text-4xl leading-8 font-extrabold sm:text-5xl">
        Our Expertise
      </h2>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {OUR_EXPERTISE.map((OUR_EXPERTISE) => (
            <OurItem
              key={OUR_EXPERTISE.title}
              title={OUR_EXPERTISE.title}
              icon={OUR_EXPERTISE.icon}
              description={OUR_EXPERTISE.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

type OurItemProps = {
  title: string;
  icon: string;
  description: string;
};

const OurItem: React.FC<OurItemProps> = ({ title, icon, description }) => {
  return (
    <div className="flex justify-center">
      <BackgroundGradient className="flex flex-col rounded-[22px] bg-white overflow-hidden h-full max-w-sm">
        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
          <h3 className="text-lg sm:text-xl text-black font-extrabold ">
            {title}
          </h3>
          <img src={icon} alt="ele" className="rounded mt-2" />
          <p className="mt-3 text-mb text-neutral-600 flex-grow">
            {description}
          </p>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default About;
