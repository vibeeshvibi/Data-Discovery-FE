import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function LineageFilter() {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedDataStore, setSelectedDataStore] = useState<string>('');
  const [selectedTableName, setSelectedTableName] = useState<string>('');

  return (
    <div className="flex-1 ml-20 flex gap-4">
      <div className="flex flex-col gap-1 flex-1">
        <label className="text-xs font-medium text-gray-800">Type</label>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-full h-8 text-xs">
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent> 
            <SelectItem value="RG" className="text-xs" >RG</SelectItem>
            <SelectItem value="PBI" className="text-xs">PBI</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <label className="text-xs font-medium text-gray-800">Data Store</label>
        <Select value={selectedDataStore} onValueChange={setSelectedDataStore}>
          <SelectTrigger className="w-full h-8 text-xs">
            <SelectValue placeholder="All Data Stores" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="SQL Database" className="text-xs">SQL Database</SelectItem>
            <SelectItem value="Power BI Dataset" className="text-xs">Power BI Dataset</SelectItem>
            <SelectItem value="Azure SQL" className="text-xs">Azure SQL</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <label className="text-xs font-medium text-gray-800">Tablename</label>
        <Select value={selectedTableName} onValueChange={setSelectedTableName}>
          <SelectTrigger className="w-full h-8 text-xs">
            <SelectValue placeholder="All Tables" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Sales_Transactions" className="text-xs">Sales_Transactions</SelectItem>
            <SelectItem value="Analytics_Summary" className="text-xs">Analytics_Summary</SelectItem>
            <SelectItem value="Employee_Records" className="text-xs">Employee_Records</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
