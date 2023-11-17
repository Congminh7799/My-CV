import Content from "./Content";

const Information = ({ birthDay, gender, contact }: { birthDay: string, gender: string, contact?: { title: string, value: string }[] }) => {
    return (
        <>
            <div className="md:text-right mt-10 md:mt-0">
                <Content title="Gender"  value={gender} />
                <Content title="Date of birth"  value={birthDay} />
                {
                    contact ?
                        contact.map(function (item: any, index: number) {
                            return <Content title={item.title}  value={item.value} key={index} />

                        })
                        : null
                }
            </div>
        </>
    );
}

export default Information;