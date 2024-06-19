import React, { useEffect, useRef } from 'react';

function focusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <h1>Auto Focus Input on Page Load</h1>
      <input ref={inputRef} placeholder="Type something..." />
    </div>
  );
}

export default focusInput;
