import React from 'react';
import './IDBadge.css';
import QrCode from '../QrCode';
import { IDBadgeProps } from '../IDBadgeProps';


function IDBadge({ imageUrl, name, linkTree }: IDBadgeProps) {
  return (
    <div className="badge">
      <div className="badge-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <h3>{name}</h3>
      

      <div className="company-info">
        <QrCode url={linkTree}></QrCode>
        <img className="company-logo" src="/Purple_JU_Logo.png" alt="Company Logo" />
      </div>
    </div>
  );
};

export default IDBadge;