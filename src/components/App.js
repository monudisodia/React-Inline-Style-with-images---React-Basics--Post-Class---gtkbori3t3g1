import React from 'react';
import ReactDOM from 'react-dom';
import myImage from '..//NewtonSchool.jpg';

function App() {
  return (
    <div id="navbar">
      <img src={myImage} alt="My Image" style={{ width: '130px', height: '100px', margin: '10px' }} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
