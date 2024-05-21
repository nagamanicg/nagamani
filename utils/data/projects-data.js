import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Nokia Digital Automation Cloud',
        description: "Worked on E2E industrial grade connectivity & digitalization platform connectivity application. Developed features for migration from Role Based Access Control to Attribute Based Access Control and partner portal migration to customer portal.Automating the API implementation using GRPC gateway. Worked on UI features of NDAC customer portal application",
        tools: ['GoLang', 'MongoDB', 'TypeScript', 'JavaScript', 'CSS', 'HTML','React JS','Angular JS','Redux', 'Cassandra', 'Nginx','JWT'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Non-Employment Duty Pass Application',
        description: 'Developed an online application to check the availability of the duty pass management.Streamlined the entire process of approval and allocating the duty pass for vendors and employees.',
        tools: ['ReactJS', 'CSS', "HTML", "BootStrap", "TypeScript", "MySQL", "Material UI", "Redux", "JavaScript"],
        role: 'UI Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Delivery Management System',
        description: 'My team built an delivery management application to deliver essential commodity',
        tools: ['React', 'Bootstrap', 'CSS', 'Express', 'TypeScript', 'MongoDB','Material UI','Redux'],
        code: '',
        role: 'UI/UX Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Activity Detection and recording logs',
        description: "My team and I developed a  application using Open Pose to detect persons activity and audit log using deep leraning technique .",
        tools: ['Open Pose', 'python', 'PYQT', 'Tensor Flow', "OpenCV"],
        code: '',
        demo: '',
        image: ayla,
        role: ' Software Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },