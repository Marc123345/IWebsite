import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Brain, Shield, Activity, Zap, Globe } from 'lucide-react';
import { useAnimationContext } from '../AnimationController';

interface CommunityLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  members: number;
  active: boolean;
  groups: number;
  events: number;
  type: 'therapy solutions' | 'activity' | 'education';
}

interface CommunityConnection {
  source: string;
  target: string;
  strength: number;
}

interface CommunityConnectionMapProps {
  className?: string;
  initialZoom?: number;
  showControls?: boolean;
  highlightedRegion?: string;
  onRegionSelect?: (region: string) => void;
}

export default function CommunityConnectionMap({
  className = '',
  initialZoom = 1,
  showControls = true,
  highlightedRegion,
  onRegionSelect
}: CommunityConnectionMapProps) {
  const [zoom, setZoom] = useState(initialZoom);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [mapCenter, setMapCenter] = useState({ x: 50, y: 50 });
  const [isLoading, setIsLoading] = useState(true);
  const { animationLevel } = useAnimationContext();

  // Sample data - in a real app, this would come from an API
  const communityLocations: CommunityLocation[] = [
    { id: 'nyc', name: 'New York', lat: 40.7128, lng: -74.0060, members: 120, active: true, groups: 8, events: 12, type: 'therapy solutions' },
    { id: 'la', name: 'Los Angeles', lat: 34.0522, lng: -118.2437, members: 85, active: true, groups: 5, events: 7, type: 'activity' },
    { id: 'chi', name: 'Chicago', lat: 41.8781, lng: -87.6298, members: 65, active: true, groups: 4, events: 5, type: 'therapy solutions' },
    { id: 'hou', name: 'Houston', lat: 29.7604, lng: -95.3698, members: 40, active: false, groups: 2, events: 3, type: 'education' },
    { id: 'pho', name: 'Phoenix', lat: 33.4484, lng: -112.0740, members: 35, active: true, groups: 3, events: 2, type: 'therapy solutions' },
    { id: 'lon', name: 'London', lat: 51.5074, lng: -0.1278, members: 95, active: true, groups: 6, events: 8, type: 'activity' },
    { id: 'ber', name: 'Berlin', lat: 52.5200, lng: 13.4050, members: 70, active: true, groups: 4, events: 6, type: 'education' },
    { id: 'syd', name: 'Sydney', lat: -33.8688, lng: 151.2093, members: 55, active: true, groups: 3, events: 4, type: 'therapy solutions' },
    { id: 'tok', name: 'Tokyo', lat: 35.6762, lng: 139.6503, members: 80, active: true, groups: 5, events: 7, type: 'activity' },
    { id: 'tlv', name: 'Tel Aviv', lat: 32.0853, lng: 34.7818, members: 60, active: true, groups: 4, events: 5, type: 'therapy solutions' },
  ];

  const communityConnections: CommunityConnection[] = [
    { source: 'nyc', target: 'chi', strength: 0.8 },
    { source: 'nyc', target: 'lon', strength: 0.7 },
    { source: 'la', target: 'nyc', strength: 0.5 },
    { source: 'la', target: 'syd', strength: 0.3 },
    { source: 'chi', target: 'hou', strength: 0.6 },
    { source: 'lon', target: 'ber', strength: 0.9 },
    { source: 'lon', target: 'tlv', strength: 0.4 },
    { source: 'tok', target: 'syd', strength: 0.5 },
    { source: 'tlv', target: 'ber', strength: 0.6 },
    { source: 'pho', target: 'hou', strength: 0.7 },
  ];

  // Convert lat/lng to x/y coordinates for the map
  const getCoordinates = (lat: number, lng: number, zoom: number) => {
    // Simple conversion for demo purposes
    // In a real app, you'd use proper map projection
    const x = ((lng + 180) / 360) * 100;
    const y = ((90 - lat) / 180) * 100;
    
    // Apply zoom and center
    const zoomedX = (x - mapCenter.x) * zoom + 50;
    const zoomedY = (y - mapCenter.y) * zoom + 50;
    
    return { x: zoomedX, y: zoomedY };
  };

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle location selection
  const handleLocationClick = (locationId: string) => {
    setSelectedLocation(prev => prev === locationId ? null : locationId);
    
    if (onRegionSelect) {
      onRegionSelect(locationId);
    }
    
    // Find the location
    const location = communityLocations.find(loc => loc.id === locationId);
    if (location) {
      const coords = getCoordinates(location.lat, location.lng, zoom);
      setMapCenter({ x: coords.x, y: coords.y });
      setZoom(2); // Zoom in when selecting a location
    }
  };

  // Reset map view
  const handleResetView = () => {
    setZoom(initialZoom);
    setMapCenter({ x: 50, y: 50 });
    setSelectedLocation(null);
  };

  // Determine animation complexity based on animation level
  const useSimpleAnimations = animationLevel === 'none';
  const pulseAnimation = useSimpleAnimations 
    ? { scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }
    : { scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6], boxShadow: ['0 0 0 rgba(59, 95, 138, 0.4)', '0 0 20px rgba(59, 95, 138, 0.7)', '0 0 0 rgba(59, 95, 138, 0.4)'] };

  return (
    <div className={`relative overflow-hidden rounded-xl border border-ilight-100 bg-white shadow-calm ${className}`}>
      {/* Map Header */}
      <div className="p-4 border-b border-ilight-100 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-ilight-500" />
          <h3 className="font-medium text-black">Global Community Map</h3>
        </div>
        
        {showControls && (
          <div className="flex items-center gap-2 md:gap-3">
            <button 
              onClick={() => setZoom(prev => Math.min(prev + 0.5, 3))}
              className="p-1 md:p-2 rounded-lg hover:bg-ilight-50 text-ilight-500 transition-colors"
              aria-label="Zoom in"
            >
              <Zap className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setZoom(prev => Math.max(prev - 0.5, 0.5))}
              className="p-1 md:p-2 rounded-lg hover:bg-ilight-50 text-ilight-500 transition-colors"
              aria-label="Zoom out"
            >
              <Activity className="w-4 h-4" />
            </button>
            <button 
              onClick={handleResetView}
              className="p-1 md:p-2 rounded-lg hover:bg-ilight-50 text-ilight-500 transition-colors"
              aria-label="Reset view"
            >
              <Globe className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
      
      {/* Map Content */}
      <div className="relative h-[300px] md:h-[400px] bg-ilight-50/30 overflow-hidden">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-ilight-100 border-t-ilight-500 rounded-full animate-spin"></div>
              <p className="mt-4 text-black">Loading community map...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Map Background with Grid */}
            <div className="absolute inset-0 bg-dot-pattern bg-dot-md opacity-10"></div>
            
            {/* Connections between locations */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {communityConnections.map((connection) => {
                const source = communityLocations.find(loc => loc.id === connection.source);
                const target = communityLocations.find(loc => loc.id === connection.target);
                
                if (!source || !target) return null;
                
                const sourceCoords = getCoordinates(source.lat, source.lng, zoom);
                const targetCoords = getCoordinates(target.lat, target.lng, zoom);
                
                // Skip connections that are off-screen
                if (sourceCoords.x < 0 || sourceCoords.x > 100 || sourceCoords.y < 0 || sourceCoords.y > 100 ||
                    targetCoords.x < 0 || targetCoords.x > 100 || targetCoords.y < 0 || targetCoords.y > 100) {
                  return null;
                }
                
                // Only show connections for selected location or all if none selected
                if (selectedLocation && selectedLocation !== connection.source && selectedLocation !== connection.target) {
                  return null;
                }
                
                return (
                  <motion.line
                    key={`${connection.source}-${connection.target}`}
                    x1={`${sourceCoords.x}%`}
                    y1={`${sourceCoords.y}%`}
                    x2={`${targetCoords.x}%`}
                    y2={`${targetCoords.y}%`}
                    stroke={`rgba(59, 95, 138, ${connection.strength})`}
                    strokeWidth={connection.strength * 3}
                    strokeDasharray={useSimpleAnimations ? "none" : "5,5"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: connection.strength }}
                    transition={{ duration: 1 }}
                  />
                );
              })}
            </svg>
            
            {/* Location Markers */}
            {communityLocations.map((location) => {
              const coords = getCoordinates(location.lat, location.lng, zoom);
              
              // Skip locations that are off-screen
              if (coords.x < 0 || coords.x > 100 || coords.y < 0 || coords.y > 100) {
                return null;
              }
              
              // Determine if this location should be highlighted
              const isHighlighted = selectedLocation === location.id || 
                                   highlightedRegion === location.id ||
                                   (!selectedLocation && !highlightedRegion);
              
              // Size based on member count and highlight status
              const size = Math.max(20, Math.min(50, location.members / 5)) * (isHighlighted ? 1 : 0.7);
              
              // Color based on type
              const getColor = () => {
                switch(location.type) {
                  case 'therapy solutions': return 'from-blue-400 to-blue-600';
                  case 'activity': return 'from-green-400 to-green-600';
                  case 'education': return 'from-purple-400 to-purple-600';
                  default: return 'from-ilight-400 to-ilight-600';
                }
              };
              
              // Icon based on type
              const getIcon = () => {
                switch(location.type) {
                  case 'therapy solutions': return <Heart className="w-5 h-5" />;
                  case 'activity': return <Activity className="w-5 h-5" />;
                  case 'education': return <Globe className="w-5 h-5" />;
                  default: return <Users className="w-5 h-5" />;
                }
              };
              
              return (
                <motion.div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ 
                    left: `${coords.x}%`, 
                    top: `${coords.y}%`,
                    zIndex: isHighlighted ? 10 : 5,
                    opacity: isHighlighted ? 1 : 0.7
                  }}
                  onClick={() => handleLocationClick(location.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Location Marker */}
                  <div className="relative">
                    {/* Pulsing Background for Active Locations */}
                    {location.active && (
                      <motion.div
                        className={`absolute rounded-full bg-gradient-to-br ${getColor()} opacity-30`}
                        style={{ 
                          width: size * 1.5, 
                          height: size * 1.5,
                          top: -size * 0.25,
                          left: -size * 0.25
                        }}
                        animate={pulseAnimation}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: Math.random() * 2 // Randomize the animation start
                        }}
                      />
                    )}
                    
                    {/* Main Marker */}
                    <motion.div
                      className={`rounded-full bg-gradient-to-br ${getColor()} text-white flex items-center justify-center shadow-lg`}
                      style={{ width: size, height: size }}
                      animate={{ scale: isHighlighted ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {getIcon()}
                    </motion.div>
                    
                    {/* Location Name */}
                    {(isHighlighted || size > 30) && (
                      <motion.div
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white px-2 py-1 rounded-lg shadow-md text-xs font-medium text-black whitespace-nowrap"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {location.name}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
            
            {/* Selected Location Details */}
            {selectedLocation && (
              <motion.div
                className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-ilight-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {(() => {
                  const location = communityLocations.find(loc => loc.id === selectedLocation);
                  if (!location) return null;
                  
                  return (
                    <>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium text-black text-lg">{location.name} Community</h4>
                          <p className="text-sm text-ilight-500">
                            {location.active ? 'Active Community' : 'Developing Community'}
                          </p>
                        </div>
                        <button 
                          onClick={() => setSelectedLocation(null)}
                          className="text-ilight-400 hover:text-ilight-600"
                          aria-label="Close location details"
                        >
                          ×
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-black">{location.members}</div>
                          <div className="text-xs text-ilight-500">Members</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-black">{location.groups}</div>
                          <div className="text-xs text-ilight-500">Groups</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-black">{location.events}</div>
                          <div className="text-xs text-ilight-500">Events</div>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex justify-end">
                        <button 
                          className="text-sm text-ilight-500 hover:text-ilight-600 flex items-center gap-1"
                          onClick={() => {
                            // In a real app, this would navigate to the community page
                            console.log(`Navigate to ${location.name} community`);
                          }}
                        >
                          <span>View Community</span>
                          <Globe className="w-4 h-4" />
                        </button>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </>
        )}
      </div>
      
      {/* Map Legend */}
      <div className="p-4 border-t border-ilight-100 bg-white">
        <div className="flex flex-wrap gap-4 justify-center text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
            <span className="text-black">Therapy Solutions Groups</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-green-600"></div>
            <span className="text-black">Activity Groups</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-purple-600"></div>
            <span className="text-black">Education Groups</span>
          </div>
          <div className="flex items-center gap-1">
            <motion.div 
              className="w-3 h-3 rounded-full bg-ilight-400 opacity-50"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <span className="text-black">Active Community</span>
          </div>
        </div>
      </div>
    </div>
  );
}