import React, { useState, useEffect } from 'react';
import {motion, useScroll} from 'framer-motion'
const ProgressBar = () => {
    const {scrollYProgress} = useScroll();
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setPercentage(Math.round(latest * 100));
        });

        return () => unsubscribe(); // Clean up on unmount
    }, [scrollYProgress]);

    return (
        <div style={{ background: '#EFF0F2', height: '22px', 
            position: 'fixed', top: '110px', left: '22.33%', 
            right: '22.33%', width: '55.34%', borderRadius: '100px', zIndex: 99 }}>
            <motion.div
                className="progressBar"
                style={{
                    width: `${scrollYProgress.get() * 55.34}%`,  // Adjust width based on scrollYProgress and box width
                    height: '22px', // Set height of progress bar
                    background: '#4caf50', // Background color for the progress bar (green)
                    borderRadius: '100px', // Rounded corners
                    transformOrigin: '0%',
                }}
            />
            <div style={{ textAlign: 'right', marginTop: '22px', color: '#000',}}>
                <p style={{
                    margin: 0,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    marginRight: '0',
                    whiteSpace: 'nowrap',
                }}>
                    {percentage}% Completed
                </p>
            </div>
        </div>
    );
}

export default ProgressBar;

