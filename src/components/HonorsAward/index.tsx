import HonorsAward from "../../Types/HonorsAward";

const HonorsAward = ({honorsAward}: {honorsAward: HonorsAward}) => {
    return (
        <>
            <p className="font-bold text-gray-500 mt-3 text-sm">{honorsAward.time}:</p>
            <p className="text-gray-600">{honorsAward.content}</p>
        </>
    )
}

export default HonorsAward;