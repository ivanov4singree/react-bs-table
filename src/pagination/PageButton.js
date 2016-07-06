import React, { Component, PropTypes } from 'react';
import classSet from 'classnames';

class PageButton extends Component {

  constructor(props) {
    super(props);
  }

  pageBtnClick = e => {
    e.preventDefault();
    this.props.changePage(e.currentTarget.textContent);
  }

  render() {
    const classes = classSet({
      'active': this.props.active,
      'disabled': this.props.disable,
      'hidden': this.props.hidden
    });
    const pageTrigs = {
      is: false,
      prev: false,
      next: false
    };
    if (this.props.children === '<') {
      pageTrigs.is = true;
      pageTrigs.prev = true;
    } else if (this.props.children === '>') {
      pageTrigs.is = true;
      pageTrigs.next = true;
    }
    return (
      <li className={ classes }>
        <a href='#' onClick={ this.pageBtnClick }>{ this.props.children }</a>
      </li>
    );
  }
}
PageButton.propTypes = {
  changePage: PropTypes.func,
  active: PropTypes.bool,
  disable: PropTypes.bool,
  hidden: PropTypes.bool,
  children: PropTypes.node
};

export default PageButton;
