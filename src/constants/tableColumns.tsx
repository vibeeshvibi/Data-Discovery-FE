import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../components/ui/badge";
import { TableRowEditDrawer } from "../components/features/Table/TableRowEditDrawer";

export interface TableColumn {
  id: string
  columnName: string
  description: string
  dataType: string
  nullable: 'Yes' | 'No'
  measure: 'Yes' | 'No'
  formula: string
  createdBy: string
  modifiedBy: string
}

export const sampleTableColumns: TableColumn[] = [
  {
    id: "1",
    columnName: "customer_id",
    description: "Unique identifier for customers",
    dataType: "Integer",
    nullable: "No",
    measure: "No",
    formula: "",
    createdBy: "Admin",
    modifiedBy: "Admin"
  },
  {
    id: "2",
    columnName: "customer_name",
    description: "Full name of the customer",
    dataType: "Varchar",
    nullable: "No",
    measure: "No",
    formula: "",
    createdBy: "Manager",
    modifiedBy: "Manager"
  },
  {
    id: "3",
    columnName: "email",
    description: "Customer email address",
    dataType: "Varchar",
    nullable: "Yes",
    measure: "No",
    formula: "",
    createdBy: "User",
    modifiedBy: "User"
  },
  {
    id: "4",
    columnName: "total_orders",
    description: "Total number of orders placed",
    dataType: "Integer",
    nullable: "No",
    measure: "Yes",
    formula: "COUNT(orders)",
    createdBy: "Admin",
    modifiedBy: "Manager"
  },
  {
    id: "5",
    columnName: "total_revenue",
    description: "Total revenue from customer",
    dataType: "String",
    nullable: "No",
    measure: "Yes",
    formula: "SUM(order_amount)",
    createdBy: "Manager",
    modifiedBy: "Admin"
  },
  {
    id: "6",
    columnName: "registration_date",
    description: "Date when customer registered",
    dataType: "String",
    nullable: "No",
    measure: "No",
    formula: "",
    createdBy: "User",
    modifiedBy: "User"
  },
  {
    id: "7",
    columnName: "last_login",
    description: "Last login timestamp",
    dataType: "String",
    nullable: "Yes",
    measure: "No",
    formula: "",
    createdBy: "Admin",
    modifiedBy: "User"
  },
  {
    id: "8",
    columnName: "loyalty_points",
    description: "Accumulated loyalty points",
    dataType: "Integer",
    nullable: "No",
    measure: "Yes",
    formula: "SUM(points_earned - points_redeemed)",
    createdBy: "Manager",
    modifiedBy: "Manager"
  }
];

export const getTableColumns = (
  onEdit: (column: TableColumn) => void
): ColumnDef<TableColumn>[] => [
  {
    accessorKey: 'columnName',
    header: 'Column Name',
    size: 150,
    maxSize: 150,
    minSize: 150,
    cell: ({ getValue }) => (
      <div className="truncate w-full" title={getValue() as string}>
        {getValue() as string}
      </div>
    ),
  },
  {
    accessorKey: 'description',
    header: 'Description',
    size: 200,
    maxSize: 200,
    minSize: 200,
    cell: ({ getValue }) => (
      <div className="truncate w-full" title={getValue() as string}>
        {getValue() as string}
      </div>
    ),
  },
  {
    accessorKey: 'dataType',
    header: 'Data Type',
    size: 120,
    maxSize: 120,
    minSize: 120,
    cell: ({ getValue }) => (
      <div className="flex items-center justify-center w-full">
        <p className="text-gray-600 bg-gray-100 px-2 py-1 rounded-2xl whitespace-nowrap truncate" title={getValue() as string}>
          {getValue() as string}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'nullable',
    header: 'Nullable',
    size: 100,
    maxSize: 100,
    minSize: 100,
    cell: ({ getValue }) => (
      <div className="flex items-center justify-center w-full">
        <Badge className={getValue() === 'Yes' ? 'bg-green-200 text-gray-600 border-green-300' : 'bg-gray-100 text-gray-600 border-gray-200'}>
          {getValue() as string}
        </Badge>
      </div>
    ),
  },
  {
    accessorKey: 'measure',
    header: 'Measure',
    size: 100,
    maxSize: 100,
    minSize: 100,
    cell: ({ getValue }) => (
      <div className="flex items-center justify-center w-full">
        <Badge className={getValue() === 'Yes' ? 'bg-green-200 text-gray-600 border-green-300' : 'bg-gray-100 text-gray-600 border-gray-200'}>
          {getValue() as string}
        </Badge>
      </div>
    ),
  },
  {
    accessorKey: 'formula',
    header: 'Formula',
    size: 150,
    maxSize: 150,
    minSize: 150,
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return (
        <div className="truncate w-full" title={value || '-'}>
          {value || '-'}
        </div>
      );
    },
  },
  {
    accessorKey: 'createdBy',
    header: 'Created By',
    size: 120,
    maxSize: 120,
    minSize: 120,
    cell: ({ getValue }) => (
      <div className="truncate w-full" title={getValue() as string}>
        {getValue() as string}
      </div>
    ),
  },
  {
    accessorKey: 'modifiedBy',
    header: 'Modified By',
    size: 120,
    maxSize: 120,
    minSize: 120,
    cell: ({ getValue }) => (
      <div className="truncate w-full" title={getValue() as string}>
        {getValue() as string}
      </div>
    ),
  },
  {
    id: 'actions',
    header: 'Edit',
    size: 80,
    maxSize: 80,
    minSize: 80,
    cell: ({ row }) => (
      <div className="flex justify-center w-full">
        <TableRowEditDrawer tableColumn={row.original} />
      </div>
    ),
  },
];
