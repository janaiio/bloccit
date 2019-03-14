const Topic = require("./models").Topic;

module.exports = {
  getAllTopics(callback){
    return Topic.all() //returns all records of the topics table

    .then((topics) => {
      callback(null, topics);
    })
    .catch((err) => {
      callback(err);
    })
  }
}