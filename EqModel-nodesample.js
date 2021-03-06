module.exports = {
  id: "NWind",
  name: "DataModel",
  version: "6",
  operators: [
    {
      id: "Equal",
      caption: "is equal to",
      displayFormat: "{expr1} [[is equal to]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "NotEqual",
      caption: "is not equal to",
      displayFormat: "{expr1} [[is not equal to]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "LessThan",
      caption: "is less than",
      displayFormat: "{expr1} [[is less than]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "LessOrEqual",
      caption: "is less than or equal to",
      displayFormat: "{expr1} [[is less than or equal to]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "GreaterThan",
      caption: "is greater than",
      displayFormat: "{expr1} [[is greater than]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "GreaterOrEqual",
      caption: "is greater than or equal to",
      displayFormat: "{expr1} [[is greater than or equal to]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "IsNull",
      caption: "is null",
      displayFormat: "{expr1} [[is null]]",
      isRange: false,
      caseIns: false,
      paramCount: 1,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "IsNotNull",
      caption: "is not null",
      displayFormat: "{expr1} [[is not null]]",
      isRange: false,
      caseIns: false,
      paramCount: 1,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "IsTrue",
      caption: "is true",
      displayFormat: "{expr1} [[is true]]",
      isRange: false,
      caseIns: false,
      paramCount: 1,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "NotTrue",
      caption: "is not true",
      displayFormat: "{expr1} [[is not true]]",
      isRange: false,
      caseIns: false,
      paramCount: 1,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "InList",
      caption: "is in list",
      displayFormat: "{expr1} [[is in list]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "List",
        dataType: "Unknown"
      }
    },
    {
      id: "NotInList",
      caption: "is not in list",
      displayFormat: "{expr1} [[is not in list]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "List",
        dataType: "Unknown"
      }
    },
    {
      id: "Between",
      caption: "is between",
      displayFormat: "{expr1} [[is between]] {expr2} and {expr3}",
      isRange: true,
      caseIns: false,
      paramCount: 3,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "NotBetween",
      caption: "is not between",
      displayFormat: "{expr1} [[is not between]] {expr2} and {expr3}",
      isRange: true,
      caseIns: false,
      paramCount: 3,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "StartsWith",
      caption: "starts with",
      displayFormat: "{expr1} [[starts with]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown",
        editor: {
          id: "_DTE",
          type: "EDIT",
          resType: "String",
          defValue: ""
        }
      }
    },
    {
      id: "NotStartsWith",
      caption: "does not start with",
      displayFormat: "{expr1} [[does not start with]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown",
        editor: {
          id: "_DTE",
          type: "EDIT",
          resType: "String",
          defValue: ""
        }
      }
    },
    {
      id: "Contains",
      caption: "contains",
      displayFormat: "{expr1} [[contains]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown",
        editor: {
          id: "_DTE",
          type: "EDIT",
          resType: "String",
          defValue: ""
        }
      }
    },
    {
      id: "NotContains",
      caption: "does not contain",
      displayFormat: "{expr1} [[does not contain]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown",
        editor: {
          id: "_DTE",
          type: "EDIT",
          resType: "String",
          defValue: ""
        }
      }
    },
    {
      id: "InSubQuery",
      caption: "in sub query",
      displayFormat: "{expr1} [[in sub query]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "Query",
        dataType: "Unknown"
      }
    },
    {
      id: "NotInSubQuery",
      caption: "not in sub query",
      displayFormat: "{expr1} [[is not in sub query]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "Query",
        dataType: "Unknown"
      }
    },
    {
      id: "DateWithinToday",
      caption: "today",
      displayFormat: "{expr1} [[within today]]",
      isRange: false,
      caseIns: false,
      paramCount: 1,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "DateWithinThisWeek",
      caption: "this week",
      displayFormat: "{expr1} [[within this week]]",
      isRange: false,
      caseIns: false,
      paramCount: 1,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "DateWithinPrevWeek",
      caption: "last week",
      displayFormat: "{expr1} [[within last week]]",
      isRange: false,
      caseIns: false,
      paramCount: 1,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "DateWithinThisMonth",
      caption: "this month",
      displayFormat: "{expr1} [[within this month]]",
      isRange: false,
      caseIns: false,
      paramCount: 1,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "DateWithinPrevMonth",
      caption: "previous month",
      displayFormat: "{expr1} [[within previous month]]",
      isRange: false,
      caseIns: false,
      paramCount: 1,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "DateWithinThisYear",
      caption: "this year",
      displayFormat: "{expr1} [[within this year]]",
      isRange: false,
      caseIns: false,
      paramCount: 1,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "DateWithinPrevYear",
      caption: "last year",
      displayFormat: "{expr1} [[within last year]]",
      isRange: false,
      caseIns: false,
      paramCount: 1,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown"
      }
    },
    {
      id: "DateBeforePrecise",
      caption: "before",
      displayFormat: "{expr1} [[before]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown",
        editor: {
          id: "_DPDE",
          type: "DATETIME",
          resType: "Unknown",
          defValue: "${Today}"
        },
        defValue: "${Today}"
      }
    },
    {
      id: "DateAfterPrecise",
      caption: "after",
      displayFormat: "{expr1} [[after]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown",
        editor: {
          id: "_DPDE",
          type: "DATETIME",
          resType: "Unknown",
          defValue: "${Today}"
        },
        defValue: "${FirstDayOfMonth}"
      }
    },
    {
      id: "DatePeriodPrecise",
      caption: "custom period",
      displayFormat: "{expr1} [[within]] {expr2} and {expr3}",
      isRange: true,
      caseIns: false,
      paramCount: 3,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown",
        editor: {
          id: "_DPDE",
          type: "DATETIME",
          resType: "Unknown",
          defValue: "${Today}"
        },
        defValue: "${Today}"
      },
      operands: [
        {
          kind: "Scalar",
          dataType: "Unknown",
          defValue: "${FirstDayOfMonth}"
        },
        {
          kind: "Scalar",
          dataType: "Unknown",
          defValue: "${Today}"
        }
      ]
    },
    {
      id: "TimeBeforePrecise",
      caption: "before",
      displayFormat: "{expr1} [[before]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown",
        editor: {
          id: "_DPTE",
          type: "DATETIME",
          resType: "Unknown",
          defValue: "${Today}"
        },
        defValue: "${Now}"
      }
    },
    {
      id: "TimeAfterPrecise",
      caption: "after",
      displayFormat: "{expr1} [[after]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown",
        editor: {
          id: "_DPTE",
          type: "DATETIME",
          resType: "Unknown",
          defValue: "${Today}"
        },
        defValue: "${HourStart}"
      }
    },
    {
      id: "TimePeriodPrecise",
      caption: "between",
      displayFormat: "{expr1} [[between]] {expr2} and {expr3}",
      isRange: true,
      caseIns: false,
      paramCount: 3,
      defaultOperand: {
        kind: "Scalar",
        dataType: "Unknown",
        editor: {
          id: "_DPTE",
          type: "DATETIME",
          resType: "Unknown",
          defValue: "${Today}"
        },
        defValue: "${Today}"
      },
      operands: [
        {
          kind: "Scalar",
          dataType: "Unknown",
          defValue: "${HourStart}"
        },
        {
          kind: "Scalar",
          dataType: "Unknown",
          defValue: "${Now}"
        }
      ]
    },
    {
      id: "MaximumOfAttr",
      caption: "is maximum of",
      displayFormat: "{expr1} [[is equal to maximum of]] {expr2}",
      isRange: false,
      caseIns: false,
      paramCount: 2,
      defaultOperand: {
        kind: "Attribute",
        dataType: "Unknown"
      }
    }
  ],
  rootEntity: {
    name: "",
    caption: "",
    uic: true,
    uir: true,
    uis: true,
    subEntities: [
      {
        name: "Category",
        caption: "Category",
        uic: true,
        uir: true,
        uis: true,
        attributes: [
          {
            id: "Categories.CategoryID",
            caption: "CategoryID",
            dataType: "Int",
            size: 0,
            uic: false,
            uir: false,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery"
            ],
            description: "abcd",
            userData: "IrionCustomData",
            sqlExpr: "Categories.CategoryID"
          },
          {
            id: "Categories.CategoryName",
            caption: "Category name",
            dataType: "String",
            size: 15,
            uic: true,
            uir: true,
            uis: true,
            lookupAttr: "Categories.CategoryName",
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotEqual",
              "NotContains",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery"
            ],
            sqlExpr: "Categories.CategoryName"
          },
          {
            id: "Categories.Description",
            caption: "Description",
            dataType: "Memo",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Categories.Description"
          },
          {
            id: "Categories.IconFileName",
            caption: "Icon file name",
            dataType: "Memo",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Categories.IconFileName"
          }
        ]
      },
      {
        name: "Customer",
        caption: "Customer",
        uic: true,
        uir: true,
        uis: true,
        attributes: [
          {
            id: "Customers.CustomerID",
            caption: "CustomerID",
            dataType: "String",
            size: 50,
            uic: false,
            uir: false,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery"
            ],
            sqlExpr: "Customers.CustomerID"
          },
          {
            id: "Customers.CompanyName",
            caption: "Company name",
            dataType: "String",
            size: 40,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery"
            ],
            sqlExpr: "Customers.CompanyName"
          },
          {
            id: "Customers.ContactName",
            caption: "Contact name",
            dataType: "String",
            size: 30,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Customers.ContactName"
          },
          {
            id: "Customers.ContactTitle",
            caption: "Contact title",
            dataType: "String",
            size: 30,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Customers.ContactTitle"
          },
          {
            id: "Customers.Address",
            caption: "Address",
            dataType: "String",
            size: 100,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Customers.Address"
          },
          {
            id: "Customers.City",
            caption: "City",
            dataType: "String",
            size: 15,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Customers.City"
          },
          {
            id: "Customers.Region",
            caption: "Region",
            dataType: "String",
            size: 15,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Customers.Region"
          },
          {
            id: "Customers.PostalCode",
            caption: "Postal code",
            dataType: "String",
            size: 10,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Customers.PostalCode"
          },
          {
            id: "Customers.Country",
            caption: "Country",
            dataType: "String",
            size: 15,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Customers.Country"
          },
          {
            id: "Customers.Phone",
            caption: "Phone",
            dataType: "String",
            size: 24,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Customers.Phone"
          },
          {
            id: "Customers.Fax",
            caption: "Fax",
            dataType: "String",
            size: 24,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Customers.Fax"
          }
        ]
      },
      {
        name: "Employee",
        caption: "Employee",
        uic: true,
        uir: true,
        uis: true,
        attributes: [
          {
            id: "Employees.EmployeeID",
            caption: "EmployeeID",
            dataType: "Int",
            size: 0,
            uic: false,
            uir: false,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery"
            ],
            sqlExpr: "Employees.EmployeeID"
          },
          {
            id: "Employees.LastName",
            caption: "Last name",
            dataType: "String",
            size: 50,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Employees.LastName"
          },
          {
            id: "Employees.FirstName",
            caption: "First name",
            dataType: "String",
            size: 50,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Employees.FirstName"
          },
          {
            id: "Employees.Title",
            caption: "Title",
            dataType: "Memo",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Employees.Title"
          },
          {
            id: "Employees.TitleOfCourtesy",
            caption: "Title of courtesy",
            dataType: "Memo",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Employees.TitleOfCourtesy"
          },
          {
            id: "Employees.BirthDate",
            caption: "Birth date",
            dataType: "Date",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "DateWithinToday",
            operators: [
              "DateWithinToday",
              "DateWithinThisWeek",
              "DateWithinPrevWeek",
              "DateWithinThisMonth",
              "DateWithinPrevMonth",
              "DateWithinThisYear",
              "DateWithinPrevYear",
              "DateBeforePrecise",
              "DateAfterPrecise",
              "DatePeriodPrecise",
              "MaximumOfAttr",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Employees.BirthDate"
          },
          {
            id: "Employees.HireDate",
            caption: "Hire date",
            dataType: "Date",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "DateWithinToday",
            operators: [
              "DateWithinToday",
              "DateWithinThisWeek",
              "DateWithinPrevWeek",
              "DateWithinThisMonth",
              "DateWithinPrevMonth",
              "DateWithinThisYear",
              "DateWithinPrevYear",
              "DateBeforePrecise",
              "DateAfterPrecise",
              "DatePeriodPrecise",
              "MaximumOfAttr",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Employees.HireDate"
          },
          {
            id: "Employees.Address",
            caption: "Address",
            dataType: "String",
            size: 60,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Employees.Address"
          },
          {
            id: "Employees.City",
            caption: "City",
            dataType: "String",
            size: 15,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Employees.City"
          },
          {
            id: "Employees.Region",
            caption: "Region",
            dataType: "String",
            size: 15,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Employees.Region"
          },
          {
            id: "Employees.PostalCode",
            caption: "Postal code",
            dataType: "String",
            size: 10,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Employees.PostalCode"
          },
          {
            id: "Employees.Country",
            caption: "Country",
            dataType: "String",
            size: 50,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Employees.Country"
          },
          {
            id: "Employees.HomePhone",
            caption: "Home phone",
            dataType: "String",
            size: 24,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Employees.HomePhone"
          },
          {
            id: "Employees.Extension",
            caption: "Extension",
            dataType: "String",
            size: 10,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Employees.Extension"
          },
          {
            id: "Employees.Notes",
            caption: "Notes",
            dataType: "Memo",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Employees.Notes"
          },
          {
            id: "Employees.ReportsTo",
            caption: "ReportsTo",
            dataType: "Int",
            size: 0,
            uic: false,
            uir: false,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Employees.ReportsTo"
          }
        ]
      },
      {
        name: "Order  detail",
        caption: "Order  detail",
        uic: true,
        uir: true,
        uis: true,
        attributes: [
          {
            id: "{Order Details}.OrderID",
            caption: "Order",
            dataType: "Int",
            size: 0,
            uic: true,
            uir: false,
            uis: true,
            defaultOperator: "Equal",
            operators: ["Equal", "NotEqual", "InList", "NotInList"],
            defaultEditor: {
              id: "VE_Order Details.OrderID",
              type: "SQLLIST",
              resType: "Unknown",
              defValue: ""
            },
            sqlExpr: "[Order Details].OrderID"
          },
          {
            id: "{Order Details}.ProductID",
            caption: "Product",
            dataType: "Int",
            size: 0,
            uic: true,
            uir: false,
            uis: true,
            defaultOperator: "Equal",
            operators: ["Equal", "NotEqual", "InList", "NotInList"],
            defaultEditor: {
              id: "VE_Order Details.ProductID",
              type: "SQLLIST",
              resType: "Unknown",
              defValue: ""
            },
            sqlExpr: "[Order Details].ProductID"
          },
          {
            id: "{Order Details}.UnitPrice",
            caption: "Unit price",
            dataType: "Float",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "[Order Details].UnitPrice"
          },
          {
            id: "{Order Details}.Quantity",
            caption: "Quantity",
            dataType: "Int",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "[Order Details].Quantity"
          },
          {
            id: "{Order Details}.Discount",
            caption: "Discount",
            dataType: "Float",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "[Order Details].Discount"
          }
        ]
      },
      {
        name: "Order",
        caption: "Order",
        uic: true,
        uir: true,
        uis: true,
        attributes: [
          {
            id: "Orders.OrderID",
            caption: "OrderID",
            dataType: "Int",
            size: 0,
            uic: false,
            uir: false,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery"
            ],
            sqlExpr: "Orders.OrderID"
          },
          {
            id: "Orders.CustomerID",
            caption: "Customer",
            dataType: "String",
            size: 50,
            uic: true,
            uir: false,
            uis: true,
            defaultOperator: "Equal",
            operators: ["Equal", "NotEqual", "InList", "NotInList"],
            defaultEditor: {
              id: "VE_Orders.CustomerID",
              type: "SQLLIST",
              resType: "Unknown",
              defValue: ""
            },
            sqlExpr: "Orders.CustomerID"
          },
          {
            id: "Orders.EmployeeID",
            caption: "Employee",
            dataType: "Int",
            size: 0,
            uic: true,
            uir: false,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "NotEqual",
              "InList",
              "NotInList",
              "IsNull",
              "IsNotNull"
            ],
            defaultEditor: {
              id: "VE_Orders.EmployeeID",
              type: "SQLLIST",
              resType: "Unknown",
              defValue: ""
            },
            sqlExpr: "Orders.EmployeeID"
          },
          {
            id: "Orders.OrderDate",
            caption: "Order date",
            dataType: "Date",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "DateWithinToday",
            operators: [
              "DateWithinToday",
              "DateWithinThisWeek",
              "DateWithinPrevWeek",
              "DateWithinThisMonth",
              "DateWithinPrevMonth",
              "DateWithinThisYear",
              "DateWithinPrevYear",
              "DateBeforePrecise",
              "DateAfterPrecise",
              "DatePeriodPrecise",
              "MaximumOfAttr",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Orders.OrderDate"
          },
          {
            id: "Orders.RequiredDate",
            caption: "Required date",
            dataType: "Date",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "DateWithinToday",
            operators: [
              "DateWithinToday",
              "DateWithinThisWeek",
              "DateWithinPrevWeek",
              "DateWithinThisMonth",
              "DateWithinPrevMonth",
              "DateWithinThisYear",
              "DateWithinPrevYear",
              "DateBeforePrecise",
              "DateAfterPrecise",
              "DatePeriodPrecise",
              "MaximumOfAttr",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Orders.RequiredDate"
          },
          {
            id: "Orders.ShippedDate",
            caption: "Shipped date",
            dataType: "Date",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "DateWithinToday",
            operators: [
              "DateWithinToday",
              "DateWithinThisWeek",
              "DateWithinPrevWeek",
              "DateWithinThisMonth",
              "DateWithinPrevMonth",
              "DateWithinThisYear",
              "DateWithinPrevYear",
              "DateBeforePrecise",
              "DateAfterPrecise",
              "DatePeriodPrecise",
              "MaximumOfAttr",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Orders.ShippedDate"
          },
          {
            id: "Orders.ShipVia",
            caption: "Ship via",
            dataType: "Int",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Orders.ShipVia"
          },
          {
            id: "Orders.Freight",
            caption: "Freight",
            dataType: "Float",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Orders.Freight"
          },
          {
            id: "Orders.ShipName",
            caption: "Ship name",
            dataType: "String",
            size: 50,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Orders.ShipName"
          },
          {
            id: "Orders.ShipAddress",
            caption: "Ship address",
            dataType: "Memo",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery"
            ],
            sqlExpr: "Orders.ShipAddress"
          },
          {
            id: "Orders.ShipCity",
            caption: "Ship city",
            dataType: "String",
            size: 15,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Orders.ShipCity"
          },
          {
            id: "Orders.ShipRegion",
            caption: "Ship region",
            dataType: "String",
            size: 15,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Orders.ShipRegion"
          },
          {
            id: "Orders.ShipPostalCode",
            caption: "Ship postal code",
            dataType: "String",
            size: 10,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Orders.ShipPostalCode"
          },
          {
            id: "Orders.ShipCountry",
            caption: "Ship country",
            dataType: "String",
            size: 15,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Orders.ShipCountry"
          },
          {
            id: "Orders.Paid",
            caption: "Paid",
            dataType: "Int",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Orders.Paid"
          }
        ]
      },
      {
        name: "Product",
        caption: "Product",
        uic: true,
        uir: true,
        uis: true,
        attributes: [
          {
            id: "Products.ProductID",
            caption: "ProductID",
            dataType: "Int",
            size: 0,
            uic: false,
            uir: false,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery"
            ],
            sqlExpr: "Products.ProductID"
          },
          {
            id: "Products.ProductName",
            caption: "Product name",
            dataType: "String",
            size: 50,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Products.ProductName"
          },
          {
            id: "Products.SupplierID",
            caption: "Supplier",
            dataType: "Int",
            size: 0,
            uic: true,
            uir: false,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "NotEqual",
              "InList",
              "NotInList",
              "IsNull",
              "IsNotNull"
            ],
            defaultEditor: {
              id: "VE_Products.SupplierID",
              type: "SQLLIST",
              resType: "Unknown",
              defValue: ""
            },
            sqlExpr: "Products.SupplierID"
          },
          {
            id: "Products.CategoryID",
            caption: "Category",
            dataType: "Int",
            size: 0,
            uic: true,
            uir: false,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "NotEqual",
              "InList",
              "NotInList",
              "IsNull",
              "IsNotNull"
            ],
            defaultEditor: {
              id: "VE_Products.CategoryID",
              type: "SQLLIST",
              resType: "Unknown",
              defValue: ""
            },
            sqlExpr: "Products.CategoryID"
          },
          {
            id: "Products.QuantityPerUnit",
            caption: "Quantity per unit",
            dataType: "Memo",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Products.QuantityPerUnit"
          },
          {
            id: "Products.UnitPrice",
            caption: "Unit price",
            dataType: "Float",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Products.UnitPrice"
          },
          {
            id: "Products.UnitsInStock",
            caption: "Units in stock",
            dataType: "Int",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Products.UnitsInStock"
          },
          {
            id: "Products.UnitsOnOrder",
            caption: "Units on order",
            dataType: "Int",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Products.UnitsOnOrder"
          },
          {
            id: "Products.ReorderLevel",
            caption: "Reorder level",
            dataType: "Int",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Products.ReorderLevel"
          },
          {
            id: "Products.Discontinued",
            caption: "Discontinued",
            dataType: "Int",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Products.Discontinued"
          },
          {
            id: "Products.LastOrder",
            caption: "Last order",
            dataType: "Memo",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Products.LastOrder"
          },
          {
            id: "Products.OnSale",
            caption: "On sale",
            dataType: "Int",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Products.OnSale"
          }
        ]
      },
      {
        name: "Supplier",
        caption: "Supplier",
        uic: true,
        uir: true,
        uis: true,
        attributes: [
          {
            id: "Suppliers.SupplierID",
            caption: "SupplierID",
            dataType: "Int",
            size: 0,
            uic: false,
            uir: false,
            uis: true,
            defaultOperator: "Equal",
            operators: [
              "Equal",
              "Between",
              "LessThan",
              "LessOrEqual",
              "GreaterThan",
              "GreaterOrEqual",
              "InList",
              "NotEqual",
              "NotBetween",
              "NotInList",
              "MaximumOfAttr",
              "InSubQuery",
              "NotInSubQuery"
            ],
            sqlExpr: "Suppliers.SupplierID"
          },
          {
            id: "Suppliers.CompanyName",
            caption: "Company name",
            dataType: "String",
            size: 40,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Suppliers.CompanyName"
          },
          {
            id: "Suppliers.ContactName",
            caption: "Contact name",
            dataType: "String",
            size: 30,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Suppliers.ContactName"
          },
          {
            id: "Suppliers.ContactTitle",
            caption: "Contact title",
            dataType: "String",
            size: 30,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Suppliers.ContactTitle"
          },
          {
            id: "Suppliers.Address",
            caption: "Address",
            dataType: "String",
            size: 60,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Suppliers.Address"
          },
          {
            id: "Suppliers.City",
            caption: "City",
            dataType: "String",
            size: 15,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Suppliers.City"
          },
          {
            id: "Suppliers.Region",
            caption: "Region",
            dataType: "String",
            size: 15,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Suppliers.Region"
          },
          {
            id: "Suppliers.PostalCode",
            caption: "Postal code",
            dataType: "String",
            size: 10,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Suppliers.PostalCode"
          },
          {
            id: "Suppliers.Country",
            caption: "Country",
            dataType: "String",
            size: 15,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Suppliers.Country"
          },
          {
            id: "Suppliers.Phone",
            caption: "Phone",
            dataType: "String",
            size: 24,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Suppliers.Phone"
          },
          {
            id: "Suppliers.Fax",
            caption: "Fax",
            dataType: "String",
            size: 24,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Suppliers.Fax"
          },
          {
            id: "Suppliers.HomePage",
            caption: "Home page",
            dataType: "Memo",
            size: 0,
            uic: true,
            uir: true,
            uis: true,
            defaultOperator: "StartsWith",
            operators: [
              "StartsWith",
              "Contains",
              "Equal",
              "InList",
              "NotStartsWith",
              "NotContains",
              "NotEqual",
              "NotInList",
              "InSubQuery",
              "NotInSubQuery",
              "IsNull",
              "IsNotNull"
            ],
            sqlExpr: "Suppliers.HomePage"
          }
        ]
      }
    ]
  },
  aggrFunctions: [
    {
      id: "SUM",
      caption: "Sum",
      displayFormat: "[[Sum]] of {attr1}"
    },
    {
      id: "COUNT",
      caption: "Count",
      displayFormat: "[[Count]] of {attr1}"
    },
    {
      id: "CNTDST",
      caption: "Distinct count",
      displayFormat: "[[Distinct count]] of {attr1}"
    },
    {
      id: "AVG",
      caption: "Average",
      displayFormat: "[[Average]] of {attr1}"
    },
    {
      id: "MIN",
      caption: "Minimum",
      displayFormat: "[[Minimum]] of {attr1}"
    },
    {
      id: "MAX",
      caption: "Maximum",
      displayFormat: "[[Maximum]] of {attr1}"
    }
  ]
};
