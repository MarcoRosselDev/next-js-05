// $elemMatch
// exclusivo para concontrar un match dentro de un array en el documento

// sintax
/* db.account.find({
  products: {
    $elemMatch: { $eq: "InvestmentStock"}
  }
})
 */
// recordar $eq = igual
// esto espesifica exclusivamente que "InverstmenStack" deve estar dentro
// de un array para que coinsida con la query
// si esta solito lo ignorara ----> pa que sirve? ahun no lo se XD

// podemos preguntar por mas de un elemento del array en el documento
/* { <> : $elemMatch: {
  <query1>,
  <query2>,
  <query3>,
  ...
}}
*/

/* db.sales.find({ items: { $elemMatch: { name: "laptop", price: { $gt: 800 }, quantity: {$gt: 1 }}
  }
})
*/

/* 
db.transactions.find({
  transactions: {
    $elemMatch: {
      amount: { $lte: 4500}, "transaction_code": {$eq: "sell"}
    }
  }
})

*/