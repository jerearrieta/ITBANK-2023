export default function FormRegistro({ setInLogin }) {
    /*
    const [dni, setDni] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMensaje, setErrorMensaje] = useState("");
    const navigate = useNavigate();

    const handleDniChange = (event) => {
        setDni(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const mostrarMensaje = (mensaje) => {
        setErrorMensaje(mensaje);
        setTimeout(function () {
            setErrorMensaje("");
        }, 5000);
    };
    */

    const handleSubmit = (e) => {
        e.preventDefault();

        if (dni === '' || email === '' || password === '') {
            mostrarMensaje('Por favor, completa todos los campos');
        } else if (dni.length !== 8 || isNaN(dni)) {
            mostrarMensaje('El DNI debe tener exactamente 8 numeros');
        } else if (!/^\d+$/.test(dni)) {
            mostrarMensaje('El DNI solo puede contener numeros');
        } else if (!email.includes("@")) {
            mostrarMensaje("El correo electrónico debe contener @");
        } else if (password.length > 8) {
            mostrarMensaje('La contraseña debe tener un maximo de 8 caracteres');
        } else {
            navigate('/login')
        }
    };
    
    return (
        <form className="flex flex-col gap-10 p-8 rounded-2xl bg-gray-300" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold">Bienvenido a Guardian Bank</h1>
                <p className="text-sm">Inicia sesion para acceder a su cuenta</p>
            </div>
            <div className="form-group gap-5">
                <div className="form-field">
                    <label className="form-label text-black">Email</label>
                    <input placeholder="Introduzca su email aqui" type="email" className="input max-w-full border-[1px] bg-white border-gray-500" />
                </div>
                <div className="form-field">
                    <label className="form-label text-black">Clave</label>
                    <input placeholder="Introduzca su clave aqui" type="password" className="input max-w-full border-[1px] bg-white border-gray-500" />
                </div>
                <div className="form-field pt-5">
                    <div className="form-control justify-between">
                        <button type="submit" className="btn btn-primary w-full">Iniciar Sesion</button>
                    </div>
                </div>

                <div className="form-field">
                    <div className="form-control justify-center">
                        <a className="link link-underline-hover link-primary text-sm" onClick={() => setInLogin(true)}>¿Ya tiene una cuenta? Inicie Sesion.</a>
                    </div>
                </div>
            </div>
        </form>
    );
}