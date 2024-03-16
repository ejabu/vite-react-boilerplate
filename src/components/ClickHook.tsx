import { useState } from 'react';

const ClickHook = () => {
  const [count, setCount] = useState(0);

  if (count > 10) {
    const [message, setMessage] = useState('You clicked too many times');
  }

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default ClickHook;
