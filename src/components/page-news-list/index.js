import React, { Component } from "react";

import { connect } from "react-redux";

import { NewsItemList } from "../";

import { api } from "../../utils";

import * as ducks from "../../ducks";

const isArraysEqual = (arr1 = [], arr2 = []) =>
  arr1.toString() === arr2.toString();

export class PageNewsList extends Component {
  componentDidMount() {
    this.props.fetchItemsIds();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const shouldUpdate = !isArraysEqual(this.props.ids, nextProps.ids);
    return shouldUpdate;
  }

  render() {
    const { ids } = this.props;
    if (!ids) {
      return <div>Loading…</div>;
    }
    return (
      <div>
        <button onClick={this.props.fetchItemsIds}>Refresh</button>
        <NewsItemList ids={ids} />
      </div>
    );
  }
}

const firstN = (n, arr) => arr.slice(0, n);

const mapStateToProps = state => {
  return {
    //ids: firstN(state.ui.itemsToShow, state.data.itemsIds.ids)
    ids: firstN(
      ducks.ui.selectors.itemsToShow(state),
      ducks.data.itemsIds.selectors.ids(state)
    )
  };
};

const mapDispatchToProps = {
  fetchItemsIds: ducks.data.itemsIds.actions.fetchItemsIds
};

export default connect(mapStateToProps, mapDispatchToProps)(PageNewsList);
