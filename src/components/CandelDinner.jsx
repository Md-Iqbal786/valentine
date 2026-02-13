import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CandleDinner() {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);

  const [menu, setMenu] = useState({
    starter: "",
    main: "",
    dessert: "",
    drink: "",
    music: "",
  });

  const prices = {
    starter: 599,
    main: 5199,
    dessert: 549,
    drink: 2299,
  };

  const total =
    (menu.starter ? prices.starter : 0) +
    (menu.main ? prices.main : 0) +
    (menu.dessert ? prices.dessert : 0) +
    (menu.drink ? prices.drink : 0);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#86013b] via-[#be0149] to-[#ff0ba9] flex items-center justify-center overflow-hidden px-4">
      <div className="relative z-10 max-w-md w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-[0_0_60px_rgba(255,105,180,0.4)] p-8 text-center text-pink-100">
        {!confirmed ? (
          <>
            <h1 className="text-4xl font-extrabold text-pink-200">
              Candle Night With You 🕯️
            </h1>
            <p className="text-pink-200 mt-2 italic">
              Let’s plan our perfect night.
            </p>

            {/* MENU OPTIONS */}
            <div className="mt-6 space-y-3 text-left">
              <select
                onChange={(e) => setMenu({ ...menu, starter: e.target.value })}
                className="w-full p-3 rounded-xl bg-black/40 text-pink-200"
              >
                <option value="">🥗 Starters</option>
                <option>Cheese Garlic Bread</option>
                <option>Crispy Momos</option>
                <option>Stuffed Mushrooms</option>
              </select>

              <select
                onChange={(e) => setMenu({ ...menu, main: e.target.value })}
                className="w-full p-3 rounded-xl bg-black/40 text-pink-200"
              >
                <option value="">🍽️ Main Course</option>
                <option>Heart-Shaped Pizza</option>
                <option>Veg Hakka Noodles</option>
                <option>Sahi Paneer + Butter Naan</option>
                <option>Dal Makhani + Garlic Naan</option>
                <option>Paneer Butter Masala + Butter Naan</option>
                <option>Sahi Paneer</option>

              </select>

              <select
                onChange={(e) => setMenu({ ...menu, dessert: e.target.value })}
                className="w-full p-3 rounded-xl bg-black/40 text-pink-200"
              >
                <option value="">🍰 Desserts</option>
                <option>Chocolate Lava Cake</option>
                <option>Ferrero Rocher Cake</option>
                <option>Red Velvet Cupcake</option>
                <option>Gulab Jamun with ice cream</option>
                <option>Rasmalai</option>
                <option>Strawberry Cheesecake</option>
              </select>

              <select
                onChange={(e) => setMenu({ ...menu, drink: e.target.value })}
                className="w-full p-3 rounded-xl bg-black/40 text-pink-200"
              >
                <option value="">🍷 Drinks</option>
                <option>Red Wine</option>
                <option>Strawberry Mocktail</option>
                <option>Fresh Lime Soda</option>
                <option>Cold Coffee</option>
                <option>Mojito (non-alcoholic)</option>
              </select>

              <select
                onChange={(e) => setMenu({ ...menu, music: e.target.value })}
                className="w-full p-3 rounded-xl bg-black/40 text-pink-200"
              >
                <option value="">🎶 Music Mood</option>
                <option>Piano Love</option>        
                <option>Soft Bollywood Love</option>
                <option>Romance Song</option>
                <option>hard Sensual Songs</option>
              </select>
            </div>

            {/* MENU SUMMARY */}
            <div className="mt-6 bg-black/40 rounded-xl p-4 text-sm">
              <h3 className="text-pink-400 font-semibold mb-2">
                💖 Your Selected Menu
              </h3>
              {menu.starter && <p>🥗 {menu.starter}</p>}
              {menu.main && <p>🍽️ {menu.main}</p>}
              {menu.dessert && <p>🍰 {menu.dessert}</p>}
              {menu.drink && <p>🍷 {menu.drink}</p>}
              {menu.music && <p>🎶 {menu.music}</p>}

              <p className="mt-3 text-pink-300 font-semibold">
                Estimated Total: ₹{total}
              </p>
            </div>

            <button
              onClick={() => setConfirmed(true)}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-pink-800 to-red-500 text-white font-semibold hover:scale-105 transition"
            >
              Confirm Our Date 💖
            </button>
          </>
        ) : (
          <>
          {/* FAKE BILL */}
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-extrabold text-pink-400">
              💕 Date Confirmed
            </h2>

            <div className="mt-6 bg-black/40 rounded-xl p-4 text-left text-sm">
              <p className="flex justify-between">
                <span>Starters</span>
                <span>₹{menu.starter ? prices.starter : 0}</span>
              </p>
              <p className="flex justify-between">
                <span>Main Course</span>
                <span>₹{menu.main ? prices.main : 0}</span>
              </p>
              <p className="flex justify-between">
                <span>Desserts</span>
                <span>₹{menu.dessert ? prices.dessert : 0}</span>
              </p>
              <p className="flex justify-between">
                <span>Drinks</span>
                <span>₹{menu.drink ? prices.drink : 0}</span>
              </p>

              <hr className="my-3 border-pink-400/30" />

              <p className="flex justify-between font-bold text-pink-300">
                <span>Total</span>
                <span>₹{total}</span>
              </p>

              <p className="mt-4 text-center text-pink-400 italic">
                Paid by Love 💖 (No refunds ever)
              </p>
            </div>

            <p className="mt-6 text-pink-200 italic">
              Best night of my life — because it’s with you.
            </p>
          </div>
          <div>
            <button
            onClick={()=> navigate("/LoveLetter")}
            className="mt-5 px-5 py-2 text-xl font-bold rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-2xl hover:scale-110 transition-all duration-300"
          >
             click for loveMessage
          </button>
          </div>
          </>
        )}
      </div>

      {/* fade animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
            @keyframes fadeUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
            .animate-fadeUp {
  animation: fadeUp 0.8s ease-out forwards;
}
        `}
      </style>
    </div>
  );
}
