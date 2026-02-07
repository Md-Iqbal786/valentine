import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {

  const navigate = useNavigate();
  
  return (
    <div className="bg-[#f67ca2f3] dark:bg-background-dark text-[#181111] dark:text-white transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-red-700">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <div className="text-primary flex size-10 items-center justify-center">
            <span className="material-symbols-outlined text-2xl text-red-600 animate-ping">
              favorite
            </span>
          </div>
          <h2 className="text-[#d60000] text-2xl font-extrabold leading-tight flex-1 text-center pr- bubbly-text animate-bounce">
            My Forever Valentine
          </h2>
          <div className="text-primary flex size-10 items-center justify-center">
            <span className="material-symbols-outlined text-2xl text-red-600 animate-ping">
              favorite
            </span>
          </div>
        </div>
      </header>
      <main className="pt-16 max-w-md w-[90%] mx-auto">
        <section className="p-4 pt-6 my-10">
          <div className="@container">
            <div
              className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 shadow-2xl shadow-[#5e0202]"
              data-alt="Abstract vibrant pink and red heart pattern background"
              style={{
                backgroundImage: `
      linear-gradient(
        rgba(244, 37, 47, 0.4) 0%,
        rgba(34, 16, 17, 0.7) 100%
      ),
      url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5teMK4kk0Q_RJ7wO38L1FzCdXWDOJAxPolqMGVAMphUOHLUpoWavh4Dkyu_NkJMhO30TON3tOpJJwkcTw0T-fTd-auw9TWewz6R-uuAsn-eU153kcZ9ge1qMERQWZNxl3DeJ_PyCB_LuTrByeRInKjTxSQzzybTHoSY0lLdK5DB_hW8dktw5C0lr6L0swCxGdFOhEFz4DIwRJK6iR6tzROItAlGSgzohYotWLg4Ze6uz28oZxXhO7VfkS6EGK8DISgQCOhTdrnwcT")
    `,
              }}
            >
              <div className="flex flex-col gap-3 text-center">
                <h1 className="text-white text-5xl font-black leading-[1.1] tracking-tighter @[480px]:text-6xl">
                  Happy
                  <br />
                  Valentine's Day!
                </h1>
                <h2 className="text-white/90 text-base font-medium leading-normal bg-black/20 backdrop-blur-sm rounded-full py-1 px-4 self-center">
                  You're the sweetest thing in my life.
                </h2>
              </div>
              <div className="flex flex-col items-center gap-4 mt-8">
                <button className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary text-white text-lg font-bold shadow-lg shadow-primary/40 active:scale-95 transition-transform">
                  <span className="truncate">Scroll for Love</span>
                </button>
                <span className="material-symbols-outlined text-white text-3xl animate-bounce">
                  expand_more
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="px-4 mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary font-bold text-red-600">
              celebration
            </span>
            <div>
              <h2 className=" text-3xl  font-sans font-bold drop-shadow-[0_4px_10px_rgba(243,66,0,0.6)] text-[#a30142]">
                Why I Love You
              </h2>
              <h3 className="text-sm text-[#791b3d]">(Touch which one you like)</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4">
            <div
              className="bg-[#ed1262] p-5 rounded-xl   shadow-[5px_5px_15px_#0e0103]
 hover:-rotate-1 hover:animate-ping transition-transform"
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-3">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Kind Heart</h3>
              <p className="text-sm text-white">How you care for me</p>
            </div>
            <div
              className="bg-[#ed1262] p-5 rounded-xl  shadow-[5px_5px_15px_#0e0103]
 hover:rotate-2 hover:animate-ping transition-transform"
            >
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-3">
                <span className="material-symbols-outlined">local_pizza</span>
              </div>
              <h3 className="font-bold text-lg mb-1">My tasty food</h3>
              <p className="text-sm text-white">You make me weak.</p>
            </div>
            <div
              className="bg-[#ed1262] p-5 rounded-xl  shadow-[5px_5px_15px_#0e0103]
 hover:-rotate-2 hover:animate-ping transition-transform"
            >
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-3">
                <span className="material-symbols-outlined">pets</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Love</h3>
              <p className="text-sm text-white">Because you’re my weakness.</p>
            </div>

            <div
              className="bg-[#ed1262] p-5 rounded-xl  shadow-[5px_5px_15px_#0e0103]
 hover:rotate-3 hover:animate-ping transition-transform"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Your Magic</h3>
              <p className="text-sm text-white">
                Making the ordinary feel special.
              </p>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center pb-10">
          <button 
          onClick={() => navigate("/valentine")}
          className="bg-[#ed1262] h-12 w-auto p-2 px-4 text-md font-sans rounded-full shadow-[5px_5px_10px_#88072b] animate-bounce">
            Click for Surprise
          </button>
        </section>

        <footer className="py-12 border-t border-red-400 text-center">
          <p className="text-[#a30142] text-xl font-medium">
            Made with ❤️ just for you
          </p>
          <div className="flex justify-center gap-4 mt-4 text-red-600 animate-bounce">
            <span className="material-symbols-outlined text-red-600">
              favorite
            </span>
            <span className="material-symbols-outlined text-red-600">
              favorite
            </span>
            <span className="material-symbols-outlined text-red-600">
              favorite
            </span>
          </div>
        </footer>
      </main>

      <div className="h-8"></div>
    </div>
  );
}

export default Homepage;
