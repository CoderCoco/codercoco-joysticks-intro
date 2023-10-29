import React from 'react'
import { IDBadgeProps } from './IDBadgeProps';
import IDBadgeCoderCoco from './id-badge-coder-coco/IDBadgeCoderCoco';
import IDBadge from './id-badge/IDBadge';


export default function IDBadgeLogic({name, imageUrl, linkTree}: IDBadgeProps) {
  if (name == "CoderCoco") {
    return <IDBadgeCoderCoco name={name} imageUrl={imageUrl} linkTree={linkTree}/>
  } else {
    return <IDBadge name={name} imageUrl={imageUrl} linkTree={linkTree}/>
  }
}