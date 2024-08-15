// Custom Debounce hook

import { useState, useEffect } from "react";

const useDebounce = (text, delay) => {
  const [debouncedText, setDebouncedText] = useState(text);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);
  return debouncedText;
};

export default function App() {
  const [text, setText] = useState("");
  const debounceText = useDebounce(text, 1000);

  return (
    <main>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      you have write: {debounceText}
    </main>
  );
}
