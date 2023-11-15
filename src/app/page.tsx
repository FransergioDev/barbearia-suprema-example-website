import "bootstrap/dist/css/bootstrap.min.css"
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.bannerHomeCentralSite}>
          <div>
              <h3>Fazemos sua barba da maneira clássica</h3>
              <h1>Com navalha e toalha quente</h1>
              <button className="btn btn-warning btn-lg">Agende seu horário</button>
          </div>
        </div>
    </main>
  )
}
