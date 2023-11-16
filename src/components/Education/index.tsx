import { RiHandbagFill } from "react-icons/ri";
import { FaRegCalendar } from "react-icons/fa";
import Detail from "../Blocks/Detail";

const Education = ({ education }: { education: { major: string, school: string, timeStart: string, timeEnd: string, gpa: string } }) => {

    return (
        <div className="text-gray-500 mt-2">
            <p className="font-bold">Major: {education.major}</p>
            <div className="md:flex text-gray-400 pb-[10px]">
                <Detail icon={<RiHandbagFill />} label={education.school} className="md:min-w-[200px]" />
                <Detail icon={<FaRegCalendar />} label={`${education.timeStart} - ${education.timeEnd}`} className="mt-2 md:mt-0 " />
            </div>
            <p className="text-sm text-gray-600">GPA: {education.gpa}</p>
        </div>
    );
}

export default Education;