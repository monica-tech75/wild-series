const AbstractSeeder = require("./AbstractSeeder");


class CategorySeeder extends AbstractSeeder {
  constructor() {
    // call the constructor of the parent class (AbstractSeeder)

    super({ table: "category", truncate: true });
  }

  run() {
    const categories = [{ name: "Comédie" }, { name: "Science-Fiction" }, { name: "Horror" }, { name: "Adventure" }];

    categories.forEach((category) => {
      // insert into category(name) values (?)
      const categoryWithRefName = {
        ...category,
        refName: `category_${category.name}`,
      };

      this.insert(categoryWithRefName); // insert into category(name) values (?)

    });
  }
}

// Export the categorySeeder class
module.exports = CategorySeeder;