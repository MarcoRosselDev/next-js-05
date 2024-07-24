// $and y $or
// db.<collection>.find({ $and: [ {<expresion>}, {<expresion>}, ... ]})

// de forma implisita por defecto:
// .find({<expression>,<expression>,...})

// or es lo mismo pero con or
// tmbn se pueden convinar:
/* db.routes.find({
  $and: [
    { $or: [{"dst_ariport": "SEA"}, {"src_airport" : "SEA"}]},
    { $or: [{"airline": "American Arilines"}, {"airplane": 320}]}
  ]
})
*/

// no podemos preguntar dos or seguidos, en ese caso se aplica and

/* 
db.sales.find({
  $and: [
    {purchaseMethod: 'Online'},
    {couponUsed: true},
    {"customer.age": {$gte: 25}}
  ]
})
*/