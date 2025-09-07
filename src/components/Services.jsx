import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import Service_card from "./Service_card";
import { motion } from "motion/react"

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "Boost your brand's visibility with our targeted advertising solutions.",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description: "Engage your audience with compelling and relevant content.",
      icon: assets.marketing_icon,
    },

    {
      title: "Content Writing",
      description:
        "Crafting high-quality, SEO-optimized content to captivate your audience.",
      icon: assets.content_icon
    },
    {
      title: " Social Media ",
      description:
        "Enhance your online presence with our expert social media management services.",
      icon: assets.social_icon,
    },
  ];
  return <motion.div 
       initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}  
  id="services" className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
   <img src={assets.bgImage2} alt="" className="absolute -top-110  -left-70 -z-1 dark:hidden"/>
   <Title title="How can we help you?" desc="From strategy to Execution,we craft digital solution that move your business forward" />
   <div className="flex flex-col md:grid md:grid-cols-2 ">
    {servicesData.map((Services, index) => (
     
        <Service_card  key={index} Services={Services} index={index} />
  
    ))}
   </div>
  </motion.div>

};

export default Services;
