export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-600 text-white text-xs py-2 text-center shadow-md">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-2 space-y-1 sm:space-y-0">
        <span>Aloha State Softball League</span>
        <span className="hidden sm:inline">|</span>
        <span>🏳️‍🌈 Inclusive Since 2022</span>
        <span className="hidden sm:inline">|</span>
        <span>Mahalo for being you</span>
      </div>
    </footer>
  );
}