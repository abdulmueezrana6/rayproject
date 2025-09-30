
import React from 'react';
const StatCard = ({ title, value }) => {
 const formattedValue = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency:'USD',
  minimumFractionDigits: 2
}).format(value);

    return (
        <div className="w-full md-1/2 bg-slate-800/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center shadow-lg hover-white/20 hover-slate-800/30 transition-all duration-300">
            <p className="text-xs sm-sm text-gray-400 tracking-wider mb-2">{title}</p>
            <p className="text-2xl sm-3xl font-semibold text-white">{formattedValue}</p>
        </div>
    );
};

export default StatCard;
