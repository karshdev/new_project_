"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Heading = () => {
  const [text, setText] = useState("");
  const [languageIndex, setLanguageIndex] = useState(0);
  const languages = [
    "Welcome to our website here you will get all Chalisa Bhajans Aarti and Kathas and Local Bhajans of your area jai shree ram",
    "आपका स्वागत है हमारी वेबसाइट पर। यहाँ आपको सभी चालीसा, भजन, आरती और कथाएँ मिलेंगी, साथ ही आपके क्षेत्र के स्थानिक भजन भी। जय श्री राम।",
    "स्वागतम्! आमस्य वेबसायिते। इथं तव भविष्यति सर्वा चालीसा भजनाः आरतिः च कथा च स्थानिकाः भजनाः तव क्षेत्रे। जय श्री राम।",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [languages.length]);

  useEffect(() => {
    setText(languages[languageIndex]);
  }, [languageIndex, languages]);

  return (
    <div className="w-[100%] flex items-center justify-center p-10">
      <motion.div
        className="mb-20 max-w-[50rem] h-[200px] text-center sm:mb-0 scroll-mt-[100rem]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-[30px] sm:text-[40px] font-bold text-gray-700 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {text}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Heading;
