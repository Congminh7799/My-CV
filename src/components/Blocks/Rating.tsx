import { FaStar } from "react-icons/fa";

const Rating = ({ rating = 5 }: { rating: number }) => {
    return (
        <div className="flex pb-[10px]">
            <div className={rating >= 1 ? 'text-amber-400' : 'text-gray-300'}><FaStar /></div>
            <div className={rating >= 2 ? 'text-amber-400' : 'text-gray-300'}><FaStar /></div>
            <div className={rating >= 3 ? 'text-amber-400' : 'text-gray-300'}><FaStar /></div>
            <div className={rating >= 4 ? 'text-amber-400' : 'text-gray-300'}><FaStar /></div>
            <div className={rating >= 5 ? 'text-amber-400' : 'text-gray-300'}><FaStar /></div>
        </div>
    )
}

export default Rating;