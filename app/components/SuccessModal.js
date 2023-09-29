export default function SuccessModal({ title, message, onClick }) {
    return (
        <>
            <input type="checkbox" id="success-modal" className="modal-state" defaultChecked />
            <div className="modal">
                <label className="modal-overlay"></label>
                <div className="modal-content flex flex-col gap-5 items-center">
                    <h2 className="text-xl text-white">{title}</h2>
                    <p className="text-white">{message}</p>
                    <button className="btn btn-primary w-1/2 mt-6" onClick={onClick}>Aceptar</button>
                </div>
            </div>
        </>
    )
}