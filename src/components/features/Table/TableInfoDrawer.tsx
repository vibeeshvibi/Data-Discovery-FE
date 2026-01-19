import React from "react";
import { IconInfoCircle } from "@tabler/icons-react";
import { Button } from "../../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../ui/drawer";

interface InfoItem {
  label: string;
  value: string | number;
}

interface TableInfoDrawerProps {
  data?: InfoItem[];
  title?: string;
  description?: string;
}

export function TableInfoDrawer({
  data,
  title = "Table Information",
  description = "View detailed information about this table."
}: TableInfoDrawerProps) {

  const tableInfo = data || [
    { label: "Table Name", value: "Sales_Transactions" },
    { label: "Schema", value: "dbo" },
    { label: "Row Count", value: 125000 },
    { label: "Column Count", value: 15 },
    { label: "Created By", value: "Admin" },
    { label: "Created On", value: "2024-01-15" },
    { label: "Modified By", value: "Manager" },
    { label: "Modified On", value: "2024-12-24" }
  ];

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button
          variant="secondary"
          className="flex items-center gap-2"
          style={{ backgroundColor: '#e3effb', color: 'var(--brand-secondary)' }}
        >
          <IconInfoCircle stroke={3} size={18} color='var(--brand-secondary)' />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="!w-[40%] !max-w-none h-screen pl-4 pt-2 overflow-y-auto overflow-x-hidden">
        <DrawerHeader>
          <div className="flex items-center gap-3">
            <div className="bg-[#edf5fd] p-2 rounded-lg">
              <IconInfoCircle color="var(--brand-primary)" stroke={2} size={20} />
            </div>
            <div className="space-y-1">
              <DrawerTitle className="text-left">{title}</DrawerTitle>
              <DrawerDescription className="text-left">
                {description}
              </DrawerDescription>
            </div>
          </div>
        </DrawerHeader>
        <div className="px-4 mt-6">
          <div className="space-y-6">
            <div className="space-y-4">
              {tableInfo.map((item, index) => (
                <React.Fragment key={item.label}>
                  <div className="text-sm pt-1 grid grid-cols-[140px_1fr]">
                    <span className="text-gray-900">{item.label} :</span>
                    <span className="font-semibold text-gray-500">{item.value}</span>
                  </div>
                  {index < tableInfo.length - 1 && <hr className="border-gray-200" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
