const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;

describe("Topic", () => {
  beforeEach((done) => {
    this.topic;
    this.post;
    sequelize.sync({force: true}).then((res) => {

      Topic.create({
        title: "Expeditions to Alpha Centauri",
        description: "A compilation of reports from recent visits to the star system."
      })
      .then((topic) => {
        this.topic = topic;

        Post.create({
          title: "My first visit to Proxima Centauri b",
          body: "I saw some rocks.",

          topicId: this.topic.id
        })
        .then((post) => {
          this.post = post;
          done();
        });
      });
    });
  });


// For the create method,
// test that when calling Topic.create with valid arguments,
// that a topic object is created and stored in the database.
  describe("#create()", () => {
    it("should create a topic object with a title and a body", (done) => {
      Topic.create({
        title: "Topic Title 1",
        body: "This topic has many posts",
      })
      .then((topic) => {
        expect(topic.title).toBe("Topic Title 1");
        expect(topic.body).toBe("This topic has many posts");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

    it("should not create a topic with missing title or body", (done) => {
      Topic.create({
        title: "Topic Title 1"
      })
      .then((topic) => {
        done();
      })
      .catch((err) => {
        expect(err.message).toContain("Topic.body cannot be null");
        done();
      })
    })
  });



});
