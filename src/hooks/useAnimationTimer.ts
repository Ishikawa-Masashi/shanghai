// import React from "react";
import { useState, useEffect } from "react";

export function useAnimationTimer(duration: number) {
  const [progress, setProgress] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const reset = () => setStartTime(Date.now());

  useEffect(() => {
    let queuedFrame: number;
    const frame = () => {
      const now = Date.now() - startTime;
      if (now < duration) {queuedFrame = requestAnimationFrame(frame);}
      setProgress(Math.min(1, now / duration));
    };
    frame();
    return () => cancelAnimationFrame(queuedFrame);
  }, [startTime, duration]);

  return [progress, reset];
}
