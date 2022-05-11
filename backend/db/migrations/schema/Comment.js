// lets create our schema
const commentSchema = (table) =>{
    table.uuid("id").primary().unique();
    table.uuid("post_id").references("id").inTable("post").notNullable();
    table.uuid("user_id").references("id").inTable("user").notNullable();
    table.string("comment").notNullable();

}

module.exports = commentSchema;