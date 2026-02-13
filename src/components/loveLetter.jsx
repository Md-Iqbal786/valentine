import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoveLetter() {
    const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#da4e88] via-[#d10341] to-[#790075] ">
      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-pulse absolute top-10 left-10 text-white text-3xl">
          💖
        </div>
        <div className="animate-bounce absolute bottom-20 right-20 text-white text-2xl">
          💕
        </div>
        <div className="animate-ping absolute top-1/2 left-1/4 text-white text-xl">
          💗
        </div>
      </div>

      {/* Letter Card */}
      <div
        className={`relative max-w-3xl mx-6 bg-transparent/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] text-white/80 rounded-3xl p-12 border border-white transition-all duration-1000 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl font-extrabold text-center text-[#facc15] drop-shadow-lg mb-10">
          To The Love of My Life ❤️
        </h1>

        <div className="text-[#f5e6d3] text-lg leading-9  space-y-6 font-medium">
          <p className="text-2xl">My Love,</p>

          <p>
            Pata nahi kaise start karun… par ek baat sach hai — main tumse bahut
            zyada pyaar karta hoon. Itna zyada ki kabhi kabhi khud samajh nahi
            aata ki tum meri life ka hissa kaise ban gayi… aur kab meri life hi
            ban gayi.
          </p>

          <p>
            Jab bhi tum hasti ho na, lagta hai duniya thodi aur bright ho gayi.
            Tumhari awaaz, tumhari baatein, tumhara “arey pagal ho kya?” bolna…
            sab kuch mera favourite hai mujhe nye nye naam se bulana , kabhi
            ullu kbhi kuch kbhi kuch bolna bahutt achha lgta hai, romantic names
            bhi deti ho like Hunny bunny , baby , jaan , Honey....
          </p>

          <p>
            Sach kahun toh tum sirf meri girlfriend nahi ho. Tum meri peace ho.
            Mere har stressful din ka solution ho. Jab sab kuch ulta lagta hai,
            bas tumhari yaad seedha kar deti hai sab. you are my StressReliefer
          </p>

          <p>
            Mujhe tumhari aadat ho gayi hai… aur ye aadat main kabhi chhodna
            nahi chahta. Tumhare bina din adhoora lagta hai. Tumhare bina future
            imagine karna bhi mushkil lagta hai.
          </p>

          <p>
            Main perfect nahi hoon, kabhi kabhi stupid bhi ho jaata hoon… par ek
            cheez pakki hai — mera pyaar tumhare liye hamesha real rahega. Main
            hamesha tumhara support ban ke rahunga, tumhara safe place ban ke
            rahunga, aur haan… thoda sa tumhe tang bhi karta rahunga 😌❤️
          </p>
          <p>
            Tum meri aadat nahi, meri zarurat ban chuki ho, har subah ki pehli
            soch aur har raat ka sukoon ban chuki ho. Tumhari muskurahat se hi
            meri duniya roshan hoti hai, warna ye dil toh bas tumhara naam lekar
            hi dhadakta hai. Main lafzon me kaise bataun kitna pyaar hai tumse,
            bas itna samajh lo… meri har dua me sabse pehle tum hi hoti ho. ❤️
          </p>
          <p>Bas itna yaad rakhna —</p>
          <h2>Main tumse sirf aaj nahi, har kal zyada pyaar karunga.</h2>

          <p className="mt-10 text-cream-700 font-bold text-xl">
            Forever Yours, <br />
            Md Iqbal ❤️
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => navigate("/LoveMessage")}
            className="mt-5 px-5 py-2 text-xl font-bold rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-2xl hover:scale-110 transition-all duration-300"
          >
            click for SecretSomething
          </button>
        </div>
      </div>
    </div>
  );
}
