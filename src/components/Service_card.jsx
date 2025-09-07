import { useState, useCallback } from "react";
import { motion } from "motion/react"

const Service_card = ({ Services, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setPosition({ x, y });
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
    setMousePos({ x: 0, y: 0 });
  }, []);

  const blueWeight = Math.max(0, -position.x) * 2 + 0.5;
  const purpleWeight = Math.max(0, position.x) * 2 + 0.5;
  const indigoWeight = 0.8;

  const transformStyle = {
    transform: `perspective(800px) rotateX(${position.y * -8}deg) rotateY(${
      position.x * 12
    }deg) translateY(-6px)`,
  };

  const glowStyle = {
    background: `radial-gradient(
      circle 450px at ${mousePos.x + position.x * 100}px ${mousePos.y + position.y * 100}px,
      rgba(59, 130, 246, ${blueWeight}),
      rgba(99, 102, 241, ${indigoWeight}),
      rgba(139, 92, 246, ${purpleWeight}),
      transparent 90%
    )`,
    opacity: mousePos.x === 0 && mousePos.y === 0 ? 0 : 0.9,
    transition: mousePos.x === 0 && mousePos.y === 0 ? "opacity 0.4s ease-out" : "none",
    filter: `blur(40px) brightness(1.4)`
  };
  return (
    <motion.div
    initial={{ y: 30, opacity: 0 }}
      whileInView={{opacity: 1, y: 0}}
      transition={{ duration: 0.5,delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border 
                 border-gray-200 dark:border-gray-700 shadow-gray-100 shadow-2xl 
                 dark:shadow-white/10 transition-transform duration-300 ease-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
      aria-describedby={`service-${index}-desc`}
    >
      {/* Glow effect */}
      <div
        
     className="pointer-events-none absolute -inset-1/2 rounded-full blur-3xl mix-blend-screen"
        style={glowStyle}
        aria-hidden="true"
      />

      {/* Card Content */}
      <div className="flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
          <img
            src={Services.icon}
            alt=""
            className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold">{Services.title}</h3>
          <p className="text-sm mt-2">{Services.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Service_card;  