import { useEffect, useState } from 'react';

export default function IdleDemo() {
  const [loadTime, setLoadTime] = useState(null);

  useEffect(() => {
    setLoadTime(performance.now().toFixed(0));
    console.log(`[IdleDemo] ⏳ IdleDemo loaded at ${performance.now().toFixed(0)}ms - Loaded khi browser rảnh`);
  }, []);

  return (
    <div className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg text-white">
      <h3 className="text-lg font-bold mb-2">Idle Demo</h3>
      <p className="text-sm mb-2">Load khi browser rảnh (requestIdleCallback)</p>
      {loadTime && (
        <p className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded inline-block">
          Loaded at: {loadTime}ms
        </p>
      )}
    </div>
  );
}
