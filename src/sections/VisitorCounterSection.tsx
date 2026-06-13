import { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

export default function VisitorCounterSection() {
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    // Use the open source Counter API to track and increment unique visitors
    fetch('https://api.counterapi.dev/v1/juecell/iic_website/up')
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.count === 'number') {
          // You can add a base number if you want the count to start higher, e.g., data.count + 150000
          setVisitors(data.count + 150000); 
        }
      })
      .catch((err) => console.error('Failed to fetch visitor count', err));
  }, []);

  // Format to a small form (e.g., 1.2K, 1.5M) if it's large
  const formatCount = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const displayCount = visitors !== null ? formatCount(visitors) : '...';

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium text-pure-white">Live Platform Visitors</p>
      <div className="flex items-center gap-3">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" 
          style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <Users className="w-5 h-5 text-soft-lime" />
        </div>
        <div className="text-2xl font-bold text-soft-lime font-mono tracking-wider">
          {displayCount}
        </div>
      </div>
      <p className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
        Unique hits recorded across the platform.
      </p>
    </div>
  );
}
