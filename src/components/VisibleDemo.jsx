import { useEffect, useState } from "react";

export default function VisibleDemo() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    console.log(
      `[VisibleDemo] ✅ VisibleDemo loaded - Đã scroll vào viewport!`
    );
  }, []);

  return (
    <div className="p-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl shadow-lg text-white">
      <h3 className="text-lg font-bold mb-2">Visible Demo</h3>
      <p className="text-sm mb-2">Load khi scroll vào viewport</p>
      {visible && (
        <p className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded inline-block">
          ✅ Loaded!
        </p>
      )}
    </div>
  );
}
