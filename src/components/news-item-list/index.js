import React from 'react';
import { NewsItem } from '../';

export const NewsItemList = ({ ids }) => (
  <ol>
    {ids.map(id => (
      <li className="newsitem" key={id}>
        <NewsItem id={id} />
      </li>
    )) }
  </ol>
);