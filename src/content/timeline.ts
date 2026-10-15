export interface Timeline {
  date: string
  'title-en': string
  'title-es': string
  'description-en': string
  'description-es': string
  tags: ('certifications' | 'work' | 'education')[]
  image?: string
  link: string
}

export const timelines: Timeline[] = [
  {
    date: 'Jun 28, 2021',
    'title-en': 'Start in programming',
    'title-es': 'Inicio en la programación',
    'description-en':
      'I made my first introductions to the world of programming in two engineering courses based on the languages ​​C++, Javascript, CSS and HTML.',
    'description-es':
      'Realice mis primeros acercamientos al mundo de la programación en dos cursos de ingeniería basados en los lenguajes C++, Javascript, CSS y HTML.',
    tags: ['certifications'],
    image: '/timeline-1.webp',
    link: 'https://www.linkedin.com/in/joan-rojas-mejia/details/education/'
  },
  {
    date: 'Jul 24, 2021',
    'title-en': 'OOP in various technologies',
    'title-es': 'POO en diversas tecnologías',
    'description-en':
      'An object-oriented programming course teaches fundamental principles and advanced techniques for designing and developing software using paradigms such as encapsulation, inheritance, and polymorphism.',
    'description-es':
      'Un curso de programación orientada a objetos enseña principios fundamentales y técnicas avanzadas para diseñar y desarrollar software utilizando paradigmas como encapsulamiento, herencia y polimorfismo.',
    tags: ['certifications'],
    image: '/timeline-2.webp',
    link: 'https://platzi.com/p/rarojasf/curso/1474-oop/diploma/detalle/'
  },
  {
    date: 'Jul 25, 2021',
    'title-en': 'Javascript basic',
    'title-es': 'Javascript básico',
    'description-en':
      'This course introduces the essential fundamentals of the language, covering variables, control structures, functions and DOM manipulation, essential to begin developing interactive web applications.',
    'description-es':
      'Este curso introduce los fundamentos esenciales del lenguaje, cubriendo variables, estructuras de control, funciones y manipulación del DOM, esenciales para comenzar a desarrollar aplicaciones web interactivas.',
    tags: ['certifications'],
    image: '/timeline-3.webp',
    link: 'https://platzi.com/p/rarojasf/curso/1814-basico-javascript/diploma/detalle/'
  },
  {
    date: 'Jul 27, 2021',
    'title-en': 'EcmaScript 6',
    'title-es': 'EcmaScript 6',
    'description-en':
      'This course explores modern JavaScript features, such as arrow functions, destructuring, classes, async/await, and modules, improving the ability to develop more efficient and structured web applications.',
    'description-es':
      'Este curso explora características modernas de JavaScript, como funciones de flecha, destructuración, clases, async/await y módulos, mejorando la capacidad de desarrollar aplicaciones web más eficientes y estructuradas.',
    tags: ['certifications'],
    image: '/timeline-4.webp',
    link: 'https://platzi.com/p/rarojasf/curso/1815-ecmascript-6/diploma/detalle/'
  },
  {
    date: 'Nov 15, 2021',
    'title-en': 'First job as a freelancer',
    'title-es': 'Primer trabajo como freelancer',
    'description-en':
      'Work for a blockchain (video game) project called Cryptoplants Club using technologies such as HTML, CSS and Javascript.',
    'description-es':
      'Trabaje para un proyecto de blockchain (videojuego) llamado Cryptoplants Club en el que utilice tecnologías como HTML, CSS y Javascript.',
    tags: ['work'],
    image: '/timeline-5.webp',
    link: 'https://www.linkedin.com/in/joan-rojas-mejia/'
  },
  {
    date: 'Feb 1, 2022',
    'title-en': 'First job in a company',
    'title-es': 'Primer trabajo en una empresa',
    'description-en':
      'At Celuweb I was the Full Stack Tech Lead until October 2024: I designed a modular platform with Clean Architecture for sales force and business management, mentored the frontend team and built key modules such as order and returns management, working with React and Go.',
    'description-es':
      'En Celuweb fui Líder Técnico Full Stack hasta octubre de 2024: diseñé una plataforma modular con Clean Architecture para fuerza de ventas y gestión empresarial, mentoricé al equipo de frontend y construí módulos clave como la gestión de pedidos y devoluciones, trabajando con React y Go.',
    tags: ['work'],
    image: '/timeline-6.webp',
    link: 'https://celuwebtech.com/'
  },
  {
    date: 'May 31, 2022',
    'title-en': 'Complete React course',
    'title-es': 'Curso completo de React',
    'description-en':
      'This course teaches everything from the fundamentals to advanced techniques for developing modern, scalable web applications using this powerful JavaScript library.',
    'description-es':
      'Este curso enseña todo desde los fundamentos hasta técnicas avanzadas para desarrollar aplicaciones web modernas y escalables utilizando esta poderosa biblioteca de JavaScript.',
    tags: ['certifications'],
    image: '/timeline-7.webp',
    link: 'https://www.udemy.com/certificate/UC-ed060645-536a-44cb-b932-81a7cc4f983e/'
  },
  {
    date: 'Sep 11, 2022',
    'title-en': 'Typescript complete',
    'title-es': 'Typescript completo',
    'description-en':
      'This course explores everything from basic concepts to advanced techniques, teaching developers how to use static types, interfaces, decorators, and other features to improve the quality and maintainability.',
    'description-es':
      'Este curso explora todo desde conceptos básicos hasta técnicas avanzadas, enseñando a los desarrolladores cómo utilizar tipos estáticos, interfaces, decoradores y otras características para mejorar la calidad y mantenibilidad.',
    tags: ['certifications'],
    image: '/timeline-8.webp',
    link: 'https://www.udemy.com/certificate/UC-66bbd073-273b-461e-8eef-ac35c08e3d95/'
  },
  {
    date: 'Oct 30, 2022',
    'title-en': 'Go Basic',
    'title-es': 'Go Básico',
    'description-en':
      'This course introduces the essential fundamentals of the language, covering data structures, concurrency, error handling, and unique features such as goroutines and pipelines to develop efficient and scalable applications.',
    'description-es':
      'Este curso introduce los fundamentos esenciales del lenguaje, cubriendo estructuras de datos, concurrencia, manejo de errores y características únicas como goroutines y pipelines para desarrollar aplicaciones eficientes y escalables.',
    tags: ['certifications'],
    image: '/timeline-9.webp',
    link: 'https://platzi.com/p/rarojasf/curso/2232-programacion-golang/diploma/detalle/'
  },
  {
    date: 'Oct 31, 2022',
    'title-en': 'Go - server web',
    'title-es': 'Go - servidor web',
    'description-en':
      'This course teaches everything from basic configuration to advanced implementation of RESTful APIs, middleware, HTTP request handling and efficient resource management for scalable web applications.',
    'description-es':
      'Este curso enseña todo desde la configuración básica hasta la implementación avanzada de APIs RESTful, middleware, manejo de peticiones HTTP y gestión eficiente de recursos para aplicaciones web escalables.',
    tags: ['certifications'],
    image: '/timeline-10.webp',
    link: 'https://platzi.com/p/rarojasf/curso/1846-programacion-golang-2020/diploma/detalle/'
  },
  {
    date: 'Nov 7, 2022',
    'title-en': 'Go - OOP and concurrency',
    'title-es': 'Go - POO y concurrencia',
    'description-en':
      'This course explores how to design and develop applications using object-oriented programming principles along with advanced concurrency features such as goroutines and channels to maximize performance and efficiency.',
    'description-es':
      'Este curso explora cómo diseñar y desarrollar aplicaciones utilizando principios de programación orientada a objetos junto con características avanzadas de concurrencia como goroutines y channels para maximizar el rendimiento y la eficiencia.',
    tags: ['certifications'],
    image: '/timeline-11.webp',
    link: 'https://platzi.com/p/rarojasf/curso/2357-golang-intermedio/diploma/detalle/'
  },
  {
    date: 'Mar 1, 2023',
    'title-en': 'Frontend Tech Lead at Tus Trámites VIP',
    'title-es': 'Líder Técnico Frontend en Tus Trámites VIP',
    'description-en':
      'I led the frontend of a GovTech platform to digitize government procedures in Ecuador, supervising a team of two developers, defining the architecture and building the procedure management flow and the admin panel.',
    'description-es':
      'Lideré el frontend de una plataforma GovTech para digitalizar trámites gubernamentales en Ecuador, supervisando un equipo de dos desarrolladores, definiendo la arquitectura y construyendo la gestión de trámites y el panel administrativo.',
    tags: ['work'],
    image: '/project-2.webp',
    link: 'https://www.linkedin.com/in/joan-rojas-mejia/'
  },
  {
    date: 'Jun 1, 2024',
    'title-en': 'Systems Engineering degree',
    'title-es': 'Título de Ingeniería de Sistemas',
    'description-en': 'I graduated as a Systems Engineer from Universidad del Quindío.',
    'description-es': 'Me gradué como Ingeniero de Sistemas de la Universidad del Quindío.',
    tags: ['education'],
    link: 'https://www.linkedin.com/in/joan-rojas-mejia/details/education/'
  },
  {
    date: 'Oct 1, 2024',
    'title-es': 'Creación de páginas web con Astro',
    'title-en': 'Creating web pages with Astro',
    'description-es':
      'Este curso enseña a desarrollar sitios rápidos y optimizados, utilizando componentes modernos, integraciones con frameworks populares y técnicas avanzadas de rendimiento para crear experiencias web eficientes y escalables.',
    'description-en':
      'This course teaches how to develop fast and optimized sites, using modern components, integrations with popular frameworks and advanced performance techniques to create efficient and scalable web experiences.',
    tags: ['certifications'],
    image: '/timeline-12.webp',
    link: 'https://platzi.com/p/sebas.rojas.mejia/curso/6207-astro/diploma/detalle/'
  },
  {
    date: 'Oct 15, 2024',
    'title-es': 'Llegada a Global66',
    'title-en': 'Arrival at Global66',
    'description-es':
      'Ingreso a Global66 como Desarrollador Frontend Senior. Lidero el frontend de iniciativas core del negocio B2B: construí desde cero el Multienvío, reconstruí el onboarding de empresas con KYC y lectura de documentos con IA, y consolidé el Design System corporativo.',
    'description-en':
      'I joined Global66 as a Senior Frontend Developer. I lead the frontend of core B2B initiatives: I built Multienvío (bulk transfers) from scratch, rebuilt the business onboarding with KYC and AI document reading, and consolidated the corporate Design System.',
    tags: ['work'],
    image: '/timeline-13.webp',
    link: 'https://global66.com/'
  },
  {
    date: 'Jun 2, 2025',
    'title-es': 'Curso de Docker para desarrolladores',
    'title-en': 'Docker Course for Developers',
    'description-es':
      'Este curso enseña a utilizar Docker para crear, desplegar y gestionar aplicaciones de manera eficiente, cubriendo desde la creación de contenedores hasta la orquestación con Docker Compose y Kubernetes.',
    'description-en':
      'This course teaches how to use Docker to efficiently create, deploy, and manage applications, covering everything from container creation to orchestration with Docker Compose and Kubernetes.',
    tags: ['certifications'],
    image: '/timeline-14.webp',
    link: 'https://www.udemy.com/certificate/UC-797a3823-b4e2-461a-873d-70da0eef4dd9/'
  },
  {
    date: 'Nov 28, 2025',
    'title-en': 'Academic English B2',
    'title-es': 'Inglés académico nivel B2',
    'description-en':
      'I completed the Academic English B2 program at the Language Center of Universidad Pedagógica Nacional, to work with international teams.',
    'description-es':
      'Terminé el programa de Conocimientos Académicos en Inglés nivel B2 del Centro de Lenguas de la Universidad Pedagógica Nacional, para trabajar con equipos internacionales.',
    tags: ['education'],
    image: '/timeline-15.webp',
    link: 'https://www.linkedin.com/in/joan-rojas-mejia/details/education/'
  },
  {
    date: 'Jan 1, 2026',
    'title-en': 'Economics at Universidad Jorge Tadeo Lozano',
    'title-es': 'Economía en la Universidad Jorge Tadeo Lozano',
    'description-en':
      'I started a degree in Economics to strengthen the business side of my product vision.',
    'description-es':
      'Empecé la carrera de Economía para fortalecer la parte de negocio de mi visión de producto.',
    tags: ['education'],
    image: '/timeline-16.webp',
    link: 'https://www.linkedin.com/in/joan-rojas-mejia/details/education/'
  }
]
