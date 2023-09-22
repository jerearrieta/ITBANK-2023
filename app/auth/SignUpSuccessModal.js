"use client"

export default function SignUpSuccessModal({ callback }) {
    return (
        <>
            <input type="checkbox" id="sign-up-modal" className="modal-state" defaultChecked />
            <div className="modal">
                <label className="modal-overlay"></label>
                <div className="modal-content flex flex-col gap-5">
                    <h2 className="text-xl">Se ha registrado exitosamente!</h2>
                    <span>Ahora puede iniciar sesion para acceder a su cuenta</span>
                    <div className="flex gap-3">
                        <button className="btn btn-primary" onClick={callback}>Aceptar</button>
                    </div>
                </div>
            </div>
        </>
    )
}