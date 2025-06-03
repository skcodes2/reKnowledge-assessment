import { createContext } from "react";
import { use } from "react";
import type { EarthquakeContextType } from "../types/EarthquakeTypes";
import fetchData from "../utils/fetchData";
import { useQuery } from "@tanstack/react-query";

let earthquakeContext = createContext<EarthquakeContextType | null>(null)

export const EarthquakeDataProvider = ({ children }: { children: React.ReactNode }) => {
    const {data, isLoading, error} = useQuery({
        queryKey: ['earthquakeData'],
        queryFn: () => fetchData('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv'),
    })
    return (
        <earthquakeContext.Provider value={{ data, isLoading, error }}>
            {children}
        </earthquakeContext.Provider>
    )
}

export const useEarthquakeContext = () => {
    const context = use(earthquakeContext);
    if (!context) {
        throw new Error("useEarthquakeContext must be used within an EarthquakeDataProvider");
    }
    return context;
}
