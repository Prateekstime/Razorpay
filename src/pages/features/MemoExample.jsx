import React, { useCallback, useMemo, useState } from 'react'

export default function MemoExample() {
    const [num, setNum] = useState(5);
    const [count, setCount] = useState(0);

  // useMemo: store computed VALUE
  const squared = useMemo(() => {
    console.log("Calculating square...");
    return num * num;
  }, [num]);

  // useCallback: store FUNCTION
  const increment = useCallback(() => {
    setCount(count + 1);
    console.log("calback")
  }, [count]);
  return (
    <div>
        <p>Square: {squared}</p>
      <p>Count: {count}</p>
      <div className='grid grid-cols-2'>

      <button onClick={increment}>Increase Count</button>
      <button onClick={() => setNum(num + 1)}>Increase Num</button>
      </div>
    </div>
  )
}
