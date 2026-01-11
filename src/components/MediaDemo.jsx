import { useEffect, useState } from 'react';

export default function MediaDemo() {
  const [count, setCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    console.log(`[MediaDemo] 🚀 JS BUNDLE ĐÃ TẢI VỀ! - Screen: ${window.innerWidth}px`);
  }, []);

  return (
    <div className="p-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg text-white">
      <h3 className="text-lg font-bold mb-2">Media Demo</h3>
      <p className="text-sm mb-2">Thiết bị: {isMobile ? ' Mobile' : ' Desktop'}</p>
      <div className="mb-4">
       
        <div className="bg-white/20 p-3 rounded-lg text-center">
          <span className="block text-3xl font-bold mb-1">{count}</span>
          <span className="text-xs uppercase tracking-wider opacity-80">  Lần bấm</span>
        </div>
      </div>

      <button 
        onClick={() => setCount(c => c + 1)}
        className="w-full bg-white text-orange-600 font-bold py-2 px-4 rounded-lg hover:bg-orange-50 active:scale-95 transition-transform"
      >
        👆 Bấm thử đi!
      </button>

    </div>
  );
}
