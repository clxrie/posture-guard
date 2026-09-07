import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../lib/firebase';

export function useRealtimeDistance() {
  const [distance, setDistance] = useState<number>(0);

  useEffect(() => {
    const latestRef = ref(db, 'latest');
    const unsubscribe = onValue(latestRef, (snapshot) => {
      const data = snapshot.val();
      if (data && data.distance) {
        setDistance(data.distance);
      }
    });

    return () => unsubscribe();
  }, []);

  return distance;
}