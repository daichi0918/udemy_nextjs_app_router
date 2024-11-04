'use client';
import React, { useState, useEffect } from 'react';

export default function SSR() {
  const [state, setState] = useState(undefined);
  useEffect(() => {
    setState('cliend loaded');
  }, []);
  return (
    <>
      <div>SSR Page</div>
      <div>{state}</div>
    </>
  );
}
