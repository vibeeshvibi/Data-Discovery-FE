import { useState } from "react";
import { IconPencil } from "@tabler/icons-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../ui/drawer";
import type { DataStore } from "../../../constants/sampleData";

interface DataStoreRowEditDrawerProps {
  dataStore: DataStore;
  onSave?: (updatedDataStore: DataStore) => void;
}

export function DataStoreRowEditDrawer({ dataStore, onSave }: DataStoreRowEditDrawerProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: dataStore.name,
    description: dataStore.description,
    sourceTable: dataStore.sourceTable,
    createdBy: dataStore.createdBy,
    createdAt: dataStore.createdAt,
    tableCount: dataStore.tableCount,
    rowCount: dataStore.rowCount,
  });

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    const updatedDataStore: DataStore = {
      ...dataStore,
      ...formData,
    };
    onSave?.(updatedDataStore);
    setOpen(false);
  };

  const handleCancel = () => {
    // Reset form data to original values
    setFormData({
      name: dataStore.name,
      description: dataStore.description,
      sourceTable: dataStore.sourceTable,
      createdBy: dataStore.createdBy,
      createdAt: dataStore.createdAt,
      tableCount: dataStore.tableCount,
      rowCount: dataStore.rowCount,
    });
    setOpen(false);
  };

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className="w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity">
          <IconPencil className="w-full h-full" color="var(--brand-primary)" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="!w-[40%] !max-w-none h-screen pl-4 pt-2 overflow-y-auto overflow-x-hidden">
        <DrawerHeader>
          <div className="flex items-center gap-3">
            <div className="bg-[#edf5fd] p-2 rounded-lg">
              <IconPencil color="var(--brand-primary)" stroke={2} size={20} />
            </div>
            <div className="space-y-1">
              <DrawerTitle className="text-left">Edit Data Store</DrawerTitle>
              <DrawerDescription className="text-left">
                Modify the data store information below.
              </DrawerDescription>
            </div>
          </div>
        </DrawerHeader>

        <div className="px-4 mt-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Table Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="w-full min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Source Table</label>
                <Input
                  value={formData.sourceTable}
                  onChange={(e) => handleInputChange('sourceTable', e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Created By</label>
                <Input
                  value={formData.createdBy}
                  onChange={(e) => handleInputChange('createdBy', e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Created At</label>
                <Input
                  value={formData.createdAt}
                  onChange={(e) => handleInputChange('createdAt', e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium text-gray-600">Columns</label>
                  <Input
                    type="number"
                    value={formData.tableCount}
                    onChange={(e) => handleInputChange('tableCount', parseInt(e.target.value) || 0)}
                    className="w-full"
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium text-gray-600">Rows</label>
                  <Input
                    type="number"
                    value={formData.rowCount}
                    onChange={(e) => handleInputChange('rowCount', parseInt(e.target.value) || 0)}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter className="flex flex-row gap-2">
          <Button
            variant="outline"
            className="flex-1"
            style={{ backgroundColor: '#f0f4f8', color: '#374151' }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            className="flex-1"
            style={{ backgroundColor: '#0b6bcb', color: 'white' }}
            onClick={handleSave}
          >
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
