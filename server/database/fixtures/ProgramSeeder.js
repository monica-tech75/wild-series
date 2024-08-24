const AbstractSeeder = require("./AbstractSeeder");
const CategorySeeder = require("./CategorySeeder");

class ProgramSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "program", truncate: true, dependencies: [CategorySeeder] });
  }

  run() {
    const programs = [
      {
        title: "The Good Place",
        synopsis:
          "À sa mort, Eleanor Shellstrop est envoyée au Bon Endroit, un paradis fantaisiste réservé aux individus exceptionnellement bienveillants. Or Eleanor n'est pas exactement une « bonne personne » et comprend vite qu'il y a eu erreur sur la personne. Avec l'aide de Chidi, sa prétendue âme sœur dans l'au-delà, la jeune femme est bien décidée à se redécouvrir.",
        poster:
          "https://img.betaseries.com/JwRqyGD3f9KvO_OlfIXHZUA3Ypw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F94857341d71c795c69b9e5b23c4bf3e7.jpg",
        country: "USA",
        year: 2016,
        category_id: this.getRef("category_Comédie").insertId,
      },
      {
        title: "End Of Days",
        synopsis:
          "",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVCV_xIuYdNVSVzDzt-HrOAjFWTOyESyi7UDdtkZOaEOLQhzGVo1pEa_vXXZl9Jn73t0&usqp=CAU",
        country: "United State",
        year: 2020,
        category_id: this.getRef("category_Horror").insertId,

      },
      {
        title: "100",
        synopsis:
          "",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pN4Kr0_c9Mt4kgfALQyPn9eICXM-vESWYB9jCGFn1AeeNpTAHdnmbM7D9rqcVJycpbg&usqp=CAU",
        country: "Spain",
        year: 2016,
        category_id: this.getRef("category_Adventure").insertId,

      },
    ];

    programs.forEach((program) => {
      this.insert(program); // insert into program(title, synopsis, poster, country, year, category_id) values (?, ?, ?, ?, ?, ?)
    });
  }
}

// Export the ProgramSeeder class
module.exports = ProgramSeeder;