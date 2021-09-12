import React, { useEffect, useRef } from "react";

import { mount } from "marketing/MarketingApp";

export default function MarketingApp() {
  const mountRef = useRef(null);
  useEffect(() => {
    mount(mountRef.current);
  }, []);
  return <div ref={mountRef} />;
}
