import React from 'react';
import IDBadge from './id-badge/IDBadge';
import './BadgeList.css';

export default function BadgeList() {
  return (
    <div className="badge-list">
      <IDBadge name='MilesG170' imageUrl='/milesg170.png' linkTree='https://www.google.com'></IDBadge>
      <IDBadge name='E To Interact' imageUrl='/missing-image.jpg' linkTree='https://www.google.com'></IDBadge>
      <IDBadge name='Xenostream38' imageUrl='/xenostream38.png' linkTree='https://www.google.com'></IDBadge>
      <IDBadge name='ToastGB' imageUrl='/missing-image.jpg' linkTree='https://www.google.com'></IDBadge>
    </div>
  )
}