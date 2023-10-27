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
  const [animate, setAnimate] = useState(false);

  const addBadge = () => {
    const newBadge: IDBadgeProps = { name: 'New Person', imageUrl: '/missing-image.jpg', linkTree: 'https://www.google.com' };
    const middleIndex = Math.floor(badges.length / 2);
    const newBadges = [...badges];
    newBadges.splice(middleIndex, 0, newBadge);

    setAnimate(true);
    setBadges(newBadges);
  };

  // Reset animation state after it completes
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <div>
      <button onClick={addBadge}>Add Badge</button>
      <div className="badge-list">
        {
          badges.map((badge, index) => (
            <div key={badge.name} className={`badge-item ${animate && index >= badges.length / 2 ? 'badge-animate' : ''}`}
              style={{ transform: animate && index >= badges.length / 2 ? 'translateX(320px)' : 'translateX(0)' }}>
              <IDBadge name={badge.name} imageUrl={badge.imageUrl} linkTree={badge.linkTree} />
            </div>
          ))
        }
      </div>
    </div>
  )
}