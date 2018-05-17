import React, { Component } from 'react';
import { distanceInWordsToNow } from 'date-fns';
import { api } from '../../utils';
import { Link } from 'react-router-dom';
import './styles.css';

export class NewsItem extends Component {
  constructor(props) {
    super(props);
    
    this.state = { item: undefined };
  }
  
  componentDidMount() {
    api.getItem(this.props.id)
      .then(item => { this.setState({ item })})
      .catch(err => { console.error(err)});
  }
  render(){
    const { item } = this.state;
    if (!item) {
      return <div>Loading…</div>
    }
    const timeInMs = item.time * 1000;
    return (
      <div>
        <a href={item.url}>{item.title}</a>
        <br />
        <span className="smaller"> {item.score} points</span>
        <Link className="smaller" to={`/item/${item.id}`}> by {item.by} | </Link>
        <time className="smaller" datetime={new Date(timeInMs)}>{distanceInWordsToNow(new Date(timeInMs))} ago | </time>
        <span className="smaller"> {item.descendants} comments</span>
      </div>
    )

  }
}