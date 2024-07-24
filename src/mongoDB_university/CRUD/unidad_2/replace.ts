// replaceOne()
// db.collection.replaceOne(filter, replacement, options)

// exaple sintax:
/*  db.books.replaceOne(
  { _id: ObjectId("623jlkdfal3234l23jlkjd8") },
  {
    title: "Deep Dive into React Hooks",
    ISBN: "0-3182-1299-4",
    thumbnailUrl: "http://via.placeholder.com/640x360",
    authors: ["Ada Lovelace"],
  })
*/

// this shoud return that object:
/* 
{
  acknowleadged:true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
*/


// from mongodb university:
/* db.books.replaceOne(
  {
    _id: ObjectId("6282afeb441a74a98dbbec4e"),
  },
  {
    title: "Data Science Fundamentals for Python and MongoDB",
    isbn: "1484235967",
    publishedDate: new Date("2018-5-10"),
    thumbnailUrl:
      "https://m.media-amazon.com/images/I/71opmUBc2wL._AC_UY218_.jpg",
    authors: ["David Paper"],
    categories: ["Data Science"],
  })
 */

/*
db.birds.findOne({"common_name": "Northern Cardinal"})

db.birds.replaceOne(
  { _id: ObjectId('6286809e2f3fa87b7d86dccd')},
  {
  "common_name": "Morning Dove",
  "scientific_name": "Zenaida macroura",
  "wingspan_cm": 37.23,
  "habitat": ["urban areas", "farms", "grassland"],
  "diet": ["seeds"],
})

*/