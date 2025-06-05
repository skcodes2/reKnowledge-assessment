import { createContext } from "react";
import { use } from "react";
import type { EarthquakeContextType } from "../types/EarthquakeTypes";
import fetchData from "../utils/fetchData";
import { useQuery } from "@tanstack/react-query";
import EmptyScatterPlot from "../components/ChartPanel/EmptyScatterPlot";

let earthquakeContext = createContext<EarthquakeContextType | undefined>(undefined)

export const EarthquakeDataProvider = ({ children }: { children: React.ReactNode }) => {
    const {data, isLoading, error} = useQuery({
        queryKey: ['earthquakeData'],
        queryFn: () => fetchData('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv'),
    })

    if (isLoading) {
        return <EmptyScatterPlot isLoading={isLoading} />;
    }
    if (error) {
        return <EmptyScatterPlot isLoading={isLoading} />;
    }
    const updatedData = data?.map((point) => ({ ...point, fill: "#FF8C00" }))
    return (
        <earthquakeContext.Provider value={updatedData}>
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
