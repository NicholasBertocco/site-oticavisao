import style from './Topo.module.css'
import Link from 'next/link'

export default function Topo() {
    return(
    <header className={style.Topo}>
        <div className={style.containerTopo}>
            <div>
                <h1>Otica Visão</h1>
            </div>
            <nav className={style.menu}>
                <Link href='#sobre' className={style.Link}>SOBRE</Link>
                <Link href='#produtos' className={style.Link}>PRODUTOS</Link>
                <Link href='#contato'className={style.Link}>CONTATO</Link>
            </nav>
        </div>
        
    </header>
    )
}