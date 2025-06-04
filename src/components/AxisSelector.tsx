import { axisOptions, getKeyFromLabel } from "../utils/NameConversion";

type AxisSelectorProps = {
  label: string;
  setFunction: (value: string) => void;
  value: string;
};

export default function AxisSelector({ label, setFunction, value }: AxisSelectorProps) {
  return (
    <div className="text-white w-40">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        value={value}
        className="w-full p-2 rounded-md bg-gray-900 border border-gold text-white hover:cursor-pointer focus:outline-none"
        onChange={(e) => {
          setFunction(getKeyFromLabel(e.target.value) || "");
        }}
      >
        {axisOptions.map((option, index) => (
          <option
            key={index}
            value={option}
            className="bg-black text-white hover:bg-gold hover:text-black"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
