import "./CampoTexto.css";

const CampoTexto = ({name, id, placeholder}) => {
    return <>
        <input className="inputs" type="text" required name={name} id={id} placeholder={placeholder} />
    </>
};

export default CampoTexto;