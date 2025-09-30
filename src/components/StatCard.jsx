import React, { useEffect, useState, useRef } from 'react';

const StatCard = ({ title, value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const startValue = useRef(0);
  const animationRef = useRef(null);

  useEffect(() => {
    const duration = 1000; // thời gian chạy animation (ms)
    const startTime = performance.now();
    const from = startValue.current;
    const to = value;

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const current = from + (to - from) * progress;
      setDisplayValue(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        startValue.current = to; // lưu giá trị cuối
      }
    };

    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [value]);

  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(displayValue);

  return (
    <div className="w-full md-1/2 bg-slate-800/20 backdrop-blur-md border border-white/10 rounded-2xl p-3 text-center shadow-lg hover-white/20 hover-slate-800/30 transition-all duration-300">
      <p className="text-xs sm-sm text-gray-400 tracking-wider mb-2">{title}</p>
      <p className="text-2xl sm-3xl font-semibold text-white">{formattedValue}</p>
    </div>
  );
};

export default StatCard;
