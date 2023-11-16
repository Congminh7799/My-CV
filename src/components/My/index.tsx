const My = ({ name, image, candidateRole }: { name: string, image: string, candidateRole: string }) => {
    return (
        <>
            <div className="flex h-[200px]">
                <div>
                    <img className="rounded-xl h-full w-[100px] object-cover" src={image} alt="My Image" />
                </div>
                <div className="ml-5">
                    <h1 className="text-2xl uppercase font-bold text-orange-500">{name}</h1>
                    <h6 className="border-l-[3px] border-orange-500 pl-2 mt-3 uppercase">{candidateRole}</h6>
                </div>
            </div>
        </>
    );
}

export default My;