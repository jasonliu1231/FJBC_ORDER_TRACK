"use client";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen text-black font-mono font-bold">
        <main className="w-full h-full bg-[#2c4457] flex flex-col justify-center items-center gap-2">
          <button className="bg-white p-2 rounded-2xl">
            <a href="/track"> Track</a>
          </button>
          <button className="bg-white p-2 rounded-2xl">
            <a href="/dashboard"> dashboard</a>
          </button>
        </main>
      </div>
    </>
  );
}
