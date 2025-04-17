
import { useState } from 'react';

interface CryptoIconProps {
  symbol: string;
  size?: number;
  className?: string;
}

const CryptoIcon = ({ symbol, size = 32, className = "" }: CryptoIconProps) => {
  const [imageError, setImageError] = useState(false);
  const normalizedSymbol = symbol.toLowerCase();
  
  // Map of common crypto symbols to their logos
  const cryptoLogos: Record<string, string> = {
    'btc': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    'eth': 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    'sol': 'https://cryptologos.cc/logos/solana-sol-logo.png',
    'ada': 'https://cryptologos.cc/logos/cardano-ada-logo.png',
    'dot': 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png',
    'xrp': 'https://cryptologos.cc/logos/xrp-xrp-logo.png',
    'doge': 'https://cryptologos.cc/logos/dogecoin-doge-logo.png',
    'ltc': 'https://cryptologos.cc/logos/litecoin-ltc-logo.png',
    'link': 'https://cryptologos.cc/logos/chainlink-link-logo.png',
    'uni': 'https://cryptologos.cc/logos/uniswap-uni-logo.png',
  };
  
  // Fallback icon function
  const renderFallbackIcon = () => {
    const bgColor = stringToColor(symbol);
    
    return (
      <div 
        className={`flex items-center justify-center rounded-full ${className}`}
        style={{ 
          backgroundColor: bgColor,
          width: size,
          height: size
        }}
      >
        <span className="text-white font-bold" style={{ fontSize: size / 2 }}>
          {symbol.slice(0, 2).toUpperCase()}
        </span>
      </div>
    );
  };
  
  // Convert string to color
  const stringToColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const c = (hash & 0x00FFFFFF)
      .toString(16)
      .toUpperCase()
      .padStart(6, '0');
    
    return `#${c}`;
  };
  
  // If image error occurred or no URL is found, render fallback
  if (imageError || !cryptoLogos[normalizedSymbol]) {
    return renderFallbackIcon();
  }
  
  // Render the image
  return (
    <img
      src={cryptoLogos[normalizedSymbol]}
      alt={`${symbol} logo`}
      width={size}
      height={size}
      className={`object-contain ${className}`}
      onError={() => setImageError(true)}
    />
  );
};

export default CryptoIcon;
