import React, { useState } from "react";

function Table_Auto_Header({ data_list }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Get headers dynamically from the keys of the first object in data_list
  const headers =
    data_list.length > 0
      ? Object.keys(data_list[0]).filter((header) => header !== "id")
      : [];
  // Filter data based on search term
  const filteredData = data_list.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <div className="flex justify-end p-1">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto h-[600px] shadow-sm border-2 border-base-200">
        <table className="table table-zebra text-nowrap">
          {/* head */}
          <thead className="sticky top-0 bg-base-300">
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id} className="font-semibold">
                  {headers.map((header) => (
                    <td
                      key={header}
                      className="border-r-2 border-y-2 border-base-300 text-center"
                    >
                      <p>{item[header]}</p>
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={headers.length}
                  className="text-center font-semibold"
                >
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table_Auto_Header;
