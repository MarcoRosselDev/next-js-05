//  findAndModify( query, update, new:boolean)    // new: true --> retorna el objeto modificado
/* db.podcasts.findAndModify({
  query: {_id: ObjectId("sdf729323ih23ih23421")},
  update: { $inc: { dowloadeds: 1 }},
  new:true
}) */

/* 
db.birds.findAndModify({
  query: {common_name: "Blue Jay"},
  update: { $inc :{ sightings_count:1}},
  new:true
})
*/