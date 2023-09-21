import { signIn } from "./actions";

export default function FormLogin({ setInLogin }) {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form action={signIn} className="flex flex-col gap-10 p-8 rounded-2xl bg-gray-300">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold">Bienvenido a Guardian Bank</h1>
                <p className="text-sm">Inicia sesion para acceder a su cuenta</p>
            </div>
            <div className="form-group gap-5">
                <div className="form-field">
                    <label className="form-label text-black">Email</label>
                    <input type="email" name="email" className="input max-w-full border-[1px] bg-white border-gray-500" placeholder="Introduzca su email aqui" />
                </div>
                <div className="form-field">
                    <label className="form-label text-black">Clave</label>
                    <input type="password" name="password" className="input max-w-full border-[1px] bg-white border-gray-500" placeholder="Introduzca su clave aqui" />
                </div>
                <div className="form-field">
                    <div className="form-control justify-between">
                        <div className="flex gap-2">
                            <input id="default-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="text-sm font-medium text-gray-900 dark:text-gray-300">Recuerdame</label>
                        </div>
                        <label className="form-label">
                            <a className="link link-underline-hover link-primary text-sm">¿Olvidaste tu clave?</a>
                        </label>
                    </div>
                </div>
                <div className="form-field pt-5">
                    <div className="form-control justify-between">
                        <button type="submit" className="btn btn-primary w-full">Iniciar Sesion</button>
                    </div>
                </div>

                <div className="form-field">
                    <div className="form-control justify-center">
                        <a className="link link-underline-hover link-primary text-sm" onClick={() => setInLogin(false)}>¿No tiene una cuenta? Regístrate.</a>
                    </div>
                </div>
            </div>
        </form>
    );
}