import React from 'react';

const seasonConfig = {
  summer: {
    message: 'Lets hit the beach',
    iconName: 'sun'
  },
  winter: {
    message: 'Burr, it is cold outside',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { message, iconName } = seasonConfig[season];

  return (
    <div>
      <i className={`${iconName} icon massive`} />
      <h1>{message}</h1>
      <i className={`${iconName} icon massive`} />
    </div>
  );
};

export default SeasonDisplay;