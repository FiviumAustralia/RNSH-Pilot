import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './GlobalSearch.scss';

export default class GlobalSearch extends Component {
  render () {
    return (
      <span>
        <FontAwesome
          name={this.props.icon}
          className={styles['gs-icon']}
          />
        <input
          placeholder={this.props.placeholder}
          className={styles['gs-input']}
          />
      </span>
    );
  };
};

GlobalSearch.propTypes = {
  icon: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  styles: React.PropTypes.object
};
