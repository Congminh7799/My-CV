const BorderLinear = ({ title, boldLength = 50 }: { title: string, boldLength?: number }) => {

    const lightLength = 100 - boldLength;

    return (
        <>
            <div className="text-xl font-bold">{title}</div>
            <p className={`bg-gradient-to-r from-${boldLength}% to-${lightLength}% bg-left-bottom bg-[length:100%_3px] bg-no-repeat from-orange-500 to-orange-200`}></p>
        </>
    )
}

export default BorderLinear;