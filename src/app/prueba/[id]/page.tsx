type Obj_fetch = {
  _id: string
  email: string
  password: string
  createdAt: string
  updatedAt: string
}
// http://localhost:3000/prueba/id=123kjas ------------> url de ejemplo de id
// al parecer podemos jugar con el nombre de la carpeta para resivir parametros en la url
// prueba \ [id]

export default async function prueba({params}: any) {
  const respuesta = await fetch("http://localhost:3000/api/hotel/auth/get_data_users")
  const d = await respuesta.json()
  console.log(params)
  
  const div = d.data.map((e:Obj_fetch) => {
    return (
      <>
        <p>{e._id}</p>
        <p>{e.email}</p>
        <p>{e.password}</p>
        <p>{e.createdAt}</p>
        <p>{e.updatedAt}</p>
        <p>{params.id}</p>
      </>
    )
  })
  return (
    <div>
      {div}
    </div>
  )
}