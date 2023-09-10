import "./CampoTexto.css";

const CampoTexto = ({type, name, id, placeholder}) => {
    return <>
        <input className="inputs" type={type} name={name} id={id} placeholder={placeholder} />
    </>
};

export default CampoTexto;