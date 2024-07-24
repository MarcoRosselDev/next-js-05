// insertOne()            insertMany()
//db.<collection>.insertOne()
//db.grades.insertOne() // cuando aplicas insertOne y no existe la coleccion "grades"
// mongodb lo crea automaticamente

/* db.grades.insertMany([
  {class_id: 333,
    type: "quiz",
  },
  {class_id: 555,
    type: "quiz",
  },
  {class_id: 111,
    type: "exam",
  },
]) */