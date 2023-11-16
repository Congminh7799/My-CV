const Content = ({ title, value }: { title: string, value: string }) => {
    return (
        <p className="text-gray-600">{title}: {value}</p>
    )
}

export default Content;