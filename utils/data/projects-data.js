import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Assistant App',
        description: "Me and my team built an AI-powered Assistant web application.The application uses the Web Speech API for speech recognition, allowing users to give voice commands. Users can interact with Jarvis by asking questions or giving instructions, such as 'What is the time?', 'What's the weather?', or 'Open YouTube'",
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
        name: 'Weather app',
        description: "The Weather App is a simple and user-friendly web application that provides real-time weather information for any city or location. Built using HTML5, CSS3, and JavaScript, the app fetches weather data from a third-party weather API (such as OpenWeatherMap or WeatherAPI) and displays it in an intuitive and responsive interface. The app allows users to search for a city and instantly retrieve information like temperature, humidity, wind speed, and a brief weather description.",
        tools: ['NodeJS', 'Material UI', 'Javascript', 'CSS3', "HTML5","API"],
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