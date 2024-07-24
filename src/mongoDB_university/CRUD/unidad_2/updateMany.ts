/* db.books.updateMany(
  { publishedDate: { $lt: new Date("2019-01-01") } },
  { $set: { status: "LEGACY" } }
) */

/* db.birds.updateMany(
  {common_name: { $in :["Grackle", "Blue Jay"]}},
  {$set: {last_seen : new Date("2022-01-01")}}
) 
 from db university:
db.birds.updateMany(
{
  common_name: {
    $in: ["Blue Jay", "Grackle"],
  },
},
{
  $set: {
    last_seen: ISODate("2022-01-01"),
  },
}
)  

*/