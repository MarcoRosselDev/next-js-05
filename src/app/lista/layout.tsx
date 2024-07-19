import styles from "./lista.module.css"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <div className={styles.lista_main}>
      <div>
        <p>heste puede ser el header</p>
      </div>
      {children}
      <div>
        <p>heste puede ser el footer</p>
      </div>
    </div>
  )
}