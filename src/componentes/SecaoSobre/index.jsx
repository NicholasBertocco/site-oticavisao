import Image from 'next/image';
import atendimento from '../../../public/atendimento.png';
import loja from '../../../public/loja.png'
import style from './SecaoSobre.module.css'
export default function SecaoSobre (){
    return (
        <div className={style.containerSobre}>
            <div className={style.text}>
                <h3>QUEM SOMOS NÓS?</h3>
                <p>Fundada em 2023 em Marilia - SP , Ótica Visão surgiu com o foco em atender a população com a renda mais baixa, mas sempre trazendo a qualidade do produto para proporcionar +a satisfação dos nossos clientes.</p>
            </div>
            <div className={style.containerCard}>
                <div className={style.Card}>
                    <Image  src={loja} alt='Loja'className={style.image}/>
                </div>
                <div className={style.Card}>
                    <h4>NOSSAS FILIAIS!</h4>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
                <div className={style.Card}>
                    <h4>ATENDIMENTO FLEXIVEL</h4>
                    <p>Nossa equipe possui e é treinada para atender
                    </p>
                </div>
                <div className={style.Card}>
                    <Image  src={atendimento} alt='Atendimento' className={style.image}/>
                </div>
            </div>
        </div>
    )
}