import { useEffect } from "react";

function MouseTracker() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      console.log(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // cleanup: remove the listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // empty dependency array → attach once on mount

  return null;
}

export default MouseTracker;
