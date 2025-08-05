import { usePrideMode } from "../hooks/use-pride-mode";

export default function PrideToggle() {
  const { isPrideMode, togglePrideMode } = usePrideMode();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-700">Pride Mode</span>
      <label className="relative inline-block w-12 h-6 cursor-pointer">
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0"
          checked={isPrideMode}
          onChange={togglePrideMode}
        />
        <div className={`absolute top-0 left-0 right-0 bottom-0 rounded-full transition-all duration-400 ${
          isPrideMode 
            ? 'pride-gradient' 
            : 'bg-gray-300'
        }`}>
          <div className={`absolute h-4 w-4 left-1 bottom-1 bg-white rounded-full transition-all duration-400 transform ${
            isPrideMode ? 'translate-x-6' : 'translate-x-0'
          }`} />
        </div>
      </label>
    </div>
  );
}
