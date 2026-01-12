import { useEffect, useState } from "react";

export default function LiveClock() {
  console.log(
    `[client:only] LiveClock render tại:`,
    typeof window !== "undefined" ? "🌐 BROWSER" : "🖥️  SERVER"
  );

  const [time, setTime] = useState(new Date());

  // console.log(`[LiveClock] 🕐 Time:`, time.toLocaleTimeString());

  useEffect(() => {
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

  return (
    <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
      <h3 className="font-bold mb-4 text-gray-800">
        Live Clock (Dynamic Island)
      </h3>
      <div className="text-center relative">
        <h3 className="text-xl font-bold mb-4 text-white">
          Current time: {formatTime(time)}
        </h3>
      </div>
    </div>
  );
}
