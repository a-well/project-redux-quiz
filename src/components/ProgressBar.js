import React from 'react'

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  const containerStyles = {
    height: 20,
    backgroundColor: '#4d4d4d',
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    transition: 'width 1s ease-in-out',
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`} </span>
      </div>
    </div>
  );
};

export default ProgressBar;