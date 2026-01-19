export interface User {
  id: string
  name: string
  email: string
  role: string
  status: "Active" | "Inactive"
}

export const sampleUsers: User[] = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Inactive" },
  { id: "4", name: "Alice Williams", email: "alice@example.com", role: "Manager", status: "Active" },
  { id: "5", name: "Charlie Brown", email: "charlie@example.com", role: "User", status: "Active" },
  { id: "6", name: "Diana Prince", email: "diana@example.com", role: "Admin", status: "Active" },
  { id: "7", name: "Ethan Hunt", email: "ethan@example.com", role: "User", status: "Inactive" },
  { id: "8", name: "Fiona Green", email: "fiona@example.com", role: "Manager", status: "Active" },
  { id: "9", name: "George Wilson", email: "george@example.com", role: "User", status: "Active" },
  { id: "10", name: "Hannah Moore", email: "hannah@example.com", role: "User", status: "Inactive" },
  { id: "11", name: "Ian Taylor", email: "ian@example.com", role: "Admin", status: "Active" },
  { id: "12", name: "Julia Anderson", email: "julia@example.com", role: "User", status: "Active" },
  { id: "13", name: "Kevin Thomas", email: "kevin@example.com", role: "Manager", status: "Active" },
  { id: "14", name: "Laura Jackson", email: "laura@example.com", role: "User", status: "Inactive" },
  { id: "15", name: "Mike White", email: "mike@example.com", role: "User", status: "Active" },
  { id: "16", name: "Nancy Harris", email: "nancy@example.com", role: "Admin", status: "Active" },
  { id: "17", name: "Oscar Martin", email: "oscar@example.com", role: "User", status: "Active" },
  { id: "18", name: "Paula Garcia", email: "paula@example.com", role: "Manager", status: "Inactive" },
  { id: "19", name: "Quinn Martinez", email: "quinn@example.com", role: "User", status: "Active" },
  { id: "20", name: "Rachel Robinson", email: "rachel@example.com", role: "User", status: "Active" },
]

export interface DataStoreItem {
  dataStoreType: string
  dataStoreName: string
  importEnabled: boolean
}

export interface ConfigureData {
  id: string
  type: string
  resourceGroup: string
  dataStore: DataStoreItem[]
}

export const sampleConfigureData: ConfigureData[] = [
  {
    id: "1",
    type: "RG",
    resourceGroup: "Production",
    dataStore: [
      {
        dataStoreType: "Azure SQL Database",
        dataStoreName: "prod-sql-001",
        importEnabled: true
      },
      {
        dataStoreType: "Azure SQL Database",
        dataStoreName: "prod-sql-002",
        importEnabled: false
      },
      {
        dataStoreType: "Azure SQL Database",
        dataStoreName: "prod-sql-003",
        importEnabled: true
      }
    ]
  },
  {
    id: "2",
    type: "RG",
    resourceGroup: "Development",
    dataStore: [
      {
        dataStoreType: "Azure SQL Database",
        dataStoreName: "dev-sql-001",
        importEnabled: true
      },
      {
        dataStoreType: "Azure SQL Database",
        dataStoreName: "dev-sql-002",
        importEnabled: true
      },
      {
        dataStoreType: "Azure SQL Database",
        dataStoreName: "dev-sql-003",
        importEnabled: false
      }
    ]
  },
  {
    id: "3",
    type: "RG",
    resourceGroup: "Staging",
    dataStore: [
      {
        dataStoreType: "Azure SQL Database",
        dataStoreName: "staging-sql-001",
        importEnabled: true
      },
      {
        dataStoreType: "Azure SQL Database",
        dataStoreName: "staging-sql-002",
        importEnabled: true
      },
      {
        dataStoreType: "Azure SQL Database",
        dataStoreName: "staging-sql-003",
        importEnabled: true
      }
    ]
  },
  {
    id: "4",
    type: "RG",
    resourceGroup: "Testing",
    dataStore: [
      {
        dataStoreType: "Azure SQL Database",
        dataStoreName: "test-sql-001",
        importEnabled: true
      },
      {
        dataStoreType: "Azure SQL Database",
        dataStoreName: "test-sql-002",
        importEnabled: true
      },
      {
        dataStoreType: "Azure SQL Database",
        dataStoreName: "test-sql-003",
        importEnabled: true
      }
    ]
  },
  {
    id: "5",
    type: "PBI",
    resourceGroup: "Development",
    dataStore: [
      {
        dataStoreType: "Power BI Dataset",
        dataStoreName: "dev-pbi-001",
        importEnabled: true
      },
      {
        dataStoreType: "Power BI Dataset",
        dataStoreName: "dev-pbi-002",
        importEnabled: true
      },
      {
        dataStoreType: "Power BI Dataset",
        dataStoreName: "dev-pbi-003",
        importEnabled: true
      }
    ]
  },
  {
    id: "6",
    type: "PBI",
    resourceGroup: "Analytics",
    dataStore: [
      {
        dataStoreType: "Power BI Report",
        dataStoreName: "analytics-pbi-001",
        importEnabled: true
      },
      {
        dataStoreType: "Power BI Report",
        dataStoreName: "analytics-pbi-002",
        importEnabled: true
      },
      {
        dataStoreType: "Power BI Report",
        dataStoreName: "analytics-pbi-003",
        importEnabled: true
      }
    ]
  },
  {
    id: "7",
    type: "PBI",
    resourceGroup: "Production",
    dataStore: [
      {
        dataStoreType: "Power BI Dashboard",
        dataStoreName: "prod-pbi-001",
        importEnabled: true
      },
      {
        dataStoreType: "Power BI Dashboard",
        dataStoreName: "prod-pbi-002",
        importEnabled: true
      },
      {
        dataStoreType: "Power BI Dashboard",
        dataStoreName: "prod-pbi-003",
        importEnabled: true
      }
    ]
  },
  {
    id: "8",
    type: "PBI",
    resourceGroup: "Staging",
    dataStore: [
      {
        dataStoreType: "Power BI Report",
        dataStoreName: "staging-pbi-001",
        importEnabled: true
      },
      {
        dataStoreType: "Power BI Report",
        dataStoreName: "staging-pbi-002",
        importEnabled: true
      },
      {
        dataStoreType: "Power BI Report",
        dataStoreName: "staging-pbi-003",
        importEnabled: true
      }
    ]
  }
]

export interface DataStore {
  id: string
  type: string
  application: string
  resourceGroup: string
  dataStoreType: string
  dataOwner: string
  name: string
  tableCount: number
  description: string
  sourceTable: string
  rowCount: number
  createdBy: string
  createdAt: string
}

export const sampleDataStores: DataStore[] = [
  {
    id: "1",
    type: "RG",
    application: "Sales App",
    resourceGroup: "RG-Sales-001",
    dataStoreType: "SQL Database",
    dataOwner: "John Doe",
    name: "Sales Database jhgufik hfvutyu hgffdr ubftufu ",
    tableCount: 25,
    description: "Main sales database containing customer orders, products, and transaction data",
    sourceTable: "Sales_Transactions",
    rowCount: 125000,
    createdBy: "Admin",
    createdAt: "2024-01-15"
  },
  {
    id: "2",
    type: "PBI",
    application: "Analytics Dashboard",
    resourceGroup: "RG-Analytics-002",
    dataStoreType: "Power BI Dataset",
    dataOwner: "Jane Smith",
    name: "Analytics Dataset",
    tableCount: 12,
    description: "Business intelligence dataset for executive reporting and analytics",
    sourceTable: "Analytics_Summary",
    rowCount: 50000,
    createdBy: "Manager",
    createdAt: "2024-02-20"
  },
  {
    id: "3",
    type: "RG",
    application: "Inventory System",
    resourceGroup: "RG-Inventory-003",
    dataStoreType: "Azure SQL",
    dataOwner: "Bob Johnson",
    name: "Inventory DB",
    tableCount: 18,
    description: "Warehouse inventory management system with stock levels and locations",
    sourceTable: "Inventory_Items",
    rowCount: 75000,
    createdBy: "User",
    createdAt: "2024-03-10"
  },
  {
    id: "4",
    type: "PBI",
    application: "Finance Reports",
    resourceGroup: "RG-Finance-004",
    dataStoreType: "Power BI Report",
    dataOwner: "Alice Williams",
    name: "Finance Reports",
    tableCount: 8,
    description: "Financial reporting dashboard with budget vs actual analysis",
    sourceTable: "Finance_Data",
    rowCount: 25000,
    createdBy: "Manager",
    createdAt: "2024-04-05"
  },
  {
    id: "5",
    type: "RG",
    application: "HR Portal",
    resourceGroup: "RG-HR-005",
    dataStoreType: "PostgreSQL",
    dataOwner: "Charlie Brown",
    name: "HR Database",
    tableCount: 15,
    description: "Human resources database with employee information and payroll data",
    sourceTable: "Employee_Records",
    rowCount: 5000,
    createdBy: "Admin",
    createdAt: "2024-05-12"
  },
  {
    id: "6",
    type: "RG",
    application: "Customer Portal",
    resourceGroup: "RG-Customer-006",
    dataStoreType: "MySQL",
    dataOwner: "Diana Prince",
    name: "Customer DB",
    tableCount: 22,
    description: "Customer relationship management database with contact and order history",
    sourceTable: "Customer_Profile",
    rowCount: 100000,
    createdBy: "User",
    createdAt: "2024-06-18"
  },
  {
    id: "7",
    type: "PBI",
    application: "Marketing Analytics",
    resourceGroup: "RG-Marketing-007",
    dataStoreType: "Power BI Dashboard",
    dataOwner: "Ethan Hunt",
    name: "Marketing Dashboard",
    tableCount: 10,
    description: "Marketing campaign performance and ROI analytics dashboard",
    sourceTable: "Marketing_Metrics",
    rowCount: 35000,
    createdBy: "Manager",
    createdAt: "2024-07-22"
  },
  {
    id: "8",
    type: "RG",
    application: "Logistics System",
    resourceGroup: "RG-Logistics-008",
    dataStoreType: "SQL Server",
    dataOwner: "Fiona Green",
    name: "Logistics DB",
    tableCount: 30,
    description: "Supply chain and logistics management system with shipment tracking",
    sourceTable: "Logistics_Operations",
    rowCount: 200000,
    createdBy: "User",
    createdAt: "2024-08-14"
  },
  {
    id: "9",
    type: "RG",
    application: "Quality Control",
    resourceGroup: "RG-QC-009",
    dataStoreType: "Oracle DB",
    dataOwner: "George Wilson",
    name: "QC Database",
    tableCount: 14,
    description: "Quality control and testing results database for manufacturing",
    sourceTable: "Quality_Inspections",
    rowCount: 15000,
    createdBy: "Admin",
    createdAt: "2024-09-09"
  },
  {
    id: "10",
    type: "PBI",
    application: "Executive Dashboard",
    resourceGroup: "RG-Exec-010",
    dataStoreType: "Power BI Report",
    dataOwner: "Hannah Moore",
    name: "Executive Reports",
    tableCount: 6,
    description: "Executive-level business intelligence reports and KPIs",
    sourceTable: "Executive_Summary",
    rowCount: 12000,
    createdBy: "Manager",
    createdAt: "2024-10-25"
  }
]
export const LineageData = {
  "name": "HeadcountHRStandardPack",
  "children": [
    {
      "name": "dbo.HeadcountHRStandardPack",
      "children": [
        {
          "name": "pds_hr_people_904394_dev.hr_reward.rewardemployeegroup_final",
          "children": [
            {
              "name": "sl_bdl_processed_hr_qa.hr.vw_rewardemployeegroup",
              "children": [
                {
                  "name": "bdl_processed_hr_qa.hr.rewardemployeegroup",
                  "children": [
                    {
                      "name": "bdl_processed_hr_qa.common.factempltrans",
                      "children": [
                        {
                          "name": "bdl_processed_hr_qa.common.dimextempl",
                          "children": [
                            {
                              "name": "bdl_processed_hr_qa.hr.employeestagephase2",
                              "children": [
                                {
                                  "name": "bdl_processed_hr_qa.hr.employeestage",
                                  "children": [
                                    {
                                      "name": "bdl_processed_hr_qa.staging.bdllandingphase1table",
                                      "value": 29896,
                                      "children": [
                                        {
                                          "name": "bdl_processed_hr_qa.hr.hrasnapdatedelta",
                                          "value": 29944
                                        }
                                      ]
                                    },
                                    {
                                      "name": "bdl_processed_hr_qa.common.function",
                                      "value": 29843
                                    }
                                  ]
                                },
                                {
                                  "name": "bdl_processed_hr_qa.staging.bdllandingphase3table",
                                  "children": [
                                    {
                                      "name": "bdl_processed_hr_qa.staging.bdllandingphase2table",
                                      "value": 29920
                                    },
                                    {
                                      "name": "bdl_processed_hr_qa.hr.hrasnapdatedelta",
                                      "value": 29944
                                    }
                                  ]
                                },
                                {
                                  "name": "bdl_processed_hr_qa.staging.bdllandingphase2table",
                                  "value": 29920
                                }
                              ]
                            },
                            {
                              "name": "bdl_processed_hr_qa.common.assignment",
                              "value": 29942
                            },
                            {
                              "name": "bdl_processed_hr_qa.hr.employeestage",
                              "children": [
                                {
                                  "name": "bdl_processed_hr_qa.staging.bdllandingphase1table",
                                  "value": 29896,
                                  "children": [
                                    {
                                      "name": "bdl_processed_hr_qa.hr.hrasnapdatedelta",
                                      "value": 29944
                                    }
                                  ]
                                },
                                {
                                  "name": "bdl_processed_hr_qa.common.function",
                                  "value": 29843
                                }
                              ]
                            },
                            {
                              "name": "bdl_processed_hr_qa.hr.hrasnapdatedelta",
                              "value": 29944
                            },
                            {
                              "name": "bdl_processed_hr_qa.common.organizationunit",
                              "value": 29847
                            },
                            {
                              "name": "bdl_processed_hr_qa.common.geography",
                              "value": 29923
                            },
                            {
                              "name": "bdl_processed_hr_qa.common.empexclusiongroup",
                              "value": 29869,
                              "children": [
                                {
                                  "name": "bdl_processed_hr_qa.hr.hrasnapdatedelta",
                                  "value": 29944
                                }
                              ]
                            },
                            {
                              "name": "bdl_processed_hr_qa.common.function",
                              "value": 29843
                            },
                            {
                              "name": "bdl_processed_hr_qa.hr.positiondata",
                              "value": 29935,
                              "children": [
                                {
                                  "name": "bdl_processed_hr_qa.staging.positiondata_stage",
                                  "value": 29850
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "bdl_processed_hr_qa.hr.employeestagephase2",
                          "children": [
                            {
                              "name": "bdl_processed_hr_qa.staging.bdllandingphase3table",
                              "children": [
                                {
                                  "name": "bdl_processed_hr_qa.hr.hrasnapdatedelta",
                                  "value": 29944
                                },
                                {
                                  "name": "bdl_processed_hr_qa.staging.bdllandingphase2table",
                                  "value": 29920
                                }
                              ]
                            },
                            {
                              "name": "bdl_processed_hr_qa.hr.employeestage",
                              "value": 29882,
                              "children": [
                                {
                                  "name": "bdl_processed_hr_qa.staging.bdllandingphase1table",
                                  "children": [
                                    {
                                      "name": "bdl_processed_hr_qa.hr.hrasnapdatedelta",
                                      "value": 29944
                                    }
                                  ]
                                },
                                {
                                  "name": "bdl_processed_hr_qa.common.function",
                                  "value": 29843
                                }
                              ]
                            },
                            {
                              "name": "bdl_processed_hr_qa.staging.bdllandingphase2table",
                              "value": 29920
                            }
                          ]
                        },
                        {
                          "name": "bdl_processed_hr_qa.common.organizationunit",
                          "value": 29847
                        },
                        {
                          "name": "bdl_processed_hr_qa.hr.employeestage",
                          "children": [
                            {
                              "name": "bdl_processed_hr_qa.common.function",
                              "value": 29843
                            },
                            {
                              "name": "bdl_processed_hr_qa.staging.bdllandingphase1table",
                              "children": [
                                {
                                  "name": "bdl_processed_hr_qa.hr.hrasnapdatedelta",
                                  "value": 29944
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "bdl_processed_hr_qa.common.geography",
                          "value": 29923
                        },
                        {
                          "name": "bdl_processed_hr_qa.hr.hrasnapdatedelta",
                          "value": 29944
                        },
                        {
                          "name": "bdl_processed_hr_qa.common.empexclusiongroup",
                          "children": [
                            {
                              "name": "bdl_processed_hr_qa.hr.hrasnapdatedelta",
                              "value": 29944
                            }
                          ]
                        },
                        {
                          "name": "bdl_processed_hr_qa.common.assignment",
                          "value": 29942
                        },
                        {
                          "name": "bdl_processed_hr_qa.hr.positiondata",
                          "value": 29935,
                          "children": [
                            {
                              "name": "bdl_processed_hr_qa.staging.positiondata_stage",
                              "value": 29850
                            }
                          ]
                        },
                        {
                          "name": "bdl_processed_hr_qa.common.function",
                          "value": 29843
                        }
                      ]
                    },
                    {
                      "name": "bdl_processed_hr_qa.hr.employeestagephase2",
                      "children": [
                        {
                          "name": "bdl_processed_hr_qa.staging.bdllandingphase2table",
                          "value": 29920
                        },
                        {
                          "name": "bdl_processed_hr_qa.hr.employeestage",
                          "value": 29882,
                          "children": [
                            {
                              "name": "bdl_processed_hr_qa.staging.bdllandingphase1table",
                              "value": 29896,
                              "children": [
                                {
                                  "name": "bdl_processed_hr_qa.hr.hrasnapdatedelta",
                                  "value": 29944
                                }
                              ]
                            },
                            {
                              "name": "bdl_processed_hr_qa.common.function",
                              "value": 29843
                            }
                          ]
                        },
                        {
                          "name": "bdl_processed_hr_qa.staging.bdllandingphase3table",
                          "children": [
                            {
                              "name": "bdl_processed_hr_qa.hr.hrasnapdatedelta",
                              "value": 29944
                            },
                            {
                              "name": "bdl_processed_hr_qa.staging.bdllandingphase2table",
                              "value": 29920
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "bdl_processed_hr_qa.hr.hrasnapdatedelta",
                      "value": 29944
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "pds_hr_people_904394_dev.standard_pack.exclusiongroupmapping_final",
          "value": 30077
        },
        {
          "name": "pds_hr_people_904394_dev.hr_online.functionhierarchy_final",
          "children": [
            {
              "name": "sl_bdl_processed_hr_qa.common.vw_function",
              "children": [
                {
                  "name": "bdl_processed_hr_qa.common.function",
                  "value": 29843
                }
              ]
            }
          ]
        },
        {
          "name": "pds_hr_people_904394_dev.hr_online.organizationunitehierarchy_final",
          "children": [
            {
              "name": "sl_bdl_processed_hr_qa.common.vw_organizationunit",
              "children": [
                {
                  "name": "bdl_processed_hr_qa.common.organizationunit",
                  "value": 29847
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}