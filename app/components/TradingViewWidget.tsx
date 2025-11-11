'use client';

import { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);
  const scriptAdded = useRef(false);

  useEffect(() => {
    if (!container.current || scriptAdded.current) return;
    
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "NEO:FOBI",
      colorTheme: "dark",
      isTransparent: false,
      locale: "en",
      width: 350
    });
    
    container.current.appendChild(script);
    scriptAdded.current = true;

    return () => {
      scriptAdded.current = false;
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
