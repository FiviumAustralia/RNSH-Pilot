import React, { cloneElement, createClass } from 'react';
import { Motion, spring, presets } from 'react-motion';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';

import { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

var Dropdown = createClass({
  getInitialState: function(){
    return {
      active: false
    };
  },
  getDefaultProps: function(){
    return {
      className: ''
    }
  },
  componentDidMount: function () {
    window.addEventListener( 'click', this._onWindowClick );
  },
  componentWillUnmount: function () {
    window.removeEventListener( 'click', this._onWindowClick );
  },
  render: function () {
    const { children, className } = this.props;
    // create component classes
    const active = this.isActive();
    var dropdown_classes = cx({
      dropdown: true,
      'dropdown--active': active
    });
    dropdown_classes += ' ' + className;
    // stick callback on trigger element
    const bound_children = React.Children.map( children, child => {
      if( child.type === DropdownTrigger ){
        child = cloneElement( child, {
          ref: 'trigger',
          onClick: this._onToggleClick
        });
      }
      return child;
    });
    const style = this.isActive() ? {
      height: spring(this.props.height, {stiffness: 300, damping: 26})
    } : {
      height: spring(0, {stiffness: 300, damping: 26})
    };
    return (
      <Motion style={style}>
        {({height}) =>
          <div className={dropdown_classes} style={{height: height}}>{bound_children}</div>
        }
      </Motion>
    );
  },
  isActive: function(){
    return ( typeof this.props.active === 'boolean' ) ?
      this.props.active :
      this.state.active;
  },
  hide: function(){
    this.setState({
      active: false
    });
    if( this.props.onHide ){
      this.props.onHide();
    }
  },
  show: function(){
    this.setState({
      active: true
    });
    if( this.props.onShow ){
      this.props.onShow();
    }
  },
  _onWindowClick: function( event ){
    const dropdown_element = findDOMNode( this );
    if( event.target !== dropdown_element && !dropdown_element.contains( event.target ) && this.isActive() ){
      this.hide();
    }

    if (dropdown_element.contains( event.target ) && event.target.tagName === 'A' && !event.target.href.endsWith('#dropdown-trigger')) {
      this.hide();
    }
  },
  _onToggleClick: function( event ){
    event.preventDefault();
    if( this.isActive() ){
      this.hide();
    } else {
      this.show();
    }
  }
});

export { DropdownTrigger, DropdownContent };
export default Dropdown;
