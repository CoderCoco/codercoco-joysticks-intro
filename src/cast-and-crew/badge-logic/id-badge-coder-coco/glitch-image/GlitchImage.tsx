import React, { useEffect, useRef } from "react";
import "./GlitchImage.css"
import { getRandomNumber } from "../../../../util";

interface Props {
  url: string,
  numGlitches: number
}

export default function GlitchImage({url, numGlitches}: Props) {
  const imageRef = useRef<HTMLImageElement | null>(null)
  const intervalDuration = getRandomNumber(100, 500)

  const glitchEffect = () => {
    if (imageRef.current == null) return;

    const randomTranslate = getRandomNumber(-10, 10);
    const randomRotate = getRandomNumber(-180, 180);
    const randomSkew = getRandomNumber(-15, 15);
    const randomColor = getRandomNumber(0, 70);
    const opacity = 1 / numGlitches;

    imageRef.current.style.transform = `
      translateX(${randomTranslate}px)
      rotate(${randomRotate}deg)
      skew(${randomSkew}deg)
    `;
    imageRef.current.style.filter = `hue-rotate(${randomColor}deg)`;
    imageRef.current.style.opacity = `${opacity}`;
  };


  useEffect(() => {
    glitchEffect()
    const glitchInterval = setInterval(() => {
      glitchEffect()
    }, intervalDuration); // Adjust time for more or less frequent updates

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <img ref={imageRef} className="glitch-image" src={url} alt="Your Image" />
  )
}