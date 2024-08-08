const AbstractRepository = require("./AbstractRepository");

class programRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "category" as configuration
    super({ table: "program" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all programs from the "program" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of categories
    return rows;
  }
}

module.exports = programRepository;