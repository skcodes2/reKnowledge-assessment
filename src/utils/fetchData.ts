import Papa from 'papaparse';
import type { EarthquakeData } from '../types/EarthquakeTypes';
/**
 * Fetches CSV data from a given URL and parses it into a JavaScript object.
 * @param {string} url - The URL to fetch the CSV data from.
 * @returns {Promise<any>} - A promise that resolves to the parsed CSV data.
 * @throws {Error} - Throws an error if the fetch operation fails or if the response is not ok.
 */
export default async function fetchData(url: string): Promise<EarthquakeData[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const csv = await response.text(); 

    const parsedData = Papa.parse<EarthquakeData>(csv, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
    });

    // Return the parsed data as EarthquakeData
    return parsedData.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; 
  }
}