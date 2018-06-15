import React, { Component } from "react";
import { distanceInWordsToNow } from "date-fns";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as ducks from "../../ducks";
import "./styles.css";

export class NewsItem extends Component {
  componentDidMount() {
    this.props.fetchItem(this.props.id);
  }
  render() {
    const { item } = this.props;
    if (!item) {
      return <div>Loading…</div>;
    }
    const timeInMs = item.time * 1000;
    return (
      <div>
        <a href={item.url}>{item.title}</a>
        <br />
        <span className="smaller"> {item.score} points</span>
        <Link className="smaller" to={`/item/${item.id}`}>
          {" "}
          by {item.by} |{" "}
        </Link>
        <time className="smaller" datetime={new Date(timeInMs)}>
          {distanceInWordsToNow(new Date(timeInMs))} ago |{" "}
        </time>
        <span className="smaller"> {item.descendants} comments</span>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    item: ducks.data.items.selectors.item(state, ownProps.id)
  };
};

const mapDispatchToProps = {
  fetchItem: ducks.data.items.actions.fetchItem
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsItem);
