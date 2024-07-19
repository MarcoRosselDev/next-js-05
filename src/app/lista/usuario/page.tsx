import Link from "next/link";

export default function Usuario() {
  return (
    <div>
      <p>en esta parte vamos a mostrar la lista de tareas por hacer</p>
      <p>si es que tiene una API key guardada en las cookies de la pagina web</p>
      <p>en caso de que no, redirigirlo a login</p>
      <Link href="/lista/login">ir a login</Link>
    </div>
  )
}