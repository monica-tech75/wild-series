// Declare the action

const sayWelcome = (req, res) => {
  console.info(req.query)
  res.send(`Welcome wild Series, ${req.query.name} !`);
};

// Export it to import it somewhere else

module.exports = { sayWelcome };