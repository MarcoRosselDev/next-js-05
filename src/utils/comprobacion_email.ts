export default function comprobacion_email(email:string) {
  const emailRegex = /\S+@\S+\.\S+/
  return emailRegex.test(email)
}