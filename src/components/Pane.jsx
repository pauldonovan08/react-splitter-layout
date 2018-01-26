import React from 'react';
import PropTypes from 'prop-types';

function Pane(props) {
  const size = props.size || 0;
  const unit = props.percentage ? '%' : 'px';
  let classes = 'layout-pane';
  const style = {};
  if (!props.primary) {
    if (props.vertical) {
      style.height = `${size}${unit}`;
    } else {
      style.width = `${size}${unit}`;
    }
  } else {
    classes += ' layout-pane-primary';
  }
  let eventHandlers = {};
  if(props.eventHandlers){
    eventHandlers = props.eventHandlers;
  }
  return (
    <div id={props.id} className={classes} style={style} {...eventHandlers}>{props.children}</div>
  );
}

Pane.propTypes = {
  id: PropTypes.string,
  vertical: PropTypes.bool,
  primary: PropTypes.bool,
  size: PropTypes.number,
  percentage: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  eventHandlers:PropTypes.object
};

Pane.defaultProps = {
  id:null,
  vertical: false,
  primary: false,
  size: 0,
  percentage: false,
  children: [],
  eventHandlers:null
};

export default Pane;
