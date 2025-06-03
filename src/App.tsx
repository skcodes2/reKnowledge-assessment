
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EarthquakeDashBoard from "./EarthquakeDashBoard";
import { EarthquakeDataProvider } from './hooks/useEarthquakeContext.tsx'

const queryClient = new QueryClient();
export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <EarthquakeDataProvider>
        <EarthquakeDashBoard />
      </EarthquakeDataProvider>
    </QueryClientProvider>
  );

}