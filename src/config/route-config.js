module.exports = {
  init(app){ //loads defined routes and defines them on the Express app object
    const staticRoutes = require("../routes/static");
    app.use(staticRoutes);
  }
}
