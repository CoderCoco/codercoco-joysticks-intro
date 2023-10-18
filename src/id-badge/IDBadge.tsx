import React from 'react';
import './IDBadge.css';
import QRCodeSpiral from './QrCode';
import QrCode from './QrCode';

interface Props {
  imageUrl: string
  name: string
  linkTree: string
}

function IDBadge({ imageUrl, name, linkTree }: Props) {
  return (
    <div className="badge">
      <img className="badge-image" src={imageUrl} alt="Your Image" />
      <h3>{name}</h3>
      

      <div className="company-info">
        <QrCode url={linkTree}></QrCode>
        <img className="company-logo" src="/Purple_JU_Logo.png" alt="Company Logo" />
      </div>
    </div>
  );
};

export default IDBadge;