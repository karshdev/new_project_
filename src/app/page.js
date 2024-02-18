"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const words = [
    "जय श्री राम",
    "जय बजरंगबली",
    "ॐ नमः शिवाय",
    "जय श्री कृष्णा",
    "राधे कृष्णा",
    "राधे कृष्णा",
    "जय सिया राम",
    "जय माँ काली",
    "जय श्री कृष्णा",
    "जय श्री राम",
    "जय बजरंगबली",
    "स्वागत है",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(wordTimer);
        router.push("/landing");
      }
    }, 300);

    return () => {
      clearInterval(wordTimer);
    };
  }, [currentWordIndex, router]);

  return (
    <motion.div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        position: "relative",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        key={words[currentWordIndex]}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[25px]"
      >
        {words[currentWordIndex]}
      </motion.h1>
    </motion.div>
  );
}
