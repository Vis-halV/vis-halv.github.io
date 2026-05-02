import { useEffect, useState } from "react";

export function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return { dark, setDark };
}