
import React from 'react';

const WavyBackground = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden opacity-50">
            <svg
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[1200px] min-h-[1200px] w-full h-full"
                width="1440"
                height="1024"
                viewBox="0 0 1440 1024"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <g>
                    {[...Array(60)].map((_, i) => (
                         <path 
                             key={`wave-bottom-${i}`}
                             d={`M -200 ${650 + i * 8} C 300 ${800 + i*3}, 800 ${500 - i*4}, 1640 ${600 + i * 8}`}
                             stroke="#D946EF"
                             strokeWidth="1"
                             strokeOpacity={(i % 10) * 0.015 + 0.05}
                         />
                    ))}
                    {[...Array(60)].map((_, i) => (
                         <path 
                             key={`wave-top-${i}`}
                             d={`M -200 ${450 + i * 8} C 200 ${300 + i*4}, 700 ${700 - i*3}, 1640 ${500 + i * 8}`}
                             stroke="#38BDF8"
                             strokeWidth="1"
                             strokeOpacity={(i % 10) * 0.015 + 0.05}
                         />
                    ))}
                </g>
            </svg>
        </div>
    );
};

export default WavyBackground;
