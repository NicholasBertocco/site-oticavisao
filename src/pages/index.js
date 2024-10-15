import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Topo from '@/componentes/Topo';
import SecaoCapa from '@/componentes/SecaoCapa'
import SecaoProdutos from '@/componentes/SecaoProdutos'
import SecaoSobre from '@/componentes/SecaoSobre'
import Rodape from '@/componentes/Rodape'
import SecaoContato from '@/componentes/SecaoContato'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Topo/>
      <section>
        <SecaoCapa/>
      </section>
      <section id='produtos'>
        <SecaoProdutos/>
      </section>
      <section id='sobre'>
        <SecaoSobre/>
      </section>
      <section id='contato'>
        <SecaoContato/>
      </section>
      <Rodape/>
    </div>
  );
}
