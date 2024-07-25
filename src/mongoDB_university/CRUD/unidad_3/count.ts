// db.t.countDocuments({spes: {$gt:120}})
// solo retora un numero con el conteo de lo filtrado

/* 1. Find the total number of documents in the sales collection.(Forgot the command? Check the hint below!) 

db.sales.findOne()
db.sales.countDocuments() ---> 5000

2. Find the number of sales made using a coupon at the Denver location.(Forgot the command? Check the hint below!)

db.sales.countDocuments({storeLocation: 'Denver', couponUsed: true}) ---> 157

3. Find the number of sales that included a laptop that cost less than $600.(Forgot the command? Check the hint below!)

db.sales.countDocuments({"items.name": "laptop", "items.price": {$lt: Decimal128('600.00')}}) ---- mal

db.sales.countDocuments({ items: { $elemMatch: { name: "laptop", price: { $lt: 600 }}}})

[
  {
    _id: ObjectId('5bd761dcae323e45a93ccfe9'),
    saleDate: ISODate('2015-08-25T10:01:02.918Z'),
    items: [
      {
        name: 'envelopes',
        tags: [ 'stationary', 'office', 'general' ],
        price: Decimal128('8.05'),
        quantity: 10
      },
      {
        name: 'binder',
        tags: [ 'school', 'general', 'organization' ],
        price: Decimal128('28.31'),
        quantity: 9
      },
      {
        name: 'notepad',
        tags: [ 'office', 'writing', 'school' ],
        price: Decimal128('20.95'),
        quantity: 3
      },
      {
        name: 'laptop',
        tags: [ 'electronics', 'school', 'office' ],
        price: Decimal128('866.5'),
        quantity: 4
      },
      {
        name: 'notepad',
        tags: [ 'office', 'writing', 'school' ],
        price: Decimal128('33.09'),
        quantity: 4
      },
      {
        name: 'printer paper',
        tags: [ 'office', 'stationary' ],
        price: Decimal128('37.55'),
        quantity: 1
      },
      {
        name: 'backpack',
        tags: [ 'school', 'travel', 'kids' ],
        price: Decimal128('83.28'),
        quantity: 2
      },
      {
        name: 'pens',
        tags: [ 'writing', 'office', 'school', 'stationary' ],
        price: Decimal128('42.9'),
        quantity: 4
      },
      {
        name: 'envelopes',
        tags: [ 'stationary', 'office', 'general' ],
        price: Decimal128('16.68'),
        quantity: 2
      }
    ],
    storeLocation: 'Seattle',
    customer: { gender: 'M', age: 50, email: 'keecade@hem.uy', satisfaction: 5 },
    couponUsed: false,
    purchaseMethod: 'Phone'
  }
]

*/