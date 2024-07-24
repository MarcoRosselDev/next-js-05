// updateOne()    Update operators: $set and $push
// db.collection.updateOne(  filter, update, options  )

// $set operator:   adds new fields and values to a document
//                  replace the value of a field with a specified value

// $push operator:  Appends(añade / agrega) a value to an array
//                  If absent, $push adds the array field with the value as its element

// set ideal para crear un nuevo [key, value] al documento
// push ideal para agregar info a un [key, value] y si no existe la key la crea
// notece que push agrega no reemplasa los values existentes

// push example:
/* db.podcasts.updateOne(
  { _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8") },
  { $push: { hosts: "Nic Raboy" } }
) */

// upsert si queremos crear un docuemnto si el match no coinside con nada
/* db.podcasts.updateOne(
  { title: "The Developer Hub" },
  { $set: { topics: ["databases", "MongoDB"] } },
  { upsert: true }
) */

// set si el key no existe:
/* db.podcasts.updateOne(
  { _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8")},
  { $set: {subscribers: 98562}}) 
*/