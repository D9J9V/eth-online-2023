import React from "react";
import { Entry } from "./Entries";
import { EntryPlaceholderArr } from "~~/utils/placeholders";

const TableWithVisuals = () => {
  return (
    <div className="bg-base-100 h-[99%] overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Ammount</th>
            <th>Description</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {EntryPlaceholderArr.map((entry: Entry, i: number) => (
            <Entry {...entry} key={i} />
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Ammount</th>
            <th>Description</th>
            <th>Type</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TableWithVisuals;
