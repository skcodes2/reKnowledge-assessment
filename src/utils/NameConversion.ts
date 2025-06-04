 const numericFieldLabels: Record<string, string> = {
  latitude: "Latitude",
  longitude: "Longitude",
  depth: "Depth (km)",
  mag: "Magnitude",
  nst: "Number of Seismic Stations (nst)",
  gap: "Azimuthal Gap (degrees)",
  dmin: "Minimum Distance to Station (dmin)",
  rms: "Root Mean Square Error (rms)",
  horizontalError: "Horizontal Error (km)",
  depthError: "Depth Error (km)",
  magError: "Magnitude Error",
  magNst: "Number of Stations for Magnitude (magNst)"
};
export const getFullName = (key: string): string => {
  return numericFieldLabels[key];
};

export function getKeyFromLabel(label: string): string | undefined {
  return Object.keys(numericFieldLabels).find(key => numericFieldLabels[key] === label);
}
export const axisOptions = Object.entries(numericFieldLabels).map(([_, value]) => (
  value  
));