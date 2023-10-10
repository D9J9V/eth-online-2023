import React from "react";
import { ArrowSmallDownIcon, ArrowSmallUpIcon } from "@heroicons/react/24/outline";

const Expense = ({ ammount, user, minDescription, fullDescription }: Entry) => {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-9 h-9">
              <ArrowSmallDownIcon className="text-red-600" />
            </div>
          </div>
          <div>
            <div className="font-bold text-red-400">-${ammount.toFixed(2)} USD</div>
            <div className="text-sm opacity-50">{user}</div>
          </div>
        </div>
      </td>
      <td>
        {minDescription}
        <br />
        <span className="badge badge-ghost badge-sm">{fullDescription}</span>
      </td>
      <td className="font-bold text-red-400">Expenses</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

const Income = ({ ammount, user, minDescription, fullDescription }: Entry) => {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-9 h-9">
              <ArrowSmallUpIcon className="text-green-600" />
            </div>
          </div>
          <div>
            <div className="font-bold text-green-400">${ammount.toFixed(2)} USD</div>
            <div className="text-sm opacity-50">{user}</div>
          </div>
        </div>
      </td>
      <td>
        {minDescription}
        <br />
        <span className="badge badge-ghost badge-sm">{fullDescription}</span>
      </td>
      <td className="font-bold text-green-400">Sale</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

const Entry = (entry: Entry) => {
  return entry.type === "Sale" ? <Income {...entry} /> : <Expense {...entry} />;
};

export { Entry };
