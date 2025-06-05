import DataTable from "./DataTable";
import TableController from "./TableController";

export default function TablePanel() {
  return (
    <>
      <h2 className="text-3xl font-header text-white bg-black pb-3">Earthquake Data Table</h2>
      <TableController />
      <DataTable /> 
    </>
    
  );
}