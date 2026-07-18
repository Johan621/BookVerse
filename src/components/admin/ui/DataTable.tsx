"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { toast } from "sonner";

interface Column<T> {
  header: string;
  accessorKey?: keyof T;
  cell?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  searchPlaceholder?: string;
}

export function DataTable<T>({ data, columns, searchPlaceholder = "Search..." }: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="space-y-4">
      {/* Table Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-colors placeholder:text-muted-foreground"
          />
        </div>
        
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button onClick={() => toast.info("Coming soon!")} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="glass rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-black/20 border-b border-white/10">
              <tr>
                {columns.map((col, i) => (
                  <th key={i} className="px-6 py-4 font-semibold text-muted-foreground">
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {data.map((item, rowIndex) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: rowIndex * 0.05 }}
                  key={rowIndex} 
                  className="hover:bg-white/5 transition-colors group"
                >
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className="px-6 py-4">
                      {col.cell 
                        ? col.cell(item) 
                        : col.accessorKey 
                          ? (item[col.accessorKey] as React.ReactNode)
                          : null}
                    </td>
                  ))}
                </motion.tr>
              ))}
              
              {data.length === 0 && (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-8 text-center text-muted-foreground">
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Pagination (Stubbed for now) */}
      <div className="flex justify-between items-center px-2 py-4 text-sm text-muted-foreground">
        <span>Showing {data.length} entries</span>
        <div className="flex gap-2">
          <button onClick={() => toast.info("Coming soon!")} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-50">Previous</button>
          <button onClick={() => toast.info("Coming soon!")} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-50">Next</button>
        </div>
      </div>
    </div>
  );
}
