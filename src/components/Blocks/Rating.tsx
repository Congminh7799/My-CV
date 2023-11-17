import { FaStar } from "react-icons/fa";

const Rating = ({ rating = 5 }: { rating: number }) => {

    const ratingList = [1, 2, 3, 4, 5];

    return (
        <div className="flex pb-[10px]">
            {
                ratingList.map(function (item: number, index: number) {
                    return <Star isActived={rating >= item} key={index} />
                })
            }
        </div>
    )
}

const Star = ({ isActived }: { isActived: boolean }) => {
    return (
        <div className={isActived ? 'text-amber-400' : 'text-gray-300'}><FaStar /></div>
    )
}

export default Rating;