import { useEarthquakeContext } from "./hooks/useEarthquakeContext"
export default function EarthquakeDashBoard() {
  const { data, isLoading, error } = useEarthquakeContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error Occurred</div>;
  }

  return (
    <>
      {data && data.length > 0 ? (
        data.map((earthquake, index) => (
          <div key={index} className="earthquake-item">
            
            <p><strong>Location:</strong> {earthquake.place}</p>
            <p><strong>Magnitude:</strong> {earthquake.mag} ({earthquake.magType})</p>
            <p><strong>Coordinates:</strong> {earthquake.latitude}, {earthquake.longitude}</p>
            <p><strong>Depth:</strong> {earthquake.depth} km</p>
          </div>
        ))
      ) : (
        <div>No Earthquake Data Available</div>
      )}


    </>
  )
}

