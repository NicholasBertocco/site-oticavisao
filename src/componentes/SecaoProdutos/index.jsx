import Image from 'next/image';
import oculos1 from '../../../public/oculos01.png';
import oculos2 from '../../../public/oculos02.png';
import oculos3 from '../../../public/oculos03.png';
import oculos4 from '../../../public/oculos04.png';
import style from './SecaoProdutos.module.css'

export default function SecaoProdutos (){
    return(
        <div className={style.containerPrincipal}>
            <div>
                <h3>Nossos produtos</h3>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transistion nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessiveis e contam com a melhor qualidade do mercado.</p>

            </div>
            <div className={style.containerProdutos}>
                <div>
                    <h4>Óculos de grau</h4>
                    <Image src={oculos1} alt="Óculos de Graus" className={style.Image}/>
                    <p>R$ 500,00</p>
                </div>
                <div>
                    <h4>Óculos transition</h4>
                    <Image src={oculos2} alt="Óculos de Graus" className={style.Image}/>
                    <p>R$ 750,00</p>
                </div>
                <div>
                    <h4>Óculos de sol</h4>
                    <Image src={oculos3} alt="Óculos de Graus" className={style.Image}/>
                    <p>R$ 700,00</p>
                </div>
                <div>
                    <h4>Óculos Infantil</h4>
                    <Image src={oculos4} alt="Óculos de Graus" className={style.Image}/>
                    <p>R$ 500,00</p>
                </div>
            </div>
            <div className={style.containerBeneficios}>
                <p>Todos os nossos produtos incluem:</p>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manuntenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>    
                </ul>    
                           
            </div>
        </div>
    )
}