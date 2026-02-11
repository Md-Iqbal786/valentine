import { useState, useEffect } from "react";
import doku from "../assets/kiss-love.gif";
import bgSong from "../assets/song.mp3";
import { useNavigate } from "react-router-dom";


export default function ValentinePage() {
  const navigate = useNavigate();
  const [noPos, setNoPos] = useState({ top: "55%", left: "55%" });
  const [showLove, setShowLove] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const moveNoButton = () => {
    const top = Math.random() * 50 + "%";
    const left = Math.random() * 80 + "%";



    setNoPos({ top, left });
  };

  // 🎉 Confetti on YES
  const handleYes = () => {
    setShowLove(true);
    const emojis = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + "%",
      delay: Math.random() * 2,
    }));
    setConfetti(emojis);
  };

  // 🎶 Play music once
  useEffect(() => {
    const audio = document.getElementById("bg-music");
    audio?.play().catch(() => {});
  }, []);

  return (
    <div className="min-h-screen overflow-hidden relative flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-rose-200 to-pink-500">
      {/* 🎶 Background Music */}
      <audio id="bg-music" loop>
        <source src={bgSong} type="audio/mpeg" />
      </audio>

      {/* 💕 Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="absolute text-pink-400 text-2xl animate-float"
          style={{
            left: Math.random() * 100 + "%",
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          💖
        </span>
      ))}

      <div className="relative group p-2">
        {/* 🌸 Animated glowing border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-400 via-red-500 to-rose-400 blur-md opacity-70 group-hover:opacity-100 animate-pulse"></div>

        {/* 💖 Main card */}
        <div className="relative border-[5px] border-red-400 rounded-3xl bg-white/40 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
          {/* 🖼 Image */}
          <img
            src={doku}
            alt="pic"
            className="rounded-2xl m-2 max-w-full transition-all duration-500 group-hover:scale-105"
          />

          {/* 💕 Floating hearts on hover */}
          <div className="absolute top-2 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 text-2xl animate-bounce">
            💖
          </div>
        </div>
      </div>

      {/* 💘 Curved Heading */}
      <svg viewBox="0 0 800 250" className="w-[90%] max-w-[800px] ">
        <defs>
          <linearGradient id="valGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff4d6d" />
            <stop offset="50%" stopColor="#d90642" />
            <stop offset="100%" stopColor="#ff85a2" />
          </linearGradient>
          <path id="curve" d="M 50 200 Q 400 30 750 200" />
        </defs>

        <text
          fill="url(#valGrad)"
          className="font-['Dancing_Script'] text-[44px] sm:text-[60px] md:text-[68px] drop-shadow-[0_10px_20px_rgba(217,6,66,0.5)] flex  flex-col"
        >
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            WillYouBeMyValentine?💘
          </textPath>
        </text>
      </svg>
      <div className="mt-0 text-5xl top-0 animate-ping">
        💞
      </div>

      {/* 💕 Buttons Area */}
      {!showLove && (
        <div className="relative w-full h-[220px] flex justify-center items-center gap-10">
          {/* YES */}
          <button
            onClick={handleYes}
            className="px-12 py-5 text-2xl font-bold rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-2xl hover:scale-110 transition-all duration-300"
          >
            YES 💕
          </button>

          {/* NO (runs away) */}
          <button
            onMouseEnter={moveNoButton}
            className="absolute px-8 py-3 text-xl text-white rounded-full bg-[#513f3f] font-bold shadow-lg transition-all duration-300"
            style={noPos}
          >
            NO😏
          </button>
        </div>
      )}

      {/* 💖 Love Message */}
      {showLove && (
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-['Dancing_Script'] text-rose-700 mb-4">
            Hurraahhh!!!!!! Love You Baby
          </h2>
          <p className="text-xl text-rose-600">
            You just made my heart the happiest 😍💘
          </p>
          <button
          onClick={() => navigate("/timeLine")}
          className="mt-10 text-xl bg-rose-500 p-3 text-white rounded-3xl animate-bounce"
          >
            Click For Our Love History
          </button>
        </div>
      )}

      {/* 🎉 Confetti */}
      {confetti.map((c) => (
        <>
          <div
            
            key={c.id}
            className="absolute text-4xl animate-ping "
            style={{
              left: c.left,
              animationDelay: `${c.delay}s`,
            }}
            
          >
            🎉
          </div>
          
          
        </>
      ))}

      
      

      {/* ✨ Animations */}
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        .animate-float {
          animation: float 10s linear infinite;
        }

        @keyframes confetti {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti 3s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        `}
      </style>
    </div>
  );
}
