
import { useEffect, useRef } from 'react';

interface ThreeDAssetModelProps {
  type: 'bitcoin' | 'ethereum' | 'stock';
  className?: string;
  size?: number;
  rotationSpeed?: number;
  color?: string;
}

/**
 * This component renders a pseudo-3D representation of crypto or stock assets using CSS
 * In a real application, this could be replaced with a proper Three.js implementation
 */
const ThreeDAssetModel = ({ 
  type, 
  className, 
  size = 100, 
  rotationSpeed = 1, 
  color = '#FFD700' 
}: ThreeDAssetModelProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let requestId: number;
    let rotation = 0;
    
    const animate = () => {
      rotation += 0.01 * rotationSpeed;
      if (container) {
        container.style.transform = `rotateY(${rotation}rad) rotateX(${Math.sin(rotation) * 0.2}rad)`;
      }
      requestId = requestAnimationFrame(animate);
    };
    
    requestId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [rotationSpeed]);

  // Render different 3D models based on type
  const renderModel = () => {
    switch (type) {
      case 'bitcoin':
        return (
          <div 
            className="w-full h-full flex items-center justify-center"
            style={{ perspective: '1000px' }}
          >
            <div 
              className="relative flex items-center justify-center animate-float"
              style={{ 
                width: size, 
                height: size,
                transformStyle: 'preserve-3d'
              }}
              ref={containerRef}
            >
              {/* Bitcoin symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="text-4xl font-bold"
                  style={{ color }}
                >
                  ₿
                </div>
              </div>
              {/* 3D effects - circles */}
              <div 
                className="absolute rounded-full border-4 opacity-20"
                style={{ 
                  width: size * 0.9, 
                  height: size * 0.9, 
                  borderColor: color,
                  transform: 'translateZ(-10px)'
                }}
              />
              <div 
                className="absolute rounded-full border-2 opacity-40"
                style={{ 
                  width: size * 1.1, 
                  height: size * 1.1, 
                  borderColor: color,
                  transform: 'translateZ(10px)'
                }}
              />
            </div>
          </div>
        );
        
      case 'ethereum':
        return (
          <div 
            className="w-full h-full flex items-center justify-center"
            style={{ perspective: '1000px' }}
          >
            <div 
              className="relative flex items-center justify-center animate-float"
              style={{ 
                width: size, 
                height: size,
                transformStyle: 'preserve-3d'
              }}
              ref={containerRef}
            >
              {/* Ethereum symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="text-4xl font-bold"
                  style={{ color: '#7EB2FC' }}
                >
                  Ξ
                </div>
              </div>
              {/* 3D effects - hexagon */}
              <div 
                className="absolute rounded-lg border-4 opacity-20"
                style={{ 
                  width: size * 0.9, 
                  height: size * 0.9, 
                  borderColor: '#7EB2FC',
                  transform: 'translateZ(-10px) rotate(45deg)'
                }}
              />
              <div 
                className="absolute rounded-lg border-2 opacity-40"
                style={{ 
                  width: size * 1.1, 
                  height: size * 1.1, 
                  borderColor: '#7EB2FC',
                  transform: 'translateZ(10px) rotate(45deg)'
                }}
              />
            </div>
          </div>
        );
        
      case 'stock':
      default:
        return (
          <div 
            className="w-full h-full flex items-center justify-center"
            style={{ perspective: '1000px' }}
          >
            <div 
              className="relative flex items-center justify-center animate-float"
              style={{ 
                width: size, 
                height: size,
                transformStyle: 'preserve-3d'
              }}
              ref={containerRef}
            >
              {/* Stock symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="text-4xl font-bold"
                  style={{ color: '#38E25D' }}
                >
                  $
                </div>
              </div>
              {/* 3D effects - squares */}
              <div 
                className="absolute rounded border-4 opacity-20"
                style={{ 
                  width: size * 0.85, 
                  height: size * 0.85, 
                  borderColor: '#38E25D',
                  transform: 'translateZ(-10px) rotate(15deg)'
                }}
              />
              <div 
                className="absolute rounded border-2 opacity-40"
                style={{ 
                  width: size * 1.15, 
                  height: size * 1.15, 
                  borderColor: '#38E25D',
                  transform: 'translateZ(10px) rotate(15deg)'
                }}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className={className || "w-20 h-20"}>
      {renderModel()}
    </div>
  );
};

export default ThreeDAssetModel;
