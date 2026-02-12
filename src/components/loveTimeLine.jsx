import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";

export default function LoveTimeline() {
  const navigate = useNavigate();
  const timeline = [
    {
      year: "19/02/2019",
      title: "propose",
      desc: "In 2019, I was brave enough to let my heart speak her name.💍✨ ",
    },
    {
      year: "04/08/2020",
      title: "First Hug",
      desc: "Bas ek baar gale laga lo, saari thakan aur tension khud hi chali jati thi",
    },
    {
      year: "14/09/2020",
      title: "First Kiss 💋",
      desc: "Your lips don’t just smile… they start wars in my heart.💋",
    },
    {
      year: "02/11/2021",
      title: "Meet At Home",
      desc: "That Was awesome, Bahurani apne sasural pehli bar gyi thi",
    },
    {
      year: "11/03/2023",
      title: "Lost Contact",
      desc: "Ek saal baat nahi hui, par dil ne kabhi tumse baat karna band nahi kiya.",
    },
    {
      year: "17/05/2024",
      title: "Again in contact",
      desc: "Ek saal ki khamoshi ke baad, tumse phir baat hui… aur laga jaise meri duniya wapas mil gayi. 💖",
    },
    {
      year: "30/05/2024",
      title: "Meet at Station",
      desc: "Platform par tumhe dekha, aur us ek hug ne poore ek saal ki doori mita di.😍",
    },
    {
      year: "10/07/2024",
      title: "Varansi Ghat visit",
      desc: "Banaras ki shaam, Ganga ki hawa… aur tum mere saath — uss pal se zyada khoobsurat kuch nahi tha.",
    },
    {
      year: "",
      title: "Confidential😉😉😉",
      desc: "Duniya se chhupa kar milte hain, par dil toh har jagah tumhara naam leta hai.",
    },
    {
      year: "present",
      title: "Forever",
      desc: "Yeh mulaqat bas ek pal ka silsila na rahe, Har janam mein tumse milna meri kismat bana rahe",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#aa054a] via-[#1f010a] to-[#70026d] py-16 overflow-hidden">
      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-500 opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              fontSize: `${12 + Math.random() * 24}px`,
            }}
          >
            💞
          </span>
        ))}
      </div>

      <h1 className="text-center text-4xl md:text-6xl font-extrabold text-pink-400 mb-20 drop-shadow-[0_0_20px_rgba(255,105,180,0.6)]">
        Our Love Timeline 💕
      </h1>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-red-400 to-pink-600 shadow-[0_0_30px_rgba(255,105,180,0.8)]" />

        <div className="space-y-24">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-pink-500 shadow-[0_0_20px_rgba(255,105,180,1)] z-10" />

              {/* Card */}
              <div
                className={`w-full md:w-[45%] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl
                hover:scale-105 hover:shadow-[0_0_40px_rgba(255,105,180,0.6)]
                transition-all duration-500`}
              >
                <span className="text-sm text-pink-300 font-semibold">
                  {item.year}
                </span>
                <h2 className="text-2xl font-bold text-white mt-2">
                  {item.title}
                </h2>
                <p className="text-pink-100 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={() => navigate("/CandleDinner")}
          className="text-[#dfd2b4] text-2xl  p-4 rounded-full bg-gradient-to-br from-[#aa054a] via-[#1f010a] to-[#70026d] shadow-md shadow-rose-400 animate-zoomIn"
        >
          Wanna Date?
        </button>
      </div>

      {/* Final Love Line */}
      <p className="mt-24 text-center text-xl text-pink-300 italic">
        “With you, every moment becomes a memory worth forever.” 💖
      </p>

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(100vh) scale(1); opacity: 0; }
            50% { opacity: 0.6; }
            100% { transform: translateY(-10vh) scale(1.3); opacity: 0; }
          }
          @keyframes zoomIn {
            0% { opacity: 0.2; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1.1); }
          }
          .animate-zoomIn {
            animation: zoomIn 20s ease-out forwards;
            animation-iteration-count: infinite;
          }
          .animate-float {
            animation-name: float;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
      </style>
    </div>
  );
}
