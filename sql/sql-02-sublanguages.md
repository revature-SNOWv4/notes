Module - SQL Sublanguages
This module covers the sublanguages of SQL - DDL, DML, DQL, DCL, and TCL.

Helpful References

Overview
All SQL statements are separated into different sub categories, also known as sub-languages. There are 5 sublanguages of SQL in total:

DDL - data definition language
DML - data manipulation language
DQL - data query language
DCL - data control language
TCL - transaction control language

We will also cover scalar and aggregate functions here, which related to database queries.

DDL
Data Definition Language statements are utilized to define the database schema or skeleton. It is how we implement the design structure of it. Some of the keywords in this sublanguage are:

CREATE, to create new objects or tables.


CREATE TABLE TABLE_NAME (C_NAME C_TYPE C_SYZE [NULL | NOT NULL], [CONSTRAINT])

ALTER, to modify existing objects or tables.


ALTER TABLE TABLE_NAME [ADD | MODIFY | DROP] C_NAME
ALTER USER IDENTIFIED BY PASSWORD

DROP, to delete existing objects or tables.


DROP TABLE TABLE_NAME [CASCADE]

TRUNCATE, to delete all the data existing within a table leaving the skeleton of the table only.


TRUNCATE TABLE_NAME
This is similar to performing DELETE TABLE with no where clause, the key difference is that TRUNCATE commits at the end of the operation.
All DDL operations cannot be rolled back, which means that any change made by these are permanent.

DML
Data Manipulation Language statements are used to perform CRUD operations on the actual data. Operations are normally performed by row in a relational database.

INSERT, to insert a new row into a table.


INSERT INTO TABLE_NAME VALUES (V1, V2, ..., VN)
INSERT INTO TABLE_NAME (C1, C2, C3) VALUES (V1, V2, V3)

UPDATE, to update one or more rows column values of a table that match a specific WHERE clause.


UPDATE TABLE_NAME SET C1 = V1, ... , CN = VN WHERE X = Y

DELETE, to delete one or more rows of a table that match a specific WHERE clause.


DELETE TABLE_NAME WHERE [condition]

SELECT, to obtain one or more rows of a table that match a specific WHERE clause. In ORACLE databases this one is considered DML. This is how we perform queries in a database.


SELECT C1, ..., CN FROM TABLE_NAME [table] WHERE [condition] GROUP BY [expression]
HAVING [condition] ORDER BY table.field

DCL
Data Control Language statements are used to manage the security and control of database systems.

GRANT, to grant any permissions to an existing user.


GRANT PERMISSION TO USERNAME

REVOKE, to revoke any permissions of an existing user.


REVOKE PERMISSION TO USERNAME

TCL
Transaction Control Language statements are utilized to manage transactions within a relational database.

COMMIT, any DML operations that were executed before the statements will be persisted permanently.
ROLLBACK, any DML operations between two COMMIT statements will be completely erased (something like Ctrl + Z that will stop only when it reaches last time you opened the specific file). Committed transactions cannot be rollbacked.
SAVEPOINT, utilized to ROLLBACK to a specific point in time.

The general flow of using TCL could be as follows:

[Many DML Operations]
SAVEPOINT A
[Many DML Operations]
ROLLBACK TO A

DQL
Data Query Language, not really a sub-language within Oracle databases, is the sub language where only the SELECT statement exists. Remember, in Oracle the SELECT statement is considered as DML, but DQL could be an interview question.

DQL Clauses
GROUP BY & HAVING
The GROUP BY clause will combine all rows by a column specified in a query and perform any aggregate functions which are stated.

SELECT NAME, COUNT(NAME) FROM STUDENT GROUP BY (NAME)

The HAVING clause will pass another filter similar to the WHERE clause after everything has been filtered and grouped.

SELECT NAME, COUNT(NAME) FROM STUDENT GROUP BY (NAME) HAVING COUNT(NAME) > 5;

If you try to perform this HAVING clause in a WHERE clause, a SQL error will be thrown, and it makes sense - the RDBMS doesn't want you to perform an aggregate function combining all rows, per each row. It's a performance safety measure.

Scalar Functions
Scalar functions operate on individual values and will perform some operation per row, and can be used in the SELECT or WHERE clause.

TO_CHAR(DATE,'DATE_FORMAT')
TO_DATE(DATE,'DATE_FORMAT')
UPPER('VALUE')
LOWER('VALUE')

To write them in a query:

SELECT UPPER(NAME) FROM STUDENT;
SELECT NAME FROM STUDENT WHERE UPPER(NAME) LIKE 'P%'. 

Aggregate Functions
Aggregate functions operate on multiple values (multiple rows). These functions are used to combine (aggregate) the values existing in one column.

MAX(COLUMN), which returns the max value on a column.
MIN(COLUMN), which returns the minimum value on a column.
AVG(COLUMN), which returns the average value of the column.
SUM(COLUMN), which returns the sum of the column.
COUNT(COLUMN), which returns the count of elements in a column.
And many others.

These functions are used in the SELECT clause. They can't be used in the WHERE clause.
If there is more than one column being selected in the SELECT column section of a query which is not aggregating, a GROUP BY clause is required.
In order to perform similar WHERE clause Boolean operations with aggregate functions, the HAVING clause can be used.