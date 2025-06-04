export type EarthquakeData = {
  time: string;
  latitude: number;
  longitude: number;
  depth: number;
  mag: number;
  magType: string;
  nst?: number;
  gap?: number;
  dmin?: number;
  rms?: number;
  net: string;
  id: string;
  updated: string;
  place: string;
  type: string;
  horizontalError?: number;
  depthError?: number;
  magError?: number;
  magNst?: number;
  status: string;
  locationSource: string;
  magSource: string;
}

export type EarthquakeContextType = {
  data: EarthquakeData[] | undefined;
  isLoading: boolean;
}



