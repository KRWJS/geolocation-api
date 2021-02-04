import React from 'react';

const LoadingSpinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {props.body}
      </div>
    </div>
  );
};

LoadingSpinner.defaultProps = {
  body: 'Loading...'
};

export default LoadingSpinner;