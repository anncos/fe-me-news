import React from 'react';
import './styles.css';

export const Menu = ({ links }) => (
  <ul className="unstyle menu">
    {links.map(item => (
      <li key={item.url} className="unstyle menu__item">
        <a href={item.url}>{item.text}</a>
      </li>
    ))}
  </ul>
);