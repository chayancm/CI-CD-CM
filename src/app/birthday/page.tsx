import Image from "next/image";

export default function Birthday() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <h1 className="text-5xl font-extrabold mb-6">
        🎉 It&apos;s someone&apos;s birthday, guess who! 🎂
      </h1>
      <p className="text-lg mb-4">
        <Image
          src="/birthday-cake.png"
          alt="Birthday Cake"
          width={192}
          height={192}
          className="rounded-full shadow-lg mb-6"
        />
      </p>
      <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
        Make a Wish
      </button>
    </div>
  );
}
