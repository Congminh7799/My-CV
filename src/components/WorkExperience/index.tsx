import { BiSolidBuildingHouse } from "react-icons/bi";
import WorkExperience from "../../Types/WorkExperience";
import { FaRegCalendar } from "react-icons/fa";
import Detail from "../Blocks/Detail";

const WorkExperience = ({ workExperience }: { workExperience: WorkExperience }) => {
    return (
        <>
            <p className="font-bold text-gray-500 mt-2">{workExperience.position}</p>
            <div className="md:flex text-gray-400 pb-[10px]">
                <Detail icon={<BiSolidBuildingHouse />} label={workExperience.companyName} className="md:min-w-[200px]" />
                <Detail icon={<FaRegCalendar />} label={`${workExperience.from} - ${workExperience.to}`} className="mt-2 md:mt-0 " />
            </div>
            <ul className="text-gray-400 list-disc list-inside">
                {
                    workExperience.descriptions.map(function (item: string, index: number) {
                        return (
                            <>
                                <li key={index}>{item}</li>
                            </>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default WorkExperience;