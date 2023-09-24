function ActivityListItem({ title, value, to, date }) {
    return (
        <div className="flex flex-col self-stretch gap-1 p-5">
            <div className="flex self-stretch">
                <p className="flex-1 text-lg">{title}</p>
                <p className="text-lg text-right">{value}</p>
            </div>
            <div className="flex self-stretch">
                <p className="flex-1 text-sm">{to}</p>
                <p className="text-sm text-right">{date}</p>
            </div>
        </div>
    );
}

export default function ActivityList() {
    return (
        <div className="flex flex-col self-stretch rounded-2xl shadow-md bg-gray-300">
            <ActivityListItem title="Transferencia enviada" value="-$10.000" to="Google" date="20/8/2023" />
            <hr />
            <ActivityListItem title="Transferencia enviada" value="-$10.000" to="Google" date="20/8/2023" />
        </div>
    );
}
