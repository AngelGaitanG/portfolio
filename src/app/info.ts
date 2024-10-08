export const INFO = {
    spanish: {
        name: "Angel Gabriel",
        lastName: "Gaitan",
        meeting: "¡Hola!, Soy Angel Gaitan",
        age: 24,
        phone: +542664647228,
        email: "angel.gaitan.ev@gmail.com",
        address: "Leon Lucero 7074",
        image: "https://avatars.githubusercontent.com/u/155489277?v=4",
        navbar: {
            home: "Inicio",
            about: "Sobre mi",
            what_i_do: "Lo que hago",
            projects: "Proyectos",
            contact: "Contacto"
        },
        description: "Full Stack Web Developer",
        home: {
            greeting: "Hola!, Soy Angel Gaitan",
            presentation: "Ayudo a mejorar la visualización y seguridad de proyectos accesibles, especializándome en el desarrollo de aplicaciones web y móviles. Tengo experiencia en la creación de soluciones integrales que abarcan tanto el frontend como el backend. He desarrollado aplicaciones completas, desde el diseño de bases de datos y la implementación de APIs eficientes hasta el desarrollo de interfaces intuitivas y atractivas.",
        },
        about: {
            title: "Sobre mi",
            description: "¡Hola! Soy Angel Gaitan, un Desarrollador Web Full Stack dedicado y apasionado con una sólida formación en tecnologías tanto frontend como backend. Desde que era niño, me ha fascinado el funcionamiento interno de los videojuegos, lo que despertó mi interés por la programación y la tecnología. Soy conocido por mi tenacidad y habilidades para resolver problemas. Disfruto enfrentándome a desafíos complejos y encontrando soluciones eficientes. Mi enfoque hacia los proyectos es sistemático y organizado, asegurando que cada tarea se complete con precisión y atención al detalle. Creo en el poder del trabajo en equipo y me esfuerzo por crear un ambiente colaborativo y de apoyo en cada equipo del que formo parte."
        },
        what_i_do: {
            title: "Lo que hago",
            things: [
                {
                    name: "Desarrollo de Aplicaciones Web",
                    description: "Creación de aplicaciones web utilizando tecnologías como HTML, CSS, JavaScript, Angular y React. Desde el diseño de interfaces de usuario hasta la implementación de la lógica de negocio, asegurando una experiencia de usuario fluida y responsiva.",
                    icon: "../assets/images/wid/ui.png"
                },
                {
                    name: "Aplicaciones Moviles",
                    description: "Desarrollo de aplicaciones móviles utilizando frameworks como Ionic con Angular, optimizadas para dispositivos Android e iOS, asegurando una excelente experiencia de usuario y un rendimiento eficiente.",
                    icon: "../assets/images/wid/ui.png"
    
                },
                {
                    name: "Desarrollo de APIs y Servicios Backend",
                    description: "Diseño e implementación de APIs RESTful y servicios backend utilizando NestJS, gestionando bases de datos SQL, autenticación, autorización, y asegurando la comunicación efectiva entre el frontend y backend.",
                    icon: "../assets/images/wid/backend.png"
    
                },
                ]
        },
        socials: [
            "https://github.com/angelgaitan", "https://linkedin.com/in/angel-gaitan", "https://instagram.com/angelgaitan", "https://twitter.com/angelgaitan"
        ],
        skillsTitle: "Habilidades",
        skills: [
            {
                name: "HTML",
                level: 90,
                src: "../assets/images/tecnologies/html5.svg"
            },
            {
                name: "CSS",
                level: 80,
                src: '../assets/images/tecnologies/css3-alt.svg'
            },
            {
                name: "Javascript",
                level: 80,
                src: "../assets/images/tecnologies/js.svg"
            },
            {
                name: "PostgreSQL",
                level: 50,
                src: "../assets/images/tecnologies/postgre.svg"
            },
            {
                name: "Github",
                level: 50,
                src: "../assets/images/tecnologies/hubspot.svg"
            },
            {
                name: "Docker",
                level: 30,
                src: "../assets/images/tecnologies/docker.svg"
            }
        ],
        projectsTitle: "Proyectos",
        projects: [
            {
                name: "WanderAura",
                description: "Una plataforma Full Stack para la organización de experiencias de viaje personalizadas, que incluye viajes predefinidos, un sistema de votación basado en las preferencias de los usuarios y una red social para compartir experiencias de viaje.",
                image: "https://raw.githubusercontent.com/AngelGaitanG/WanderAura-mobile/main/wa.png",
                linkGithub: "https://github.com/AngelGaitanG/WanderAura-mobile",
                largeDescription: "WanderAura es una plataforma Full Stack para la organizacion de experiencias de viajes personalizables, que incluye viajes predefinidos, un sistema de votacion basado en las preferencias de los usuarios y una red social para compartir experiencias de viaje. Esté proyecto cuenta con un soporte en dispositivos moviles y una web propia. Esta aplicación te permite registrarte, iniciar sesion, subscribirte a un viaje y empezar a compartir experiencias de viaje. Tambien cuenta con una mini aplicacion para poder consultar el clima de la zona. Tecnologias utilizadas: Ionic, Angular, RJXS, Capacitors, HTML, JS, SCSS, PostgreSQL, Git, Git-Hub, Docker, NestJS, JWT, Bcrypt, TypeScript y más."
            },            
            {
                name: "Ecommerce BACKEND",
                description: "Un backend robusto para una plataforma de ecommerce, que incluye la gestión de productos, categorías, usuarios, órdenes y pagos.",
                image: "https://raw.githubusercontent.com/AngelGaitanG/ecommerce/main/api.png",
                linkGithub: "https://github.com/AngelGaitanG/ecommerce",
                largeDescription : "Un backend robusto para una plataforma de ecommerce, que incluye la gestión de productos, categorías, usuarios, órdenes y pagos. La base de datos utilizada es PostgreSQL. Esté aplicacion servidor te permite revisar los productos del comercio, gestionar categorías, crear usuarios, crear o cancelar ordenes y realizar pagos. También cuenta con un sistema de autenticación y encriptación de contraseñas. Utiliza los siguientes tecnologias: NodeJS, Express, PostgreSQL, Git, Git-Hub, Docker, NestJS, JWT, Bcrypt, TypeScript."
            },
            {   
                name: "Elecar",
                description: "Una aplicación Full Stack de gestión de turnos para talleres automotrices. Permite a los usuarios programar y gestionar citas, realizar seguimientos de servicios, y recibir notificaciones.",
                image: "https://raw.githubusercontent.com/AngelGaitanG/Elecar---TurnManager/main/front/Concesionaria-turnos-HW3/png.png",
                linkGithub: "https://github.com/AngelGaitanG/Elecar---TurnManager",
                linkDeploy:"https://elecar-turn-manager.vercel.app/",
                largeDescription: "Una aplicación Full Stack de gestión de turnos para talleres automotrices. Permite a los usuarios programar y gestionar turnos, realizar seguimientos de servicios, y recibir notificaciones. También cuenta con un pequeño menu para poder cambiar tu foto perfil. La aplicacion cuenta con un diseño moderno para una mejor experiencia de usuario. Las tecnologias que usé son HTML, CSS, JavaScript, React, NodeJS, Express, MongoDB, PostgreSQL, Git, Git-Hub, y Vercel. "
            },
            

        ],
        contact: {
            title: "Contactame",
            address: {
                title: "Direccion",
                description: "El Volcan, SL 5701, ARG"
            },
            form: {
                title: "Enviame un mensaje",
                name: "nombre",
                email: "Correo Electronico",
                textarea: "Dime lo que necesitas"
            },
            phone: {
                icon: "https://cdn-icons-png.flaticon.com/512/1493/1493169.png",
                number: "2664647228"
            }
        }
    },
    english: {
    name: "Angel Gabriel",
    lastName: "Gaitan",
    meeting: "Hello, I'm Einyel Gabriel",
    age: 24,
    phone: +542664647228,
    email: "angel.gaitan.ev@gmail.com",
    address: "Leon Lucero 7074",
    image: "https://avatars.githubusercontent.com/u/155489277?v=4",
    navbar: {
        home: "Home",
        about: "About me",
        what_i_do: "What I do",
        projects: "Projects",
        contact: "Contact"
    },
    description: "Full Stack Web Developer",
    home: {
        greeting: "Hello! I'm Angel Gaitan",
        presentation: "I help enhance the visual appeal and security of accessible projects, specializing in the development of web and mobile applications. I have experience in creating comprehensive solutions that encompass both frontend and backend. I have developed complete applications, from designing databases and implementing efficient APIs to developing intuitive and attractive user interfaces."
    },
    about: {
        title: "About Me",
        description: "Hello! I'm Angel Gaitan, a dedicated and passionate Full Stack Web Developer with a solid background in both frontend and backend technologies. Since childhood, I've been fascinated by the inner workings of video games, which sparked my interest in programming and technology. Known for my tenacity and problem-solving skills, I enjoy tackling complex challenges and finding efficient solutions. My approach to projects is systematic and organized, ensuring each task is completed with precision and attention to detail. I believe in the power of teamwork and strive to create a collaborative and supportive environment in every team I'm part of."
    },
    what_i_do: {
        title: "What I Do",
        things: [
            {
                name: "Web Applications",
                description: " evelop responsive and scalable web applications, focusing on user experience and functionality. Utilize modern web technologies like HTML, CSS, and JavaScript, along with frameworks such as Angular and React, to create dynamic and interactive user interfaces",
                icon: "../assets/images/wid/ui.png"
            },
            {
                name: "Mobile Applications",
                description: "Build cross-platform mobile applications using frameworks like Ionic, ensuring a seamless user experience across different devices. Implement responsive design and performance optimization to deliver high-quality mobile solutions",
                icon: "../assets/images/wid/ui.png"
            },
            {
                name: "API and Backend Services Development",
                description: "Design and develop RESTful APIs and backend services using Node.js and NestJS, ensuring secure and efficient communication between frontend and backend systems. Implement server-side logic, user authentication, and role management.",
                icon: "../assets/images/wid/backend.png"
            },
        ]
    },
    socials: [
        "https://github.com/angelgaitan", "https://linkedin.com/in/angel-gaitan", "https://instagram.com/angelgaitan", "https://twitter.com/angelgaitan"
    ],
    skillsTitle: "Skills",
    skills: [{
        name: "HTML",
        level: 90,
        src: "../assets/images/tecnologies/html5.svg"
    },
    {
        name: "CSS",
        level: 80,
        src: '../assets/images/tecnologies/css3-alt.svg'
    },
    {
        name: "Javascript",
        level: 80,
        src: "../assets/images/tecnologies/js.svg"
    },
    {
        name: "PostgreSQL",
        level: 50,
        src: "../assets/images/tecnologies/postgre.svg"
    },
    {
        name: "Github",
        level: 50,
        src: "../assets/images/tecnologies/hubspot.svg"
    },
    {
        name: "Docker",
        level: 30,
        src: "../assets/images/tecnologies/docker.svg"
    }
    ],
    projectsTitle: "Projects",
    projects: [
        {
    name: "WanderAura",
    description: "A Full Stack platform for organizing personalized travel experiences, including pre-defined trips, a voting system based on user preferences, and a social network for sharing travel experiences.",
    image: "https://raw.githubusercontent.com/AngelGaitanG/WanderAura-mobile/main/wa.png",
    linkGithub: "https://github.com/AngelGaitanG/WanderAura-mobile",
    largeDescription: "WanderAura is a Full Stack platform for organizing customizable travel experiences, including pre-defined trips, a voting system based on user preferences, and a social network for sharing travel experiences. This project supports mobile devices and has its own web version. This application allows you to register, log in, subscribe to a trip, and start sharing travel experiences. It also features a mini app to check the weather in the area. Technologies used: Ionic, Angular, RXJS, Capacitor, HTML, JS, SCSS, PostgreSQL, Git, GitHub, Docker, NestJS, JWT, Bcrypt, TypeScript, and more."
},
{
    name: "Ecommerce BACKEND",
    description: "A robust backend for an ecommerce platform, including product, category, user, order, and payment management.",
    image: "https://raw.githubusercontent.com/AngelGaitanG/ecommerce/main/api.png",
    linkGithub: "https://github.com/AngelGaitanG/ecommerce",
    largeDescription: "A robust backend for an ecommerce platform, including product, category, user, order, and payment management. The database used is PostgreSQL. This server application allows you to review the store's products, manage categories, create users, create or cancel orders, and process payments. It also features an authentication system and password encryption. Technologies used: NodeJS, Express, PostgreSQL, Git, GitHub, Docker, NestJS, JWT, Bcrypt, TypeScript."
},
{
    name: "Elecar",
    description: "A Full Stack appointment management application for automotive workshops. It allows users to schedule and manage appointments, track services, and receive notifications.",
    image: "https://raw.githubusercontent.com/AngelGaitanG/Elecar---TurnManager/main/front/Concesionaria-turnos-HW3/png.png",
    linkGithub: "https://github.com/AngelGaitanG/Elecar---TurnManager",
    linkDeploy: "https://elecar-turn-manager.vercel.app/",
    largeDescription: "A Full Stack appointment management application for automotive workshops. It allows users to schedule and manage appointments, track services, and receive notifications. It also includes a small menu to change your profile picture. The application has a modern design for an enhanced user experience. Technologies used: HTML, CSS, JavaScript, React, NodeJS, Express, MongoDB, PostgreSQL, Git, GitHub, and Vercel."
}

        
    ],
    contact: {
        title: "Get in Touch",
        address: {
            title: "Address",
            description: "El Volcan, SL 5701, ARG"
        },
        form: {
            title: "Send me a message",
            name: "Name",
            email: "Email",
            textarea: "What do you need?"
        },
        phone: {
            icon: "https://cdn-icons-png.flaticon.com/512/1493/1493169.png",
            number: "2664647228"
        }
    }
}
}
