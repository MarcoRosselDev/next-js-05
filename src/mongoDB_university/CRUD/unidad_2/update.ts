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

/* 
db.birds.findOne({"common_name": "Canada Goose"})

db.birds.updateOne(
  {_id: ObjectId('6268413c613e55b82d7065d2')},
  { $set: {tags: ["geese", "herbivore", "migration"]}})

db.birds.findOne({_id: ObjectId("6268471e613e55b82d7065d7")})

{
  _id: ObjectId('6268471e613e55b82d7065d7'),
  common_name: 'Great Horned Owl',
  scientific_name: 'Bubo virginianus',
  wingspan_cm: 111.76,
  habitat: [ 'grasslands', 'farmland', 'tall forest' ],
  diet: [ 'mice', 'small mammals', 'rabbits', 'shrews' ],
  last_seen: ISODate('2022-05-19T20:20:44.083Z')
}

db.birds.updateOne(
  {_id:ObjectId('6268471e613e55b82d7065d7')},
  { $push: {diet: {$each: ["newts", "opossum", "skunks", "squirrels"]}}}
)
*/

/* 
db.birds.updateOne(
  {"common_name": "Robin Redbreast"},
  {
  $inc: {"sightings": 1},
  $set: {last_updated: new Date()}},
  {upsert: true})
*/