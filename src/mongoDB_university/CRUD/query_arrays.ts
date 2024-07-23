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