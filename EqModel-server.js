module.exports =  {
      "vers": "1",
      "id": "NWindSQL",
      "name": "",
      "desc": "",
      "easyQuery": {
          "version": "5.2.0.12",
          "token": "6R8QZO33G8B4Q586"
      },
      "operators": [{
              "id": "Equal",
              "cptn": "is equal to",
              "expr": "{expr1} = {expr2}",
              "fmt": "{expr1} [[is equal to]] {expr2}",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 2,
              "group": "Common operators",
              "cond": false,
              "dtypes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 16],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "NotEqual",
              "cptn": "is not equal to",
              "expr": "{expr1} <> {expr2}",
              "fmt": "{expr1} [[is not equal to]] {expr2}",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 2,
              "group": "Common operators",
              "cond": false,
              "dtypes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 16],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "LessThan",
              "cptn": "is less than",
              "expr": "{expr1} < {expr2}",
              "fmt": "{expr1} [[is less than]] {expr2}",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 2,
              "group": "Common operators",
              "cond": false,
              "dtypes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 16],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "LessOrEqual",
              "cptn": "is less than or equal to",
              "expr": "{expr1} <= {expr2}",
              "fmt": "{expr1} [[is less than or equal to]] {expr2}",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 2,
              "group": "Common operators",
              "cond": false,
              "dtypes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 16],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "GreaterThan",
              "cptn": "is greater than",
              "expr": "{expr1} > {expr2}",
              "fmt": "{expr1} [[is greater than]] {expr2}",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 2,
              "group": "Common operators",
              "cond": false,
              "dtypes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 16],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "GreaterOrEqual",
              "cptn": "is greater than or equal to",
              "expr": "{expr1} >= {expr2}",
              "fmt": "{expr1} [[is greater than or equal to]] {expr2}",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 2,
              "group": "Common operators",
              "cond": false,
              "dtypes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 16],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "IsNull",
              "cptn": "is null",
              "expr": "{expr1} IS NULL",
              "fmt": "{expr1} [[is null]]",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 1,
              "group": "Common operators",
              "cond": false,
              "dtypes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 16],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "IsNotNull",
              "cptn": "is not null",
              "expr": "{expr1} IS NOT NULL",
              "fmt": "{expr1} [[is not null]]",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 1,
              "group": "Common operators",
              "cond": false,
              "dtypes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 16],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "IsTrue",
              "cptn": "is true",
              "expr": "{expr1} = ${true}",
              "fmt": "{expr1} [[is true]]",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 1,
              "group": "Boolean operators",
              "cond": false,
              "dtypes": [6, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "NotTrue",
              "cptn": "is not true",
              "expr": "(({expr1} <> ${true}) OR ({expr1} IS NULL))",
              "fmt": "{expr1} [[is not true]]",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 1,
              "group": "Boolean operators",
              "cond": false,
              "dtypes": [6, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "InList",
              "cptn": "is in list",
              "expr": "{expr1} in ({expr2})",
              "fmt": "{expr1} [[is in list]] {expr2}",
              "cfmt": "{const}",
              "kind": 4,
              "pcnt": 2,
              "group": "Common operators",
              "cond": false,
              "dtypes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 16],
              "defOperand": {
                  "dtype": 0,
                  "kind": 4
              }
          }, {
              "id": "NotInList",
              "cptn": "is not in list",
              "expr": "NOT ({expr1} in ({expr2}))",
              "fmt": "{expr1} [[is not in list]] {expr2}",
              "cfmt": "{const}",
              "kind": 4,
              "pcnt": 2,
              "group": "Common operators",
              "cond": false,
              "dtypes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 16],
              "defOperand": {
                  "dtype": 0,
                  "kind": 4
              }
          }, {
              "id": "Between",
              "cptn": "is between",
              "expr": "{expr1} BETWEEN {expr2} AND {expr3}",
              "fmt": "{expr1} [[is between]] {expr2} and {expr3}",
              "cfmt": "{const}",
              "kind": 0,
              "isRange": true,
              "pcnt": 3,
              "group": "Common operators",
              "cond": false,
              "dtypes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 16],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "NotBetween",
              "cptn": "is not between",
              "expr": "NOT ({expr1} BETWEEN {expr2} AND {expr3})",
              "fmt": "{expr1} [[is not between]] {expr2} and {expr3}",
              "cfmt": "{const}",
              "kind": 0,
              "isRange": true,
              "pcnt": 3,
              "group": "Common operators",
              "cond": false,
              "dtypes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 16],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "StartsWith",
              "cptn": "starts with",
              "expr": "{expr1} LIKE {expr2}",
              "fmt": "{expr1} [[starts with]] {expr2}",
              "cfmt": "{const}{ws}",
              "kind": 0,
              "pcnt": 2,
              "editor": "_DTE",
              "group": "String operators",
              "cond": false,
              "dtypes": [1, 14, 16, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "NotStartsWith",
              "cptn": "does not start with",
              "expr": "NOT ({expr1} LIKE {expr2})",
              "fmt": "{expr1} [[does not start with]] {expr2}",
              "cfmt": "{const}{ws}",
              "kind": 0,
              "pcnt": 2,
              "editor": "_DTE",
              "group": "String operators",
              "cond": false,
              "dtypes": [1, 14, 16, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "Contains",
              "cptn": "contains",
              "expr": "{expr1} LIKE {expr2}",
              "fmt": "{expr1} [[contains]] {expr2}",
              "cfmt": "{ws}{const}{ws}",
              "kind": 0,
              "pcnt": 2,
              "editor": "_DTE",
              "group": "String operators",
              "cond": false,
              "dtypes": [1, 14, 16, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "NotContains",
              "cptn": "does not contain",
              "expr": "NOT ({expr1} LIKE {expr2})",
              "fmt": "{expr1} [[does not contain]] {expr2}",
              "cfmt": "{ws}{const}{ws}",
              "kind": 0,
              "pcnt": 2,
              "editor": "_DTE",
              "group": "String operators",
              "cond": false,
              "dtypes": [1, 14, 16, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "InSubQuery",
              "cptn": "in sub query",
              "expr": "{expr1} IN ({expr2})",
              "fmt": "{expr1} [[in sub query]] {expr2}",
              "cfmt": "{const}",
              "kind": 5,
              "pcnt": 2,
              "group": "Common operators",
              "cond": false,
              "dtypes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 16],
              "defOperand": {
                  "dtype": 0,
                  "kind": 5
              }
          }, {
              "id": "NotInSubQuery",
              "cptn": "not in sub query",
              "expr": "NOT ({expr1} IN ({expr2}))",
              "fmt": "{expr1} [[is not in sub query]] {expr2}",
              "cfmt": "{const}",
              "kind": 5,
              "pcnt": 2,
              "group": "Common operators",
              "cond": false,
              "dtypes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 16],
              "defOperand": {
                  "dtype": 0,
                  "kind": 5
              }
          }, {
              "id": "DateWithinToday",
              "cptn": "today",
              "expr": "${{Today}} <= {expr1} AND {expr1} < ${{Tomorrow}}",
              "fmt": "{expr1} [[within today]]",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 1,
              "group": "Date/time operators",
              "cond": false,
              "dtypes": [10, 11, 12, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "DateWithinThisWeek",
              "cptn": "this week",
              "expr": "${{FirstDayOfWeek}} <= {expr1} AND {expr1} < ${{FirstDayOfNextWeek}}",
              "fmt": "{expr1} [[within this week]]",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 1,
              "group": "Date/time operators",
              "cond": false,
              "dtypes": [10, 11, 12, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "DateWithinPrevWeek",
              "cptn": "last week",
              "expr": "${{FirstDayOfPrevWeek}} <= {expr1} AND {expr1} < ${{FirstDayOfWeek}}",
              "fmt": "{expr1} [[within last week]]",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 1,
              "group": "Date/time operators",
              "cond": false,
              "dtypes": [10, 11, 12, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "DateWithinThisMonth",
              "cptn": "this month",
              "expr": "${{FirstDayOfMonth}} <= {expr1} AND {expr1} < ${{FirstDayOfNextMonth}}",
              "fmt": "{expr1} [[within this month]]",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 1,
              "group": "Date/time operators",
              "cond": false,
              "dtypes": [10, 11, 12, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "DateWithinPrevMonth",
              "cptn": "previous month",
              "expr": "${{FirstDayOfPrevMonth}} <= {expr1} AND {expr1} < ${{FirstDayOfMonth}}",
              "fmt": "{expr1} [[within previous month]]",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 1,
              "group": "Date/time operators",
              "cond": false,
              "dtypes": [10, 11, 12, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "DateWithinThisYear",
              "cptn": "this year",
              "expr": "${{FirstDayOfYear}} <= {expr1} AND {expr1} < ${{FirstDayOfNextYear}}",
              "fmt": "{expr1} [[within this year]]",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 1,
              "group": "Date/time operators",
              "cond": false,
              "dtypes": [10, 11, 12, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "DateWithinPrevYear",
              "cptn": "last year",
              "expr": "${{FirstDayOfPrevYear}} <= {expr1} AND {expr1} < ${{FirstDayOfYear}}",
              "fmt": "{expr1} [[within last year]]",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 1,
              "group": "Date/time operators",
              "cond": false,
              "dtypes": [10, 11, 12, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0
              }
          }, {
              "id": "DateBeforePrecise",
              "cptn": "before",
              "expr": "{expr1} < {expr2}",
              "fmt": "{expr1} [[before]] {expr2}",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 2,
              "editor": "_DPDE",
              "group": "Date/time operators",
              "cond": false,
              "dtypes": [10, 11, 12, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0,
                  "val": "${Today}"
              }
          }, {
              "id": "DateAfterPrecise",
              "cptn": "after",
              "expr": "{expr1} >= {expr2}",
              "fmt": "{expr1} [[after]] {expr2}",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 2,
              "editor": "_DPDE",
              "group": "Date/time operators",
              "cond": false,
              "dtypes": [10, 11, 12, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0,
                  "val": "${Today}"
              }
          }, {
              "id": "DatePeriodPrecise",
              "cptn": "custom period",
              "expr": "{expr1} BETWEEN {expr2} AND {expr3}",
              "fmt": "{expr1} [[within]] {expr2} and {expr3}",
              "cfmt": "{const}",
              "kind": 0,
              "isRange": true,
              "pcnt": 3,
              "editor": "_DPDE",
              "group": "Date/time operators",
              "cond": false,
              "dtypes": [10, 11, 12, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0,
                  "val": "${Today}"
              },
              "operands": [{
                      "dtype": 0,
                      "kind": 0,
                      "defVal": "${FirstDayOfMonth}"
                  }, {
                      "dtype": 0,
                      "kind": 0,
                      "defVal": "${Today}"
                  }
              ]
          }, {
              "id": "TimeBeforePrecise",
              "cptn": "before",
              "expr": "{expr1} < {expr2}",
              "fmt": "{expr1} [[before]] {expr2}",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 2,
              "editor": "_DPTE",
              "group": "Date/time operators",
              "cond": false,
              "dtypes": [10, 11, 12, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0,
                  "val": "${Today}"
              }
          }, {
              "id": "TimeAfterPrecise",
              "cptn": "after",
              "expr": "{expr1} >= {expr2}",
              "fmt": "{expr1} [[after]] {expr2}",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 2,
              "editor": "_DPTE",
              "group": "Date/time operators",
              "cond": false,
              "dtypes": [10, 11, 12, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0,
                  "val": "${Today}"
              }
          }, {
              "id": "TimePeriodPrecise",
              "cptn": "between",
              "expr": "{expr1} BETWEEN {expr2} AND {expr3}",
              "fmt": "{expr1} [[between]] {expr2} and {expr3}",
              "cfmt": "{const}",
              "kind": 0,
              "isRange": true,
              "pcnt": 3,
              "editor": "_DPTE",
              "group": "Date/time operators",
              "cond": false,
              "dtypes": [10, 11, 12, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 0,
                  "val": "${Today}"
              },
              "operands": [{
                      "dtype": 0,
                      "kind": 0,
                      "defVal": "${HourStart}"
                  }, {
                      "dtype": 0,
                      "kind": 0,
                      "defVal": "${Now}"
                  }
              ]
          }, {
              "id": "MaximumOfAttr",
              "cptn": "is maximum of",
              "expr": "{expr1} = (SELECT MAX({expr2.field}) FROM {expr2.table})",
              "fmt": "{expr1} [[is equal to maximum of]] {expr2}",
              "cfmt": "{const}",
              "kind": 2,
              "pcnt": 2,
              "group": "Other operators",
              "cond": false,
              "dtypes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 16],
              "defOperand": {
                  "dtype": 0,
                  "kind": 2
              }
          }, {
              "id": "InRange",
              "cptn": "is in range",
              "expr": "{expr1} BETWEEN {expr2[0]} AND {expr2[1]}",
              "fmt": "{expr1} [[is in range]] {expr2}",
              "cfmt": "{const}",
              "kind": 4,
              "pcnt": 2,
              "group": "Other operators",
              "cond": false,
              "dtypes": [2, 3, 4, 5, 7],
              "defOperand": {
                  "dtype": 0,
                  "kind": 4
              }
          }, {
              "id": "LastNMonth",
              "cptn": "Last N months",
              "expr": "DATEDIFF(month, {expr1}, GETDATE()) < {expr2}",
              "fmt": "{expr1} [[within last]] {expr2} months",
              "cfmt": "{const}",
              "kind": 0,
              "pcnt": 2,
              "group": "Other operators",
              "cond": false,
              "dtypes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 16],
              "defOperand": {
                  "dtype": 4,
                  "kind": 0
              }
          }
      ],
      "aggrfuncs": [{
              "id": "SUM",
              "cptn": "Sum",
              "fmt": "[[Sum]] of {attr1}"
          }, {
              "id": "COUNT",
              "cptn": "Count",
              "fmt": "[[Count]] of {attr1}"
          }, {
              "id": "CNTDST",
              "cptn": "Distinct count",
              "fmt": "[[Distinct count]] of {attr1}"
          }, {
              "id": "AVG",
              "cptn": "Average",
              "fmt": "[[Average]] of {attr1}"
          }, {
              "id": "MIN",
              "cptn": "Minimum",
              "fmt": "[[Minimum]] of {attr1}"
          }, {
              "id": "MAX",
              "cptn": "Maximum",
              "fmt": "[[Maximum]] of {attr1}"
          }
      ],
      "editors": [{
              "tag": "EDIT",
              "id": "_DTE",
              "rtype": 1,
              "defval": ""
          }, {
              "tag": "DATETIME",
              "id": "_DPDE",
              "rtype": 0,
              "subType": 10
          }, {
              "tag": "DATETIME",
              "id": "_DPTE",
              "rtype": 0,
              "subType": 11
          }, {
              "tag": "SQLLIST",
              "id": "VE_Customer.Country",
              "rtype": 0
          }, {
              "tag": "SQLLIST",
              "id": "VE_Employee.Country",
              "rtype": 0
          }, {
              "tag": "SQLLIST",
              "id": "VE_Employee.ManagerEmployeeID",
              "rtype": 0
          }, {
              "tag": "SQLLIST",
              "id": "VE_Order.CustomerID",
              "rtype": 0
          }, {
              "tag": "SQLLIST",
              "id": "VE_Order.EmployeeId",
              "rtype": 0
          }, {
              "tag": "SQLLIST",
              "id": "VE_Order.ProductID",
              "rtype": 0
          }, {
              "tag": "SQLLIST",
              "id": "VE_OrderDetail.OrderID",
              "rtype": 0
          }, {
              "tag": "SQLLIST",
              "id": "VE_OrderDetail.ProductID",
              "rtype": 0
          }
      ],
      "entroot": {
          "uir": true,
          "uic": true,
          "uis": true,
          "attrs": [],
          "ents": [{
                  "id": "Customer",
                  "name": "Client",
                  "uir": true,
                  "uic": true,
                  "uis": true,
                  "attrs": [{
                          "id": "Customer.Address",
                          "cptn": "Address",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Customers.Address"
                      }, {
                          "id": "Customer.City",
                          "cptn": "City",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Customers.City"
                      }, {
                          "id": "Customer.CompanyName",
                          "cptn": "Company Name",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Customers.CompanyName"
                      }, {
                          "id": "Customer.ContactName",
                          "cptn": "Contact name",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Customers.ContactName"
                      }, {
                          "id": "Customer.ContactTitle",
                          "cptn": "Contact title",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Customers.ContactTitle"
                      }, {
                          "id": "Customer.Country",
                          "cptn": "Country",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "InList", "NotEqual", "NotInList", "IsNull"],
                          "edtr": "VE_Customer.Country",
                          "sql": "Customers.Country"
                      }, {
                          "id": "Customer.CustomerID",
                          "cptn": "Customer i d",
                          "dtype": 1,
                          "size": 0,
                          "uir": false,
                          "uic": false,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery"],
                          "sql": "Customers.CustomerID"
                      }, {
                          "id": "Customer.Fax",
                          "cptn": "Fax",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Customers.Fax"
                      }, {
                          "id": "Customer.Phone",
                          "cptn": "Phone",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Customers.Phone"
                      }, {
                          "id": "Customer.PostalCode",
                          "cptn": "Postal code",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Customers.PostalCode"
                      }, {
                          "id": "Customer.Region",
                          "cptn": "Region",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Customers.Region"
                      }
                  ]
              }, {
                  "id": "Employee",
                  "name": "Employee",
                  "uir": true,
                  "uic": true,
                  "uis": true,
                  "attrs": [{
                          "id": "Employee.Address",
                          "cptn": "Address",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Employees.Address"
                      }, {
                          "id": "Employee.BirthDate",
                          "cptn": "Birth date",
                          "dtype": 12,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["DateWithinToday", "DateWithinThisWeek", "DateWithinPrevWeek", "DateWithinThisMonth", "DateWithinPrevMonth", "DateWithinThisYear", "DateWithinPrevYear", "DateBeforePrecise", "DateAfterPrecise", "DatePeriodPrecise", "MaximumOfAttr", "IsNull", "IsNotNull"],
                          "sql": "Employees.BirthDate"
                      }, {
                          "id": "Employee.City",
                          "cptn": "City",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Employees.City"
                      }, {
                          "id": "Employee.Country",
                          "cptn": "Country",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "InList", "NotEqual", "NotInList", "IsNull"],
                          "edtr": "VE_Employee.Country",
                          "sql": "Employees.Country"
                      }, {
                          "id": "Employee.EmployeeID",
                          "cptn": "Employee i d",
                          "dtype": 4,
                          "size": 0,
                          "uir": false,
                          "uic": false,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "Between", "LessThan", "LessOrEqual", "GreaterThan", "GreaterOrEqual", "InList", "NotEqual", "NotBetween", "NotInList", "MaximumOfAttr", "InSubQuery", "NotInSubQuery"],
                          "sql": "Employees.EmployeeID"
                      }, {
                          "id": "Employee.Extension",
                          "cptn": "Extension",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Employees.Extension"
                      }, {
                          "id": "Employee.FirstName",
                          "cptn": "First name",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery"],
                          "sql": "Employees.FirstName"
                      }, {
                          "id": "Employee.HireDate",
                          "cptn": "Hire date",
                          "dtype": 12,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["DateWithinToday", "DateWithinThisWeek", "DateWithinPrevWeek", "DateWithinThisMonth", "DateWithinPrevMonth", "DateWithinThisYear", "DateWithinPrevYear", "DateBeforePrecise", "DateAfterPrecise", "DatePeriodPrecise", "MaximumOfAttr", "IsNull", "IsNotNull"],
                          "sql": "Employees.HireDate"
                      }, {
                          "id": "Employee.HomePhone",
                          "cptn": "Home phone",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Employees.HomePhone"
                      }, {
                          "id": "Employee.LastName",
                          "cptn": "Last name",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery"],
                          "sql": "Employees.LastName"
                      }, {
                          "id": "Employee.ManagerEmployeeID",
                          "cptn": "ManagerEmployee",
                          "dtype": 4,
                          "size": 0,
                          "uir": false,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "NotEqual", "InList", "NotInList", "IsNull", "IsNotNull"],
                          "edtr": "VE_Employee.ManagerEmployeeID",
                          "sql": "Employees.ManagerEmployeeID"
                      }, {
                          "id": "Employee.Notes",
                          "cptn": "Notes",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Employees.Notes"
                      }, {
                          "id": "Employee.Photo",
                          "cptn": "Photo",
                          "dtype": 0,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "Between", "LessThan", "LessOrEqual", "GreaterThan", "GreaterOrEqual", "InList", "NotEqual", "NotBetween", "NotInList", "MaximumOfAttr", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Employees.Photo"
                      }, {
                          "id": "Employee.PostalCode",
                          "cptn": "Postal code",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Employees.PostalCode"
                      }, {
                          "id": "Employee.Region",
                          "cptn": "Region",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Employees.Region"
                      }, {
                          "id": "Employee.ReportsTo",
                          "cptn": "Reports to",
                          "dtype": 4,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "Between", "LessThan", "LessOrEqual", "GreaterThan", "GreaterOrEqual", "InList", "NotEqual", "NotBetween", "NotInList", "MaximumOfAttr", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Employees.ReportsTo"
                      }, {
                          "id": "Employee.Title",
                          "cptn": "Title",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Employees.Title"
                      }
                  ]
              }, {
                  "id": "Order",
                  "name": "Order",
                  "uir": true,
                  "uic": true,
                  "uis": true,
                  "attrs": [{
                          "id": "Order.CustomerID",
                          "cptn": "Customer",
                          "dtype": 1,
                          "size": 0,
                          "uir": false,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "NotEqual", "InList", "NotInList", "IsNull", "IsNotNull"],
                          "edtr": "VE_Order.CustomerID",
                          "sql": "Orders.CustomerID"
                      }, {
                          "id": "Order.EmployeeID",
                          "cptn": "Employee",
                          "dtype": 4,
                          "size": 0,
                          "uir": false,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "NotEqual", "InList", "NotInList"],
                          "edtr": "VE_Order.EmployeeId",
                          "sql": "Orders.EmployeeID"
                      }, {
                          "id": "Order.Freight",
                          "cptn": "Freight",
                          "dtype": 8,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "Between", "LessThan", "LessOrEqual", "GreaterThan", "GreaterOrEqual", "InList", "NotEqual", "NotBetween", "NotInList", "MaximumOfAttr", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Orders.Freight"
                      }, {
                          "id": "Order.OrderID",
                          "cptn": "Order i d",
                          "dtype": 4,
                          "size": 0,
                          "uir": false,
                          "uic": false,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "Between", "LessThan", "LessOrEqual", "GreaterThan", "GreaterOrEqual", "InList", "NotEqual", "NotBetween", "NotInList", "MaximumOfAttr", "InSubQuery", "NotInSubQuery"],
                          "sql": "Orders.OrderID"
                      }, {
                          "id": "Order.OrderDate",
                          "cptn": "Ordered",
                          "dtype": 12,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["DateWithinToday", "DateWithinThisWeek", "DateWithinPrevWeek", "DateWithinThisMonth", "DateWithinPrevMonth", "DateWithinThisYear", "DateWithinPrevYear", "DateBeforePrecise", "DateAfterPrecise", "DatePeriodPrecise", "MaximumOfAttr", "IsNull", "IsNotNull"],
                          "sql": "Orders.OrderDate"
                      }, {
                          "id": "Order.RequiredDate",
                          "cptn": "Required",
                          "dtype": 12,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["DateWithinToday", "DateWithinThisWeek", "DateWithinPrevWeek", "DateWithinThisMonth", "DateWithinPrevMonth", "DateWithinThisYear", "DateWithinPrevYear", "DateBeforePrecise", "DateAfterPrecise", "DatePeriodPrecise", "MaximumOfAttr", "IsNull", "IsNotNull"],
                          "sql": "Orders.RequiredDate"
                      }, {
                          "id": "Order.ShipAddress",
                          "cptn": "Ship address",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Orders.ShipAddress"
                      }, {
                          "id": "Order.ShipCity",
                          "cptn": "Ship city",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Orders.ShipCity"
                      }, {
                          "id": "Order.ShipCountry",
                          "cptn": "Ship country",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Orders.ShipCountry"
                      }, {
                          "id": "Order.ShipName",
                          "cptn": "Ship name",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Orders.ShipName"
                      }, {
                          "id": "Order.ShipPostalCode",
                          "cptn": "Ship postal code",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Orders.ShipPostalCode"
                      }, {
                          "id": "Order.ShipRegion",
                          "cptn": "Ship region",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Orders.ShipRegion"
                      }, {
                          "id": "Order.ShipVia",
                          "cptn": "Ship via",
                          "dtype": 4,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "Between", "LessThan", "LessOrEqual", "GreaterThan", "GreaterOrEqual", "InList", "NotEqual", "NotBetween", "NotInList", "MaximumOfAttr", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Orders.ShipVia"
                      }, {
                          "id": "Order.ShippedDate",
                          "cptn": "Shipped",
                          "dtype": 12,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["DateWithinToday", "DateWithinThisWeek", "DateWithinPrevWeek", "DateWithinThisMonth", "DateWithinPrevMonth", "DateWithinThisYear", "DateWithinPrevYear", "DateBeforePrecise", "DateAfterPrecise", "DatePeriodPrecise", "MaximumOfAttr", "IsNull", "IsNotNull"],
                          "sql": "Orders.ShippedDate"
                      }
                  ]
              }, {
                  "id": "OrderDetail",
                  "name": "Order detail",
                  "uir": true,
                  "uic": true,
                  "uis": true,
                  "attrs": [{
                          "id": "OrderDetail.Discount",
                          "cptn": "Discount",
                          "dtype": 7,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "Between", "LessThan", "LessOrEqual", "GreaterThan", "GreaterOrEqual", "InList", "NotEqual", "NotBetween", "NotInList", "MaximumOfAttr", "InSubQuery", "NotInSubQuery"],
                          "sql": "Order_Details.Discount"
                      }, {
                          "id": "OrderDetail.OrderID",
                          "cptn": "Order",
                          "dtype": 4,
                          "size": 0,
                          "uir": false,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "NotEqual", "InList", "NotInList"],
                          "edtr": "VE_OrderDetail.OrderID",
                          "sql": "Order_Details.OrderID"
                      }, {
                          "id": "OrderDetail.ProductID",
                          "cptn": "Product",
                          "dtype": 4,
                          "size": 0,
                          "uir": false,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "NotEqual", "InList", "NotInList"],
                          "edtr": "VE_OrderDetail.ProductID",
                          "sql": "Order_Details.ProductID"
                      }, {
                          "id": "OrderDetail.Quantity",
                          "cptn": "Quantity",
                          "dtype": 3,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "Between", "LessThan", "LessOrEqual", "GreaterThan", "GreaterOrEqual", "InList", "NotEqual", "NotBetween", "NotInList", "MaximumOfAttr", "InSubQuery", "NotInSubQuery"],
                          "sql": "Order_Details.Quantity"
                      }, {
                          "id": "OrderDetail.UnitPrice",
                          "cptn": "Unit price",
                          "dtype": 8,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "Between", "LessThan", "LessOrEqual", "GreaterThan", "GreaterOrEqual", "InList", "NotEqual", "NotBetween", "NotInList", "MaximumOfAttr", "InSubQuery", "NotInSubQuery"],
                          "sql": "Order_Details.UnitPrice"
                      }
                  ]
              }, {
                  "id": "Product",
                  "name": "Product",
                  "uir": true,
                  "uic": true,
                  "uis": true,
                  "attrs": [{
                          "id": "Product.Discontinued",
                          "cptn": "Discontinued",
                          "dtype": 6,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["IsTrue", "NotTrue"],
                          "sql": "Products.Discontinued"
                      }, {
                          "id": "Product.ProductName",
                          "cptn": "Name",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Products.ProductName"
                      }, {
                          "id": "Product.ProductID",
                          "cptn": "Product i d",
                          "dtype": 4,
                          "size": 0,
                          "uir": false,
                          "uic": false,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "Between", "LessThan", "LessOrEqual", "GreaterThan", "GreaterOrEqual", "InList", "NotEqual", "NotBetween", "NotInList", "MaximumOfAttr", "InSubQuery", "NotInSubQuery"],
                          "sql": "Products.ProductID"
                      }, {
                          "id": "Product.QuantityPerUnit",
                          "cptn": "Quantity per unit",
                          "dtype": 1,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["StartsWith", "Contains", "Equal", "InList", "NotStartsWith", "NotContains", "NotEqual", "NotInList", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Products.QuantityPerUnit"
                      }, {
                          "id": "Product.ReorderLevel",
                          "cptn": "Reorder level",
                          "dtype": 3,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "Between", "LessThan", "LessOrEqual", "GreaterThan", "GreaterOrEqual", "InList", "NotEqual", "NotBetween", "NotInList", "MaximumOfAttr", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Products.ReorderLevel"
                      }, {
                          "id": "Product.SupplierID",
                          "cptn": "Supplier ID",
                          "dtype": 4,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "Between", "LessThan", "LessOrEqual", "GreaterThan", "GreaterOrEqual", "InList", "NotEqual", "NotBetween", "NotInList", "MaximumOfAttr", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Products.SupplierID"
                      }, {
                          "id": "Product.UnitPrice",
                          "cptn": "Unit price",
                          "dtype": 8,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "Between", "LessThan", "LessOrEqual", "GreaterThan", "GreaterOrEqual", "InList", "NotEqual", "NotBetween", "NotInList", "MaximumOfAttr", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Products.UnitPrice"
                      }, {
                          "id": "Product.UnitsInStock",
                          "cptn": "Units in stock",
                          "dtype": 3,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "Between", "LessThan", "LessOrEqual", "GreaterThan", "GreaterOrEqual", "InList", "NotEqual", "NotBetween", "NotInList", "MaximumOfAttr", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Products.UnitsInStock"
                      }, {
                          "id": "Product.UnitsOnOrder",
                          "cptn": "Units on order",
                          "dtype": 3,
                          "size": 0,
                          "uir": true,
                          "uic": true,
                          "uis": true,
                          "opg": 99,
                          "ops": ["Equal", "Between", "LessThan", "LessOrEqual", "GreaterThan", "GreaterOrEqual", "InList", "NotEqual", "NotBetween", "NotInList", "MaximumOfAttr", "InSubQuery", "NotInSubQuery", "IsNull", "IsNotNull"],
                          "sql": "Products.UnitsOnOrder"
                      }
                  ]
              }
          ]
      }
  }
