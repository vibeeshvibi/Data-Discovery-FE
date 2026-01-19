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
import type { TableColumn } from "../../../constants/tableColumns";

interface TableRowEditDrawerProps {
  tableColumn: TableColumn;
  onSave?: (updatedTableColumn: TableColumn) => void;
}

export function TableRowEditDrawer({ tableColumn, onSave }: TableRowEditDrawerProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    columnName: tableColumn.columnName,
    description: tableColumn.description,
    dataType: tableColumn.dataType,
    nullable: tableColumn.nullable === 'Yes',
    measure: tableColumn.measure === 'Yes',
    formula: tableColumn.formula,
    createdBy: tableColumn.createdBy,
    modifiedBy: tableColumn.modifiedBy,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    const updatedTableColumn: TableColumn = {
      ...tableColumn,
      ...formData,
      nullable: formData.nullable ? 'Yes' : 'No',
      measure: formData.measure ? 'Yes' : 'No',
    };
    onSave?.(updatedTableColumn);
    setOpen(false);
  };

  const handleCancel = () => {
    // Reset form data to original values
    setFormData({
      columnName: tableColumn.columnName,
      description: tableColumn.description,
      dataType: tableColumn.dataType,
      nullable: tableColumn.nullable === 'Yes',
      measure: tableColumn.measure === 'Yes',
      formula: tableColumn.formula,
      createdBy: tableColumn.createdBy,
      modifiedBy: tableColumn.modifiedBy,
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
              <DrawerTitle className="text-left">Edit Table Column</DrawerTitle>
              <DrawerDescription className="text-left">
                Modify the table column information below.
              </DrawerDescription>
            </div>
          </div>
        </DrawerHeader>

        <div className="px-4 mt-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Column Name</label>
                <Input
                  value={formData.columnName}
                  onChange={(e) => handleInputChange('columnName', e.target.value)}
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
                <label className="text-sm font-medium text-gray-600">Data Type</label>
                <Input
                  value={formData.dataType}
                  onChange={(e) => handleInputChange('dataType', e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium text-gray-600">Nullable</label>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => handleInputChange('nullable', !formData.nullable)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                        formData.nullable ? 'bg-[var(--brand-primary)]' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          formData.nullable ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                    <span className="text-sm text-gray-600">
                      {formData.nullable ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium text-gray-600">Measure</label>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => handleInputChange('measure', !formData.measure)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full  ${
                        formData.measure ? 'bg-[var(--brand-primary)]' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          formData.measure ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                    <span className="text-sm text-gray-600">
                      {formData.measure ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Formula</label>
                <Input
                  value={formData.formula}
                  onChange={(e) => handleInputChange('formula', e.target.value)}
                  className="w-full"
                  placeholder="Enter formula (optional)"
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
                <label className="text-sm font-medium text-gray-600">Modified By</label>
                <Input
                  value={formData.modifiedBy}
                  onChange={(e) => handleInputChange('modifiedBy', e.target.value)}
                  className="w-full"
                />
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
