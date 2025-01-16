import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Umatourism Web(offer.umatourism.in)',
        description: "I developed Umatourism, a web application designed to enhance travel experiences by providing a comprehensive platform for exploring tourist destinations, planning trips, and discovering local attractions. The platform offers users a seamless way to access travel information, book services, and engage with a community of travelers.",
        tools: ['Javacsript', 'HTML5', 'API','CSS3'],
        role: 'Frontend developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Travel Wanderlust App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NodetJS, Javascript, MUI, Google Maps, React . The app supports multiple languages and currencies. I developed the API using NodeJS, javascript, MongoDB,  AWS. I deployed the front-end app to AWS Amplify and the back-end app to AWS .',
        tools: ['ExpressJS', 'Tailwind CSS', "Google Maps", "NodeJS", "JavaScript", "Mongodb", "AWS S3", "Joi"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'VideoCall App',
        description: 'The VideoCall App is a full-stack web application that enables users to conduct real-time video calls over the web. Built using React for the frontend, MongoDB for data storage, and real-time technologies like WebRTC for video communication, the app provides a seamless interface for users to connect with each other from anywhere. The app leverages useEffect for managing side effects and component lifecycle in React, ensuring smooth interactions.',
        tools: ['React', 'Bootstrap', 'Express', 'javaScript', 'MongoDB',  ' API','CSS3','Nodejs','Expressjs'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'LinkedIn Clone',
        description: "I developed a professional networking platform inspired by LinkedIn, designed to facilitate career growth, job searches, and professional connections. The application allows users to create detailed profiles, connect with others, share posts, and access job opportunities. It integrates real-time messaging, analytics, and group discussions to build an engaging and collaborative professional environment.",
        tools: ['NodeJS', 'Material UI', 'Javascript', 'CSS3', "HTML5","API","Google Api"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
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
