import React, { useState } from 'react';

function Temp() {
  // State to hold the current tag name
  const [tag, setTag] = useState('h1');

  // Function to return the correct tag based on the state
  const renderTag = () => {
    if (tag === 'h1') {
      return <h1>Hello</h1>;
    } else if (tag === 'b') {
      return <b>Hello</b>;
    } else if (tag === 'i') {
      return <i>Hello</i>;
    }
    return null;
  };

  return (
    <div>
      {/* Buttons to change the tag */}
      <button onClick={() => setTag('h1')}>H1</button>
      <button onClick={() => setTag('b')}>B</button>
      <button onClick={() => setTag('i')}>I</button>

      {/* Render the tag based on the state */}
      {renderTag()}
    </div>
  );
}

export default Temp;

