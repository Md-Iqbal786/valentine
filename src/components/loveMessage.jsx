import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import img1 from "../../public /images/img1.jpeg";
import img2 from "../../public /images/img2.jpeg";
import img3 from "../../public /images/img3.jpeg";
import img4 from "../../public /images/img4.jpeg";
import img5 from "../../public /images/img5.jpeg";
import img6 from "../../public /images/img6.jpeg";
import img7 from "../../public /images/img7.jpeg";
import img8 from "../../public /images/img8.jpeg";
import img9 from "../../public /images/img9.jpeg";
import img10 from "../../public /images/img10.jpeg";
import img11 from "../../public /images/img11.jpeg";
import img12 from "../../public /images/img12.jpeg";
import img13 from "../../public /images/img13.jpeg";
import img14 from "../../public /images/img14.jpeg";
import img15 from "../../public /images/img15.jpeg";
import img16 from "../../public /images/img16.jpeg";
import img17 from "../../public /images/img17.jpeg";
import img18 from "../../public /images/img18.jpeg";
import img19 from "../../public /images/img19.jpeg";
import img20 from "../../public /images/img20.jpeg";
import img21 from "../../public /images/img21.jpeg";
import img22 from "../../public /images/img22.jpeg";
import img23 from "../../public /images/img23.jpeg";
import img24 from "../../public /images/img24.jpeg";

export default function LoveMessage() {

  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    `${img1}`,
    `${img2}`,
    `${img3}`,
    `${img4}`,
    `${img5}`,
    `${img6}`,
    `${img7}`,
    `${img8}`,
    `${img9}`,
    `${img10}`,
    `${img11}`,
    `${img12}`,
    `${img13}`,
    `${img14}`,
    `${img15}`,
    `${img16}`,
    `${img17}`,
    `${img18}`,
    `${img19}`,
    `${img20}`,
    `${img21}`,
    `${img22}`,
    `${img23}`,
    `${img24}`,
  ];

  const correctPassword = "1902"; // simple hardcoded password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === correctPassword) {
      setIsAuthenticated(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong Password!",
        iconColor: "#dc2626",
        confirmButtonColor: "#be123c",
        background:
          "linear-gradient(135deg, #f43f5e 0%, #fb7185 50%, #fecdd3 100%)",
        color: "#7f1d1d",
      });
    }
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#da4e88] via-[#d10341] to-[#790075]  p-10">
        <h1 className="text-4xl font-bold text-center text-[#facc15] mb-10">
          Our Beautiful Memories 🌹
        </h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform hover:scale-105 transition duration-500"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt="memory"
                className="w-full h-64 object-contain bg-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={() => navigate("/")}
            className="mt-5 px-5 py-2 text-xl font-bold rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-2xl hover:scale-110 transition-all duration-300"
          >
            Watch Again
          </button>
        </div>

        {/* Fullscreen Modal */}
        {selectedImg && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative">
              <img
                src={selectedImg}
                alt="Full View"
                className="max-h-[80vh] rounded-2xl shadow-2xl"
              />

              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-3 right-3 bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#da4e88] via-[#d10341] to-[#790075] ">
      <div className="backdrop-blur-xl bg-white/10 shadow-2xl rounded-2xl p-10 w-[30%]  border border-white">
        <h2 className="text-2xl font-bold text-center text-white mb-6 tracking-wide">
          🔐 Secret Access
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="password"
            placeholder="Enter Password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="px-4 py-3 rounded-xl bg-white/80 backdrop-blur-md 
                   border border-pink-200 focus:outline-none 
                   focus:ring-2 focus:ring-pink-400 
                   focus:scale-105 transition duration-300
                   placeholder:text-pink-400 text-center"
          />

          <button
            className="bg-gradient-to-r from-pink-500 to-rose-500 
                   text-white font-semibold py-3 rounded-xl 
                   shadow-lg hover:shadow-pink-400/50
                   hover:scale-105 active:scale-95 
                   transition duration-300"
          >
            Enter 💖
          </button>
        </form>
      </div>
    </div>
  );
}
