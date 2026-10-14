import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomerSelect({ items, placeholder }) {
  const [selected, setSelected] = useState("");

  return (
    <div className="relative">
      <select
        value={selected}
        onChange={(event) => setSelected(event.target.value)}
        className="cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-2 text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {" "}
        <option value="">{placeholder}</option>
        ```
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
