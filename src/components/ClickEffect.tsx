import { useEffect, useState } from 'react';

const ClickHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count', count);
  }, []);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default ClickHook;
