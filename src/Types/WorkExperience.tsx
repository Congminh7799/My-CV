type WorkExperience = {
    position: string;
    companyName: string;
    from: string;
    to?: string;
    descriptions: string[];
    outstandingProject: {
        title: string;
        link: string;
        technologyUsed: string;
        myRole: string;
    }[]
}

export default WorkExperience;