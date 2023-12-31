import Skill from "../../Types/Skill";
import Rating from "../Blocks/Rating";

const Skill = ({ skill, hideBorder = false }: { skill: Skill, hideBorder: boolean }) => {

    return (
        <>
            <p className="font-bold text-gray-500 mt-3 text-sm">{skill.title}:</p>
            <p className="text-sm text-gray-600">{skill.value.join(', ')}.</p>
            <Rating rating={skill.rating} />
            {
                !hideBorder ? <div className="border-b-[1px] border-gray-200"></div> : null
            }
        </>
    )

}

export default Skill;