// db.c.find({category: "music"}, {name: 1, number_comp: 1}).sort({number_comp: -1}).limit(3)
// .sort resive un objeto que se le aplica -1 o 1 si que sirgnifica el orden desendente o ascendente
// .limit resive el numero de documentos a devolver (ayuda al performanse de db)
// .find({filter}, {opcion})
// opcion resive un objeto que filtra el resultado para que no devuelva toda la info
// ideal para documentos grandes con mucha info

/* db.sales.findOne() 
{
  _id: ObjectId('5bd761dcae323e45a93ccfe8'),
  saleDate: ISODate('2015-03-23T21:06:49.506Z'),
  items: [
    {
      name: 'printer paper',
      tags: [ 'office', 'stationary' ],
      price: Decimal128('40.01'),
      quantity: 2
    },
    {
      name: 'notepad',
      tags: [ 'office', 'writing', 'school' ],
      price: Decimal128('35.29'),
      quantity: 2
    },
    {
      name: 'pens',
      tags: [ 'writing', 'office', 'school', 'stationary' ],
      price: Decimal128('56.12'),
      quantity: 5
    },
    {
      name: 'backpack',
      tags: [ 'school', 'travel', 'kids' ],
      price: Decimal128('77.71'),
      quantity: 2
    },
    {
      name: 'notepad',
      tags: [ 'office', 'writing', 'school' ],
      price: Decimal128('18.47'),
      quantity: 2
    },
    {
      name: 'envelopes',
      tags: [ 'stationary', 'office', 'general' ],
      price: Decimal128('19.95'),
      quantity: 8
    },
    {
      name: 'envelopes',
      tags: [ 'stationary', 'office', 'general' ],
      price: Decimal128('8.08'),
      quantity: 3
    },
    {
      name: 'binder',
      tags: [ 'school', 'general', 'organization' ],
      price: Decimal128('14.16'),
      quantity: 3
    }
  ],
  storeLocation: 'Denver',
  customer: { gender: 'M', age: 42, email: 'cauho@witwuta.sv', satisfaction: 4 },
  couponUsed: true,
  purchaseMethod: 'Online'
}

db.sales.find({couponUsed: true},{couponUsed:1, saleDate: 1}).sort({saleDate: 1})
db.sales.find({storeLocation: "London"},{saleDate:1}).sort({saleDate:1}).limit(3)
*/