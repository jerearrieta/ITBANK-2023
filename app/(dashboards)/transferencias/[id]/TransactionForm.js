export default function TransactionForm() {
    const motivos = [
        "Factura",
        "Alquiler",
        "Préstamos",
        "Bienes",
        "Tarjeta de crédito",
        "Educación",
        "Donación benéfica",
        "Impuestos",
        "Viajes",
        "Compras en línea",
        "Varios"
    ];

    return (
        <>
            <h1 className="text-3xl font-bold pb-4">Transferir dinero</h1>
            <form className="flex flex-col self-stretch p-6 gap-4 rounded-2xl bg-[#D9D9D9] shadow-xl">
                <input type="number" name="amount" className="h-12 p-4 border-none rounded-lg" placeholder="Ingresa el monto a transferir" />
                <select name="reason" defaultValue="Varios" className="h-12 pl-4 border-none rounded-lg" aria-label="motivo">
                    {motivos.map((motivo, index) => <option key={index} value={motivo}>{motivo}</option>)}
                </select>
                <button type="submit" className="btn bg-[#02568a] mt-4 font-bold duration-1000 hover:bg-[#3a87b7]">Transferir</button>
            </form>
        </>
    );
}