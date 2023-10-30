import IDBadge from '../badge-logic/id-badge/IDBadge';
import React, {useState, useEffect, useRef} from 'react';
import "./BadgeList.css"
import IDBadgeLogic from '../badge-logic/IDBadgeLogic';
import { useHotkeys } from 'react-hotkeys-hook';

interface IDBadgeProps {
  id: number;
  name: string;
  imageUrl: string;
  linkTree: string;
}

export default function BadgeList() {
  const [badges, setBadges] = useState<IDBadgeProps[]>([
    {
      id: 0,
      name: 'E To Interact',
      imageUrl: '/E_headshot_1.png',
      linkTree: 'https://linktr.ee/EToInteract'
    },
    {
      id: 1,
      name: 'MilesG170',
      imageUrl: '/milesg170.png',
      linkTree: 'https://linktr.ee/MilesG170'
    },
    {
      id: 2,
      name: 'Xenostream38',
      imageUrl: '/xenostream38.png',
      linkTree: 'https://linktr.ee/xenostream38'
    },
    {
      id: 3,
      name: 'ToastGB',
      imageUrl: '/toast.jpg',
      linkTree: 'https://linktr.ee/toastgb'
    }
  ]);
  const [insertIndex, setInsertIndex] = useState(new Set<number>());

  const addBadge = (newPerson: IDBadgeProps) => {
    const newBadges = [...badges, newPerson];
    // Sort badges by name in alphabetical order
    newBadges.sort((a, b) => a.name.localeCompare(b.name));

    setBadges(newBadges);

    insertIndex.add(newPerson.id)
    setInsertIndex(new Set(insertIndex))
  };

  useHotkeys('ctrl+alt+c', () => {
    addBadge({id: badges.length, name: "CoderCoco", linkTree: 'https://linktr.ee/codercoco', imageUrl: './CoinLogo_Resized.png'})
  });

  // Reset animation state after it completes
  useEffect(() => {
    if (insertIndex.size > 0) {
      const timer = setTimeout(() => setInsertIndex(new Set()), 500);
      return () => clearTimeout(timer);
    }
  }, [insertIndex]);

  return (
    <div>
      {/* <button onClick={() => addCoderCoco()}>Add CoderCoco</button> */}
      <div className="badge-list">
        {
          badges.map((badge) => (
            <div className={`badge-item ${insertIndex.has(badge.id) ? 'animate-insert' : ''}`}>
              <IDBadgeLogic name={badge.name} imageUrl={badge.imageUrl} linkTree={badge.linkTree} />
            </div>
          ))
        }
      </div>
    </div>
  )
}