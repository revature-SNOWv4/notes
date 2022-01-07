## Module - Intro to SQL

This module covers SQL at a high level, introducing the important concepts needed for working with relational databases.

### Helpful References
* [SQL Fiddle](http://sqlfiddle.com/)
* [SQL Bolt](https://sqlbolt.com/)
* [SQL Zoo](http://sqlzoo.net/wiki/SQL_Tutorial)
* [Oracle documentation](https://docs.oracle.com/en/database/)
* [MySQL](https://dev.mysql.com/doc/)
* [Postgres](https://www.postgresql.org/docs/)

### Background

SQL stands for **Structured Query Language** - it is a domain-specific language for working with certain databases called relational databases. SQL is not a programming language, although there are extensions to the specification like PL/SQL that add familiar programming constructs. Instead, it is an English-like syntax that lets developers and database administrators abstract away the process of manipulating data and focus on the *WHAT* instead of *HOW* in the database.

Before we understand more about SQL, we need to understand what a relational database is. A relational database is a type of database that stores information in tables - that is, the data is stored in rows and columns, similar to a spreadsheet. Each row in the table is a record, and each record has properties which correspond to the different columns in the table. In order to provide a way for external entities to manipulate the database, we use a special kind of software called a relational database management system, or RDBMS. There are many different providers of vendors of RDBMS systems, including:
* Oracle
* PostgreSQL (or just "Postgres")
* MySQL
* Microsoft SQLServer
* Microsoft Access

Relational databases are often contrasted with another category of databases - non-relational databases. We won't go into the details of non-relational databases here, but you should be aware that there are major differences. Nonrelational databases do not store data within tables that relate to each other, and thus do not use SQL to interact with the databse.

RDBMS systems are one of the key components of any enterprise application or system. Why is this the case? Think about it - data by itself doesn’t mean a lot or even have intrinsic value. A lot of data thrown in a bucket would it mean be meaningless unless some kind of processing and analysis was done on it. Related data is what provides meaning and organizes the structure of data. For example, “an employee is in one or more departments”. We might have one table to store employees and another to store departments, and then define some relationship between them.

Normally, relational databases are used in an OLTP (OnLine Transaction Processing) environment, which means that the idea of having related data is preferable in a very transactional system, and that are normally row-based.

For non-transactional environments, the counter part is OLAP (OnLine Analytic Processing) systems, which are normally columnar-based, which is faster for reading but slower for manipulation.

### Data Types

When defining the properties of an entity in the database (i.e. the columns), you must specify the data type to store. Common SQL datatypes include:

#### Numeric
- BIT
- TINYINT
- BIGINT
- DECIMAL
- NUMERIC
- FLOAT
- REAL

#### Date/Time
- DATE
- TIMESTAMP
- DATETIME
- TIME
- YEAR

#### Character/String
- CHAR
- NCHAR
- VARCHAR
- NVARCHAR
- NTEXT

#### Binary
- BINARY
- VARBINARY
- IMAGE

#### Miscellaneous
- CLOB
- BLOB
- XML
- JSON

Each database vendor may support their own data types, or not support some of the ones listed above. Refer to the specific vendor documentation for more information.

### Conventions

SQL is a case-insensitive language, but the convention is to use UPPERCASE to refer to SQL keywords and lowercase for non-SQL specific entities (like table or column names). This helps distinguish between SQL keywords and other words. Also, for readability purposes we should split long commands or queries into multiple lines.

For example, this:

```
SELECT * FROM table1
LEFT JOIN table2 ON table1.a = table2.b
WHERE table1.x < 5
AND table2.y > 8
ORDER BY table1.a DESC
```

is much more readable than:

```
SELECT * FROM table1 LEFT JOIN table2 ON table1.a = table2.b WHERE table1.x < 5 AND table2.y > 8 ORDER BY table1.a DESC
```