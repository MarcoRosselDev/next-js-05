type Obj_fetch = {
  _id: string
  email: string
  password: string
  createdAt: string
  updatedAt: string
}

export default async function prueba() {
  const respuesta = await fetch("http://localhost:3000/api/auth/get_data_users")
  const d = await respuesta.json()
  const div = d.data.map((e:Obj_fetch) => {
    return (
      <>
        <p>{e._id}</p>
        <p>{e.email}</p>
        <p>{e.password}</p>
        <p>{e.createdAt}</p>
        <p>{e.updatedAt}</p>
      </>
    )
  })
  return (
    <div>
      {div}
    </div>
  )
}