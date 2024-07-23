//db.<collection>.find()        <---  sintax
//.find({ city: { $in: ["PHOENIX", "CHICAGO"] }})

// que significa $in?
// esta preguntando--> 
// retorna todos los documentos que tengan los valores "phoenix" y "chicago"
// en el valor de city

// si aplicamos .find() vacio?
// retornara la lista completa de documentos

// solo uno ---> sintax:
// .find({  field:{ $eq: <value>} })
// .find({  field: <value>  })
// son lo mismo, por que $eq: ahora es implisito "no nesecario, por defecto"