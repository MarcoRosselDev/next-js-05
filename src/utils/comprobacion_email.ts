export default function comprobacion_email(email:string): boolean {
  const emailRegex = /\S+@\S+\.\S+/
  return emailRegex.test(email)
}