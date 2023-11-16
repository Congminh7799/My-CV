const Detail = ({icon, label, className}: {icon: React.ReactNode, label: string, className: string}) => {
    return (
        <div className={`flex items-center space-x-2 ${className}`}>{icon} <div>{label}</div></div>
    )
}

export default Detail;