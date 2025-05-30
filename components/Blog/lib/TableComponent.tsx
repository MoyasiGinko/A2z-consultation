"use client";

import React from "react";
import { DataTable } from "@/types/blog";

interface TableComponentProps {
  table: DataTable;
  className?: string;
}

const TableComponent: React.FC<TableComponentProps> = ({
  table,
  className = "",
}) => {
  // Enhanced validation
  if (!table) {
    console.warn("TableComponent: No table data provided");
    return null;
  }

  if (
    !table.headers ||
    !Array.isArray(table.headers) ||
    table.headers.length === 0
  ) {
    console.warn("TableComponent: Invalid or empty headers", table.headers);
    return (
      <div className={`my-8 ${className}`}>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          <p className="font-medium">Table Error</p>
          <p className="text-sm">
            Invalid table headers. Please check the table configuration.
          </p>
        </div>
      </div>
    );
  }

  if (!table.rows || !Array.isArray(table.rows) || table.rows.length === 0) {
    console.warn("TableComponent: Invalid or empty rows", table.rows);
    return (
      <div className={`my-8 ${className}`}>
        {table.title && (
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              {table.title}
            </h3>
            {table.description && (
              <p className="text-sm leading-relaxed text-gray-600">
                {table.description}
              </p>
            )}
          </div>
        )}
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-yellow-700">
          <p className="font-medium">No Data</p>
          <p className="text-sm">This table has no data rows to display.</p>
        </div>
      </div>
    );
  }

  const getTableStyleClasses = (style: string) => {
    const baseClasses =
      "w-full border-collapse overflow-hidden rounded-lg shadow-lg";

    switch (style) {
      case "striped":
        return `${baseClasses} table-striped`;
      case "bordered":
        return `${baseClasses} table-bordered`;
      case "compact":
        return `${baseClasses} table-compact`;
      default:
        return `${baseClasses} table-default`;
    }
  };

  const getHeaderClasses = (style: string) => {
    const baseClasses =
      "bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-left p-4 text-sm uppercase tracking-wider";

    switch (style) {
      case "compact":
        return baseClasses.replace("p-4", "p-2");
      default:
        return baseClasses;
    }
  };

  const getCellClasses = (style: string, isEven: boolean = false) => {
    let baseClasses = "p-4 text-gray-800 border-b border-gray-200";

    switch (style) {
      case "striped":
        baseClasses += isEven ? " bg-gray-50" : " bg-white";
        break;
      case "bordered":
        baseClasses += " border border-gray-300 bg-white";
        break;
      case "compact":
        baseClasses = baseClasses.replace("p-4", "p-2") + " bg-white";
        break;
      default:
        baseClasses +=
          " bg-white hover:bg-gray-50 transition-colors duration-200";
        break;
    }

    return baseClasses;
  };

  return (
    <div className={`my-8 ${className}`}>
      {/* Table Title and Description */}
      {table.title && (
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            {table.title}
          </h3>
          {table.description && (
            <p className="text-sm leading-relaxed text-gray-600">
              {table.description}
            </p>
          )}
        </div>
      )}

      {/* Table Container with Responsive Scroll */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className={getTableStyleClasses(table.tableStyle)}>
          {/* Table Header */}
          <thead>
            <tr>
              {table.headers.map((header, index) => (
                <th key={index} className={getHeaderClasses(table.tableStyle)}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>{" "}
          {/* Table Body */}
          <tbody>
            {table.rows.map((row, rowIndex) => {
              // Validate row structure
              if (!row || !row.cells || !Array.isArray(row.cells)) {
                console.warn(
                  `TableComponent: Invalid row at index ${rowIndex}`,
                  row,
                );
                return (
                  <tr key={rowIndex} className="bg-red-50">
                    <td
                      colSpan={table.headers.length}
                      className="p-4 text-center text-red-600"
                    >
                      Invalid row data at position {rowIndex + 1}
                    </td>
                  </tr>
                );
              }

              return (
                <tr
                  key={rowIndex}
                  className="transition-shadow duration-200 hover:shadow-sm"
                >
                  {table.headers.map((header, cellIndex) => {
                    const cellValue = row.cells[cellIndex];
                    return (
                      <td
                        key={cellIndex}
                        className={getCellClasses(
                          table.tableStyle,
                          rowIndex % 2 === 0,
                        )}
                      >
                        {cellValue !== undefined &&
                        cellValue !== null &&
                        cellValue !== ""
                          ? cellValue
                          : "-"}
                      </td>
                    );
                  })}
                  {/* Add empty cells if row has fewer cells than headers */}
                  {row.cells.length < table.headers.length &&
                    Array.from({
                      length: table.headers.length - row.cells.length,
                    }).map((_, index) => (
                      <td
                        key={`empty-${index}`}
                        className={getCellClasses(
                          table.tableStyle,
                          rowIndex % 2 === 0,
                        )}
                      >
                        -
                      </td>
                    ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Table Info */}
      <div className="mt-2 flex justify-between text-xs text-gray-500">
        <span>{table.rows.length} rows</span>
        <span>{table.headers.length} columns</span>
      </div>
    </div>
  );
};

export default TableComponent;
