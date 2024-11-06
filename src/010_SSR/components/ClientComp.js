'use client';

import React, { useState, useEffect } from 'react';

export default function ClientComp() {
  const [state, setState] = useState(undefined);
  useEffect(() => {
    setState('cliend loaded');
  }, []);
  return (
    <>
      <div>{state}</div>
    </>
  );
}
