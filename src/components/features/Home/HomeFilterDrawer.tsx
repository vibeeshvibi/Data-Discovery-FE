import * as React from "react";
import { IconFilter } from "@tabler/icons-react";
import { Button } from "../../ui/button";
import { Calendar } from "../../ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../ui/drawer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../ui/popover";
import { IconCalendar } from "@tabler/icons-react";
import { format } from "date-fns";

function FilterForm() {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-xs font-medium text-gray-600">Application</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select application" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="app1">Application 1</SelectItem>
            <SelectItem value="app2">Application 2</SelectItem>
            <SelectItem value="app3">Application 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium text-gray-600">RG/PBI</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select RG/PBI" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rg1">RG 1</SelectItem>
            <SelectItem value="rg2">RG 2</SelectItem>
            <SelectItem value="pbi1">PBI 1</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium text-gray-600">Data Store Type</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select data store type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sql">SQL Database</SelectItem>
            <SelectItem value="nosql">NoSQL Database</SelectItem>
            <SelectItem value="blob">Blob Storage</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium text-gray-600">Data Owner</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select data owner" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="owner1">Owner 1</SelectItem>
            <SelectItem value="owner2">Owner 2</SelectItem>
            <SelectItem value="owner3">Owner 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium text-gray-600">Data Store Name</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select data store name" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="store1">Data Store 1</SelectItem>
            <SelectItem value="store2">Data Store 2</SelectItem>
            <SelectItem value="store3">Data Store 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium text-gray-600">Tables</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select tables" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="table1">Table 1</SelectItem>
            <SelectItem value="table2">Table 2</SelectItem>
            <SelectItem value="table3">Table 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium text-gray-600">Created by</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select creator" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="user1">User 1</SelectItem>
            <SelectItem value="user2">User 2</SelectItem>
            <SelectItem value="user3">User 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium text-gray-600">Created at</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <IconCalendar className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export function HomeFilterDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button
          variant="secondary"
          className="flex items-center gap-2"
          style={{ backgroundColor: '#e3effb', color: 'var(--brand-secondary)' }}
        >
          <IconFilter style={{ color: 'var(--brand-secondary)' }} stroke={3} />
          <p className="font-semibold">Filter (2)</p>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="!w-[40%] !max-w-none h-screen pl-4 pt-2 overflow-y-auto overflow-x-hidden">
        <DrawerHeader>
          <div className="flex items-center gap-3">
            <div className="bg-[#edf5fd] p-2 rounded-lg">
              <IconFilter color="var(--brand-primary)" stroke={2} size={20} />
            </div>
            <div className="space-y-1">
              <DrawerTitle className="text-left">Filter Options</DrawerTitle>
              <DrawerDescription className="text-left">
                Configure your data filters here.
              </DrawerDescription>
            </div>
          </div>
        </DrawerHeader>

        <div className="px-4 pb-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-[#e3effb] data-[state=active]:text-[var(--brand-secondary)] data-[state=inactive]:bg-white data-[state=inactive]:text-gray-600"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="rg"
                className="data-[state=active]:bg-[#e3effb] data-[state=active]:text-[var(--brand-secondary)] data-[state=inactive]:bg-white data-[state=inactive]:text-gray-600"
              >
                RG
              </TabsTrigger>
              <TabsTrigger
                value="pbi"
                className="data-[state=active]:bg-[#e3effb] data-[state=active]:text-[var(--brand-secondary)] data-[state=inactive]:bg-white data-[state=inactive]:text-gray-600"
              >
                PBI
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-4">
              <FilterForm />
            </TabsContent>

            <TabsContent value="rg" className="mt-4">
              <FilterForm />
            </TabsContent>

            <TabsContent value="pbi" className="mt-4">
              <FilterForm />
            </TabsContent>
          </Tabs>
        </div>

        <DrawerFooter className="flex flex-row gap-2">
          <Button
            variant="outline"
            className="flex-1"
            style={{ backgroundColor: '#f0f4f8', color: '#374151' }}
          >
            Clear Filters
          </Button>
          <Button
            className="flex-1"
            style={{ backgroundColor: '#0b6bcb', color: 'white' }}
          >
            Filter Results
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
