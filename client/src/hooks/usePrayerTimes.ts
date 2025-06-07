import { useState, useEffect } from "react";

interface PrayerTime {
  name: string;
  time: string;
  timestamp: Date;
}

interface UsePrayerTimesReturn {
  prayerTimes: PrayerTime[];
  isLoading: boolean;
  error: string | null;
  currentPrayer: PrayerTime | null;
  nextPrayer: PrayerTime | null;
}

export function usePrayerTimes(): UsePrayerTimesReturn {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        setIsLoading(true);
        
        // Get user's location
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;
        
        // Use the Prayer Times API
        const response = await fetch(
          `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=4`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch prayer times");
        }

        const data = await response.json();
        const timings = data.data.timings;

        // Convert to our format
        const prayers: PrayerTime[] = [
          { name: "fajr", time: timings.Fajr, timestamp: new Date() },
          { name: "sunrise", time: timings.Sunrise, timestamp: new Date() },
          { name: "dhuhr", time: timings.Dhuhr, timestamp: new Date() },
          { name: "asr", time: timings.Asr, timestamp: new Date() },
          { name: "maghrib", time: timings.Maghrib, timestamp: new Date() },
          { name: "isha", time: timings.Isha, timestamp: new Date() },
        ];

        // Set proper timestamps
        prayers.forEach(prayer => {
          const [hours, minutes] = prayer.time.split(":").map(Number);
          prayer.timestamp = new Date();
          prayer.timestamp.setHours(hours, minutes, 0, 0);
        });

        setPrayerTimes(prayers);
        setError(null);
      } catch (err) {
        console.error("Error fetching prayer times:", err);
        
        // Fallback to static times for Riyadh
        const fallbackTimes: PrayerTime[] = [
          { name: "fajr", time: "05:30", timestamp: new Date() },
          { name: "sunrise", time: "06:45", timestamp: new Date() },
          { name: "dhuhr", time: "12:15", timestamp: new Date() },
          { name: "asr", time: "15:30", timestamp: new Date() },
          { name: "maghrib", time: "18:20", timestamp: new Date() },
          { name: "isha", time: "19:50", timestamp: new Date() },
        ];

        fallbackTimes.forEach(prayer => {
          const [hours, minutes] = prayer.time.split(":").map(Number);
          prayer.timestamp = new Date();
          prayer.timestamp.setHours(hours, minutes, 0, 0);
        });

        setPrayerTimes(fallbackTimes);
        setError("Using offline prayer times for Riyadh");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  // Determine current and next prayer
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  let currentPrayer: PrayerTime | null = null;
  let nextPrayer: PrayerTime | null = null;

  for (let i = 0; i < prayerTimes.length; i++) {
    const prayer = prayerTimes[i];
    const [hours, minutes] = prayer.time.split(":").map(Number);
    const prayerTime = hours * 60 + minutes;

    if (currentTime < prayerTime) {
      nextPrayer = prayer;
      if (i > 0) {
        currentPrayer = prayerTimes[i - 1];
      }
      break;
    }
  }

  // If no next prayer found, next prayer is Fajr of next day
  if (!nextPrayer && prayerTimes.length > 0) {
    nextPrayer = prayerTimes[0];
    currentPrayer = prayerTimes[prayerTimes.length - 1];
  }

  return {
    prayerTimes,
    isLoading,
    error,
    currentPrayer,
    nextPrayer,
  };
}
