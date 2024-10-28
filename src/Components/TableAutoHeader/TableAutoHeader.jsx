import React, { useState } from "react";

function TableAutoHeader({ data_list, header_Name }) {
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
  console.log(header_Name);
  return (
    <>
      <div className="flex justify-end my-2 text-base-content">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered input-sm w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredData && filteredData.length > 0 ? (
        <div className="overflow-x-auto text-base-content">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                {headers.map((header) => (
                  <th key={header}>{header.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, rowIndex) => (
                <tr key={rowIndex}>
                  {headers.map((header) => (
                    <td key={header}>{item[header]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>No Columns to display</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>No rows to display</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default TableAutoHeader;
