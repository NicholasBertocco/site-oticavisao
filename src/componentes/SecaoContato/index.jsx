import local from '../../../public/local.png'
import fb from '../../../public/fb.png'
import tt from '../../../public/tt.png'
import ig from '../../../public/ig.png'
import email from '../../../public/email.png' 
import telefone from '../../../public/telefone.png' 
import Image from 'next/image'
import style from './SecaoContato.module.css'

export default function Rodape(){
    return(
        <div className={style.div}>
            <div className={style.text}>
                <h3>Fale conosco</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento</p>
            </div>
            <div className={style.contact}>
                <div className={style.Card}>
                    <h4>Nossos contatos</h4>
                    <ul type='none'>
                        <li><Image src={local} alt='local' className={style.image}/> Marília - SP</li>
                        <li><Image src={telefone} alt='telefone' className={style.image}/> (14) 99999-9999</li>
                        <li><Image src={email} alt='email' className={style.image}/> contato@email.email</li>
                    </ul>
                </div>
                <div className={style.Card}>
                    <h4>Nossas Redes Sociais</h4>
                    <ul type='none'>
                        <li><Image src={fb} alt='fb' className={style.image}/>/ÓticaVisão</li>
                        <li><Image src={ig} alt='ig' className={style.image}/>@oticavisao</li>
                        <li><Image src={tt} alt='tt' className={style.image}/> @oticavisao</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}