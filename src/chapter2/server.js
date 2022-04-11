const { app, port } = require("./app");

const server = app.listen(port, () => {
  console.log(`App listening on port ${port} `);
});

module.exports = {
  server,
};
