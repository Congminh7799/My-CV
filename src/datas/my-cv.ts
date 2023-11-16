import image from '../assets/images/cv.jpg';

const myCV = {
    name: 'Ngô Công Minh',
    image: image,
    birthDay: 'July, 7 1999',
    candidateRole: 'Web Developer',
    gender: 'Male',
    contact: [
        {
            title: 'Phone',
            value: '0797560023'
        },
        {
            title: 'Email',
            value: 'ngocongminh0707@gmail.com'
        },
        {
            title: 'Address',
            value: 'Quế Xuân 1, Quế Sơn, Quảng Nam'
        }
    ],
    objective: 'Looking for an entry-level position as a Software Engineer in a dynamic firm that values my analytical and technical skills and provides scope for updating my knowledge, I seek a company that will help me contribute to its development while concurrently aiding my personal growth.',

    skills: [
        {
            title: 'Programming',
            value: ['Html', 'Css', 'PHP', 'Javascrip', 'TypeScript']
        },
        {
            title: 'Framework',
            value: ['React', 'Vue', 'Laravel', 'Wordpress']
        },
        {
            title: 'Database',
            value: ['MySQL', 'SQL', 'MongoDB']
        },
        {
            title: 'Language',
            value: ['English (Equivalent to TOEIC 400)']
        },
        {
            title: 'Soft skills',
            value: ['Group work', 'presentations']
        }
    ],
    educations: [
        {
            major: 'Software Technology',
            school: 'DUY TAN University',
            timeStart: 'AUG 2017',
            timeEnd: 'DEC 2021',
            gpa: '2.95/4'
        }
    ],
    honors_awards: [
        {
            time: '6/2021',
            content: 'Achieved achievements in participating in school-level Scientific Research. (Sử dụng "Mean Stack vs Mern Stack" để xây dựng Website và Ứng dụng quản lý đào tạo tiếng Anh kết hợp mở quán cà phê)'
        }
    ],
    workExperience: [
        {
            position: 'Fresher Developer',
            companyName: 'O2R2',
            from: '06/2022',
            to: '?',
            descriptions: ['Develop projects using FilamentPHP, Laravel framework.', 'Develop and maintain projects using WordPress.', 'Develop project using Strapi as backend.', 'Develop project using Reactjs as frontend.'],
            outstandingProject: [
                {
                    title: 'Hysata',
                    link: 'https://hysata.com',
                    technologyUsed: 'Wordpress',
                    myRole: 'Dev'
                },
                {
                    title: 'Quản lý chấm công',
                    link: 'https://demo.o2r2.dev/admin',
                    technologyUsed: 'Laravel, FilamentPHP',
                    myRole: 'Dev'
                }
            ]
        }
    ]
}

export default myCV;