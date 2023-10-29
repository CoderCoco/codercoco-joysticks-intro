import React, { useEffect, useRef } from 'react';
import './IDBadgeCoderCoco.css';
import QrCode from '../QrCode';
import { IDBadgeProps } from '../IDBadgeProps';

export default function IDBadgeCoderCoco({ imageUrl, name, linkTree }: IDBadgeProps) {
  const element = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (element.current == null) {
        return
      }

      const random1 = Math.floor(Math.random() * 10) - 5;
      const random2 = Math.floor(Math.random() * 10) - 5;
      element.current.style.setProperty('--trans-x', `${random1}px`);
      element.current.style.setProperty('--trans-y', `${random2}px`);
    }, 100); // Adjust time for more or less frequent updates

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="badge">
      <img className="badge-image" src={imageUrl} alt="Your Image" />
      
      <div ref={element} className="glitch" data-text={name}>
        <h3 className="name">{name}</h3>
      </div>

      <div className="company-info">
        <QrCode url={linkTree}></QrCode>
        <img className="company-logo" src="/Purple_JU_Logo.png" alt="Company Logo" />
      </div>
    </div>
  );
};