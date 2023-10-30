import React, { useEffect, useRef, useState } from 'react';
import './IDBadgeCoderCoco.css';
import QrCode from '../QrCode';
import { IDBadgeProps } from '../IDBadgeProps';
import GlitchImage from './glitch-image/GlitchImage';

export default function IDBadgeCoderCoco({ imageUrl, name, linkTree }: IDBadgeProps) {
  const [glitchName, setGlitchName] = useState(name);

  useEffect(() => {
    const chars = '!@#$%^&*()_+=-[]\\{}|:";\'<>?,./`~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const glitchInterval = setInterval(() => {
      let glitched = '';
      let rate = 0.2;

      for (let i = 0; i < name.length; i++) {
        if (Math.random() < rate) {  // 20% chance to replace this character
          rate = 0.2
          glitched += chars.charAt(Math.floor(Math.random() * chars.length));
        } else {
          rate *= 2
          glitched += name[i];
        }
      }
      setGlitchName(glitched);
    }, 100); // Change this value to make the glitch more or less frequent

    return () => clearInterval(glitchInterval);
  }, [name]);

  const imageGlitches: JSX.Element[] = []
  const numGlitches = 25;

  for (let i = 0; i < numGlitches; i++) {
    imageGlitches.push(<GlitchImage url={imageUrl} numGlitches={10}/>)
  }
  
  return (
    <div className="badge">
      <div className='glitch-container'>
        {imageGlitches}
      </div>
        
      <h3 className="name">{glitchName}</h3>

      <div className="company-info">
        <QrCode url={linkTree}></QrCode>
        <img className="company-logo" src="/Purple_JU_Logo.png" alt="Company Logo" />
      </div>
    </div>
  );
};