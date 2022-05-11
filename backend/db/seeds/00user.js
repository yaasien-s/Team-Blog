// what seeding does it first clear a database(if using an existing database) and then adds in the entery you insert
const {v4} = require('uuid')

exports.seed = (knex) => {
  //   Inserts seed entries
  return knex("user").insert([
    {
      id: "9d017703-7d71-4695-86a1-bb8e424d299a",
      name: "admin",
      email: "admin@gmail.com",
      password: 1234,
      img: "",
      isAdmin: true,
    },
  ]);
};
