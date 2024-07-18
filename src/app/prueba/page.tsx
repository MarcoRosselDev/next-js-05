export default async function prueba() {

  const respuesta = await fetch("http://localhost:3000/api/auth/get_data_users")
  //data.json() 
  const d = await respuesta.json()
  console.log(d)
  const p = d.data.forEach(element => {
    return (<div><p>{element}</p></div>)
  });

  return (
    <div>
      {p}
    </div>
  )
}