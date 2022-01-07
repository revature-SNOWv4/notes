## ACID Properties

Any amount of DML statements before a COMMIT statement is considered a **transaction**. After the COMMIT is done, the transaction should follow certain properties. Transactions are considered to be logical units of work - for example, transferring money from Person A's bank account to Person B's account. You should think about how to logically group your DML operations into transactions when writing code.

A transaction has 4 properties termed as [ACID](https://en.wikipedia.org/wiki/ACID) Properties:

* **A**tomicity - Atomicity means that either all of the transactions will execute successfully or none of them will.
* **C**onsistency - Consistency means that constraints are enforced for every committed transaction. That indicates that all Keys, Data types, Checks, and Triggers are successful and no constraint violation is triggered.
* **I**solation - If two transactions are executing concurrently and working on the same data, then one transaction should not disturb the other transaction. Isolation guarantees that concurrently running transactions should not affect each other.
* **D**urability - Durability means that once a transaction is complete, it guarantees that all of the changes are recorded in the database. If our system is suddenly affected by a system crash or a power outage, then all unfinished committed transactions may be replayed.

> In other words,
> 
> The properties of transactions should be as follows:
> 
> * **ATOMIC** - "All or nothing", if any statement on the transaction fails, the whole transaction fails.
> * **CONSISTENT** - If the database was in a consistent state before the transaction, it should be after it.
> * **ISOLATED** - One transaction shouldn't affect other transactions. It can be applied in different levels.
> * **DURABLE** - Persisted data should be saved permanently, even in the case of power loss or catastrophic software or hardware failure.
>   * Some RDBMS's have different approaches, even to recover from catastrophes (Oracle has special logs [Bitacora]).

### Isolation Levels

[Isolation](https://en.wikipedia.org/wiki/Isolation_(database_systems)) levels are applied in RDBMS to provide consistency and avoid certain read phenomena. The following isolation levels are presented from most to least isolated:

* Serializable
  * Allowed in Oracle
  * Read/Write locks
  * Applies range locks even in the WHERE clauses of a select statement
  * Phantom reads can't happen because of this
  * Table that is being read can't be modified until the reading is done (no INSERTS, no UPDATES, no DELETES)
* Repeatable Reads
  * Not used often
  * Read/Write locks
  * Doesn't provide range locks, that means phantom reads can happen
  * Doesn't lock the whole SELECT statement, nor INSERTS, nor UPDATES, nor DELETS
* Read Committed
  * Oracle default
  * Write only locks
  * Only data that is committed will be seen by other transactions
  * Dirty reads can't happen, but Phantom reads can
  * This is why it is recommended to not perform very long transactions
* Read Uncommitted
  * A disaster
  * Dirty reads are normal, any transaction can see any uncommitted data
  * Very inconsistent

## Read Phenomena

* Dirty Read: reading data that is uncommitted
* Non-repeatable read: when a row is read twice in a transaction and the values are different
* Phantom Read: reading data that is being added or modified by a running transaction