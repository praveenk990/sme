"use client";

import CountUp from "react-countup";

const counter = [
  {
    num: 25,
    text: "years of experience",
  },
  {
    num: 200,
    text: "completed projects",
  },
  {
    num: 50,
    text: "satisfied clients",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {counter.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Animated count */}
              <div>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold text-black"
                  suffix="+"
                />
              </div>
              {/* Text under the number */}
              <p className="text-lg mt-2 text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
