import React, { PropTypes } from 'react';

// game venue selector buttons
function VenueSelectorBar(props) {
  return (
    <div className='venue-select'>
      <button onClick={() => props.clickHandler('pioneersquare')}> Pioneer Square </button>
      <button onClick={() => props.clickHandler('oregonzoo')}> Oregon Zoo </button>
      <button onClick={() => props.clickHandler('councilcrest')}> Council Crest </button>
      <br/>
      <br/>
    </div>
  );
};

VenueSelectorBar.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default VenueSelectorBar;
