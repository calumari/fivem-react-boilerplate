import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WindowListener extends React.Component {
  componentWillMount() {
    window.addEventListener('message', this.handleEvent);
    window.addEventListener('DOMContentLoaded', this.handleDomEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleEvent);
    window.removeEventListener('DOMContentLoaded', this.handleDomEvent);
  }

  handleEvent = event => {
    const { dispatch } = this.props;
    const { type, data } = event.data;
    if (type !== undefined) {
      dispatch({ type, payload: { ...data } });
    }
  };

  handleDomEvent = event => {
    const { dispatch } = this.props;
    const { type, data } = window.nuiHandoverData;
    if (type !== undefined) {
      dispatch({ type, payload: { ...data } });
    }
  };

  render() {
    return React.Children.only(this.props.children);
  }
}

WindowListener.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default connect(
  null,
  null,
)(WindowListener);
