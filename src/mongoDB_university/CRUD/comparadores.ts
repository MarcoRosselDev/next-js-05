// $gt (greater than)               mayor a
// $lt (less than)                  menor que
// $lte (less than or equal to)     menor o igual que
// $gte (greater than or equal to)  mayor o igual a

// sintax:
//  <field> : { <operador> : <value>}

// example:
// db.sales.find({ "items.price": { $lt : 50 }})   ---> notece la notacion de punto en field
