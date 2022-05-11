// lets create our schema
const postSchema = (table) => {
  table.uuid("id").primary().unique();
  table.uuid("user_id").references("id").inTable("user").notNullable();
  table.string("name").notNullable();
  table.string("category").notNullable()
  table.string("text").notNullable();
  table.string("img").notNullable();
  table.integer("likecounter");
  table.integer("dislikecounter");
};

module.exports = postSchema;
