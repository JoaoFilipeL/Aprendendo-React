import './CampoTexto.css';

const CampoTexto = (props) => {
  
    const placeholderDiferente = `${props.placeholder}...`;

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderDiferente}/>
        </div>
    )
}

export default CampoTexto;