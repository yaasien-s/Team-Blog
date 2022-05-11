// lets create our schema
const userSchema = (table) => {
  table.uuid("id").primary().unique();
  table.string("name").notNullable();
  table.string("email").notNullable();
  table.string("password").notNullable();
  table
    .string("img")
    .defaultTo(
      "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
    );
  table.boolean("isAdmin").defaultTo(false);
};

module.exports = userSchema;

