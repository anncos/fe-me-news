import React from 'react';
import { distanceInWordsToNow } from 'date-fns';
import { api } from '../../utils';
import { Link } from 'react-router-dom';
import './styles.css';

export const NewsItem = ({ id }) => {
  const item = api.getItem(id);
  const timeInMs = item.time * 1000;
  return (
    <div>
      <a href={item.url}>{item.title}</a>
      <br />
      <span className="smaller"> {item.score} points</span>
      <Link className="smaller" to={`/item/${id}`}> by {item.by} | </Link>
      
      <time className="smaller" datetime={new Date(timeInMs)}>{distanceInWordsToNow(new Date(timeInMs))} ago | </time>
      <span className="smaller"> {item.descendants} comments</span>
    </div>
  )
}