import { useEffect, useState } from "react";

interface NumberAnimationProps {
  targetNumber: number | null;
}

function NumberAnimation({ targetNumber }: NumberAnimationProps) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (targetNumber !== null) {
      let start = 0;
      const end = targetNumber;
      const duration = 6000;
      const incrementTime = 30;
      const incrementAmount = Math.ceil(
        (end - start) / (duration / incrementTime),
      );

      const interval = setInterval(() => {
        start += incrementAmount;
        if (start >= end) {
          setCurrentNumber(end);
          clearInterval(interval);
        } else {
          setCurrentNumber(start);
        }
      }, incrementTime);

      return () => clearInterval(interval);
    }
  }, [targetNumber]);

  return (
    <div className="font-regular text-2xl mt-8 transition-all duration-500 ease-in-out">
      <h1>{currentNumber}</h1>
    </div>
  );
}

export default NumberAnimation;
