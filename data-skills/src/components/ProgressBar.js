import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  const radius = 30;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const strokeDashoffset = useTransform(
    smoothProgress,
    [0, 1],
    [circumference, 0]
  );

  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', latest => {
      setPercentage(Math.round(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div style={{
      position: 'fixed',
      top: '120px',
      left: '4.1%',
      transform: 'translateX(-50%)',
      zIndex: 105,
    }}>
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#EFF0F2"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <motion.circle
          stroke="#78ABEE"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: strokeDashoffset,
            rotate: -90,
            transformOrigin: '50% 50%',
          }}
        />
      </svg>
    </div>
  );
};

export default ProgressBar;