import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "motion/react";

const OurWork = () => {
  const WorkData = [
    {
      title: "Mobile app Marketing",
      description:
        "Boost your app's visibility and downloads with our expert mobile app marketing strategies.",
      icon: assets.work_mobile_app,
    },
    {
      title: "Dashboard Managment",
      description:
        "Optimize your operations with our intuitive dashboard management solutions",
      icon: assets.work_dashboard_management,
    },
    {
      title: "Fitness App Promotion",
      description:
        "Elevate your fitness app's reach and engagement with our targeted promotion strategies.",
      icon: assets.work_fitness_app,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.1 }}
      viewport={{ once: true }}
      id="our-work"
      className=" flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="From Strategy to execution,we craft digital solution that move your business forward"
      />
      <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-6">
        {WorkData.map((work, index) => (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img src={work.icon} alt="" className="w-full rounded-xl" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
