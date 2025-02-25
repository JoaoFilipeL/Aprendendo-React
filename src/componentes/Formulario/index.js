import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]


    const [Nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    
    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome" 
                valor={nome}
                
                
                />

                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
                
            </form>
        </section>
    )
}

export default Formulario;