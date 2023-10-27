import IDBadge from './IDBadge';
import React, {useState, useEffect} from 'react';
import "./BadgeList.css"

interface IDBadgeProps {
  name: string;
  imageUrl: string;
  linkTree: string;
}

  // return (
  //   <div className="badge-list">
  //     <IDBadge name='MilesG170' imageUrl='/milesg170.png' linkTree='https://www.google.com'></IDBadge>
  //     <IDBadge name='E To Interact' imageUrl='/missing-image.jpg' linkTree='https://www.google.com'></IDBadge>
  //     <IDBadge name='Xenostream38' imageUrl='/xenostream38.png' linkTree='https://www.google.com'></IDBadge>
  //     <IDBadge name='ToastGB' imageUrl='/missing-image.jpg' linkTree='https://www.google.com'></IDBadge>
  //   </div>
  // )

export default function BadgeList() {
  const [badges, setBadges] = useState<IDBadgeProps[]>([
    {
      name: 'MilesG170',
      imageUrl: '/milesg170.png',
      linkTree: 'https://www.google.com'
    },
    {
      name: 'E To Interact',
      imageUrl: '/missing-image.jpg',
      linkTree: 'https://www.google.com'
    },
    {
      name: 'Xenostream38',
      imageUrl: '/xenostream38.png',
      linkTree: 'https://www.google.com'
    },
    {
      name: 'ToastGB',
      imageUrl: '/missing-image.jpg',
      linkTree: 'https://www.google.com'
    },
  ]);
  const [insertIndex, setInsertIndex] = useState<number | null>(null);

  const addBadge = (index: number) => {
    const newBadge: IDBadgeProps = { name: 'New Person', imageUrl: '/missing-image.jpg', linkTree: 'https://www.google.com' };
    const newBadges = [...badges];
    newBadges.splice(index, 0, newBadge);
    setBadges(newBadges);
    setInsertIndex(index);
  };

  // Reset animation state after it completes
  useEffect(() => {
    if (insertIndex !== null) {
      const timer = setTimeout(() => setInsertIndex(null), 500);
      return () => clearTimeout(timer);
    }
  }, [insertIndex]);

  return (
    <div>
      <button onClick={() => addBadge(0)}>Add Badge at Start</button>
      <button onClick={() => addBadge(Math.floor(badges.length / 2))}>Add Badge in Middle</button>
      <button onClick={() => addBadge(badges.length)}>Add Badge at End</button>
      <div className="badge-list">
        {
          badges.map((badge, index) => (
            <div className={`badge-item ${index === insertIndex ? 'animate-insert' : ''}`}>
              <IDBadge name={badge.name} imageUrl={badge.imageUrl} linkTree={badge.linkTree} />
            </div>
          ))
        }
      </div>
    </div>
  )
}