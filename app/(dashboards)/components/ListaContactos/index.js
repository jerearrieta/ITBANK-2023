function Contacto({ title, value, to, date }) {
    return (
        <div className="flex self-stretch gap-1 p-5">
            <div className="flex flex-col self-stretch">
                <p className="flex-1 text-lg">{title}</p>
                <p className="text-lg text-right">{value}</p>
            </div>
            
        </div>
    );
}

export default function ListaContactos() {
    return (
        <div className="flex flex-col self-stretch rounded-2xl shadow-md bg-gray-300">
            
            <hr />
            
        </div>
    );
}

