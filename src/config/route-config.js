module.exports = {
  init(app){ //loads defined routes and defines them on the Express app object
    const staticRoutes = require("../routes/static");
    const topicRoutes = require("../routes/topics");

    app.use(staticRoutes);
    app.use(topicRoutes);
  }
}
