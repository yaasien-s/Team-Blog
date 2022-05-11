// what seeding does it first clear a database(if using an existing database) and then adds in the entery you insert
const { v4 } = require("uuid");

exports.seed = (knex) => {
  //   Inserts seed entries
  return knex("comment").insert([
    {
      id: v4(),
      user_id: "9d017703-7d71-4695-86a1-bb8e424d299a",
      post_id: "da222dcb-dfd1-4e71-8576-d476cce1a2a1",
      comment: "Sport is bad",
    },
  ]);
};
