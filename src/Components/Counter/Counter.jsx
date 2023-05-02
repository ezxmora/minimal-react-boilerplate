import React from 'react';
import useHook from 'Hooks/useHook';
import './style.scss';

function Counter() {
  const { counter, add, substract } = useHook();

  return (
    <div className="counter-container">
      <span>{counter}</span>
      <div className="counter-buttons">
        <button type="button" onClick={add}>Add</button>
        <button type="button" onClick={substract}>Substract</button>
      </div>

    </div>
  );
}

export default Counter;
