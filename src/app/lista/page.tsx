import Link from "next/link";

export default function Lista() {
  return (
    <div>
      <p>proyecto de lista de tareas por hacer</p>
      <p>con Mongo DB</p>
      <p>Auth</p>
      <p>API key</p>
      <p>cookie</p>
      <Link href="lista/usuario">ir a lista de tareas</Link>
    </div>
  )
}