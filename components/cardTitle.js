import React from 'react';
import { titleRule, titleHeight } from './rules/card';

export default class CardTitle extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <h3 {...titleRule}>
        <span>
          {children}
        </span>
      </h3>
    );
  }
}
