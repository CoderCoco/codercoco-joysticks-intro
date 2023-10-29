import IDBadge from '../id-badge/IDBadge';
import React, {useState, useEffect, useRef} from 'react';
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
      name: 'E To Interact',
      imageUrl: '/missing-image.jpg',
      linkTree: 'https://linktr.ee/EToInteract'
    },
    {
      name: 'MilesG170',
      imageUrl: '/milesg170.png',
      linkTree: 'https://linktr.ee/MilesG170'
    },
    {
      name: 'Xenostream38',
      imageUrl: '/xenostream38.png',
      linkTree: 'https://linktr.ee/xenostream38'
    },
    {
      name: 'ToastGB',
      imageUrl: '/missing-image.jpg',
      linkTree: 'https://linktr.ee/toastgb'
    }
  ]);
  const [insertName, setInsertName] = useState(new Set<string>());

  const addBadge = (newPerson: IDBadgeProps) => {
    const newBadges = [...badges, newPerson];
    // Sort badges by name in alphabetical order
    newBadges.sort((a, b) => a.name.localeCompare(b.name));

    setBadges(newBadges);
    setInsertName(new Set([newPerson.name]))
  };

  const addCoderCoco = () => {
    addBadge({name: "CoderCoco", linkTree: 'https://linktr.ee/codercoco', imageUrl: './CoinLogo_Resized.png'})
  }

  // Reset animation state after it completes
  useEffect(() => {
    if (insertName.size > 0) {
      const timer = setTimeout(() => setInsertName(new Set()), 500);
      return () => clearTimeout(timer);
    }
  }, [insertName]);

  return (
    <div>
      <button onClick={() => addCoderCoco()}>Add CoderCoco</button>
      <div className="badge-list">
        {
          badges.map((badge) => (
            <div className={`badge-item ${insertName.has(badge.name) ? 'animate-insert' : ''}`}>
              <IDBadge name={badge.name} imageUrl={badge.imageUrl} linkTree={badge.linkTree} />
            </div>
          ))
        }
      </div>
    </div>
  )
}