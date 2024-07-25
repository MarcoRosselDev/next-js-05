// db.p.find({sect: 40},{bs:1,cd:1}) ---> el 1 espesifica la inclucion
// projections sirve para controlar el doc de retorno para que no sea inesesariamente greande

// restar items en el retorno
// db.p.find({result: {$in: ["Pass", "Warning"]}, {date:0, "address.zip": 0})

/* 
db.sales.find().limit(2)

1. Query for all sales at the Denver store. Return only the sale date, store location, purchase method and _id fields.(Forgot the command? Check the hint below!)

db.sales.find({storeLocation: 'Denver'},{saleDate:1, purchaseMethod: 1, storeLocation:1})

2. Find the data on sales to customers less than 30 years old in which the customer satisfaction rating was greater than three. Return only the customer's age and satisfaction rating, the sale date and store location. Do not include the _id field. (Forgot the command? Check the hint below!)

db.sales.find({"customer.age": {$lt:30}, "customer.satisfaction": {$gt: 3}},{ "customer.age":1, "customer.satisfaction":1})

3. Find data on all sales from the Seattle and New York stores. Return all data except the purchase method, customer information, and whether a coupon was used. (Forgot the command? Check the hint below!)

db.sales.find({storeLocation: {$in: ["Seattle", "New York"]}},{purchaseMethod: 0, customer: 0, couponUsed: 0})
*/

/* {
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
] */