import React from 'react';

const ChackOut = () => {
    return (
      <div>
        <div className="tooltip" data-tip="hello" >
            <p>ami</p>

        </div>
        <div className="tooltip" data-tip="hello">
          <button className="btn">Hover me</button>
        </div>
      </div>
    );
};

export default ChackOut;