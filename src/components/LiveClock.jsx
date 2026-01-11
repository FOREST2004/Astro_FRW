import { useEffect, useState } from "react";

export default function LiveClock() {
  const now = typeof window !== 'undefined' ? performance.now().toFixed(0) : 'BUILD';

  console.log(
    `[${now}ms] 🕐 LiveClock render tại:`,
    typeof window !== "undefined" ? "🌐 BROWSER" : "🖥️  SERVER"
  );

  const [time, setTime] = useState(new Date());

  console.log(`[${now}ms] 🕐 Time:`, time.toLocaleTimeString());

  useEffect(() => {
    const loadTime = performance.now().toFixed(0);
    console.log(`[${loadTime}ms] ⚡ LiveClock mounted - Start timer`);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("vi-VN");
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
      <h3 className="font-bold mb-4 text-gray-800">
        Live Clock (Dynamic Island)
      </h3>
      <div className="text-center relative">
        <span className="absolute top-4 right-4 bg-purple-600 text-white px-2 py-1 rounded text-xs">
          Client-only
        </span>
        <h3 className="text-xl font-bold mb-4 text-white">Current time:</h3>
        <div className="text-5xl font-bold text-white mb-2">
          {formatTime(time)}
        </div>
        <p className="text-white opacity-90">{formatDate(time)}</p>
      </div>
    </div>
  );
}
