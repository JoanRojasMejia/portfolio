export interface Timeline {
  date: string
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

export const timelines: Timeline[] = [
  {
    date: 'Jun 28, 2021',
    title: 'Start in programming',
    // title: 'Inicio en la programación',
    description:
      'I made my first introductions to the world of programming in two engineering courses based on the languages ​​C++, Javascript, CSS and HTML.',
    // description: 'Realice mis primeros acercamientos al mundo de la programación en dos cursos de ingeniería basados en los lenguajes C++, Javascript, CSS y HTML.',
    tags: ['certifications'],
    image: '/timeline-1.webp',
    link: 'https://www.linkedin.com/in/joan-rojas-mejia/details/education/'
  },
  {
    date: 'Jul 24, 2021',
    title: 'OOP in various technologies',
    // title: 'POO en diversas tecnologías',
    description:
      'An object-oriented programming course teaches fundamental principles and advanced techniques for designing and developing software using paradigms such as encapsulation, inheritance, and polymorphism.',
    // description: 'Un curso de programación orientada a objetos enseña principios fundamentales y técnicas avanzadas para diseñar y desarrollar software utilizando paradigmas como encapsulamiento, herencia y polimorfismo.',
    tags: ['certifications'],
    image: '/timeline-2.webp',
    link: 'https://platzi.com/p/rarojasf/curso/1474-oop/diploma/detalle/'
  },
  {
    date: 'Jul 25, 2021',
    title: 'Javascript basic',
    // title: 'Javascript básico',
    description:
      'This course introduces the essential fundamentals of the language, covering variables, control structures, functions and DOM manipulation, essential to begin developing interactive web applications.',
    // description: 'Este curso introduce los fundamentos esenciales del lenguaje, cubriendo variables, estructuras de control, funciones y manipulación del DOM, esenciales para comenzar a desarrollar aplicaciones web interactivas.',
    tags: ['certifications'],
    image: '/timeline-3.webp',
    link: 'https://platzi.com/p/rarojasf/curso/1814-basico-javascript/diploma/detalle/'
  },
  {
    date: 'Jul 27, 2021',
    title: 'EcmaScript 6',
    description:
      'This course explores modern JavaScript features, such as arrow functions, destructuring, classes, async/await, and modules, improving the ability to develop more efficient and structured web applications.',
    // description: 'Este curso explora características modernas de JavaScript, como funciones de flecha, destructuración, clases, async/await y módulos, mejorando la capacidad de desarrollar aplicaciones web más eficientes y estructuradas.',
    tags: ['certifications'],
    image: '/timeline-4.webp',
    link: 'https://platzi.com/p/rarojasf/curso/1815-ecmascript-6/diploma/detalle/'
  },
  {
    date: 'Nov 15, 2021',
    title: 'First job as a freelancer',
    // title: 'Primer trabajo como freelancer',
    description:
      'Work for a blockchain (video game) project called Cryptoplants Club using technologies such as HTML, CSS and Javascript.',
    // description: 'Trabaje para un proyecto de blockchain (videojuego) llamado Cryptoplants Club en el que utilice tecnologías como HTML, CSS y Javascript.',
    tags: ['work'],
    image: '/timeline-5.webp',
    link: 'https://www.linkedin.com/in/joan-rojas-mejia/'
  },
  {
    date: 'Feb 1, 2022',
    title: 'First job in a company',
    description:
      'This is my current job in which I have the position of frontend development leader, and I develop web applications for the sales force for different companies; I work with React and Go.',
    // description: 'Este es mi trabajo actual en el que tengo el cargo de líder de desarrollo frontend, y desarrollo aplicaciones web para la fuerza de ventas para diferentes empresas; trabajo con React y Go.',
    tags: ['work'],
    image: '/timeline-6.webp',
    link: 'https://celuwebtech.com/'
  },
  {
    date: 'May 31, 2022',
    title: 'Complete React course',
    description:
      'This course teaches everything from the fundamentals to advanced techniques for developing modern, scalable web applications using this powerful JavaScript library.',
    // description: 'Este curso enseña todo desde los fundamentos hasta técnicas avanzadas para desarrollar aplicaciones web modernas y escalables utilizando esta poderosa biblioteca de JavaScript.',
    tags: ['certifications'],
    image: '/timeline-7.webp',
    link: 'https://www.udemy.com/certificate/UC-ed060645-536a-44cb-b932-81a7cc4f983e/'
  },
  {
    date: 'Sep 11, 2022',
    title: 'Typescript complete',
    // title: 'Typescript completo',
    description:
      'This course explores everything from basic concepts to advanced techniques, teaching developers how to use static types, interfaces, decorators, and other features to improve the quality and maintainability.',
    // description: 'Este curso explora todo desde conceptos básicos hasta técnicas avanzadas, enseñando a los desarrolladores cómo utilizar tipos estáticos, interfaces, decoradores y otras características para mejorar la calidad y mantenibilidad.',
    tags: ['certifications'],
    image: '/timeline-8.webp',
    link: 'https://www.udemy.com/certificate/UC-66bbd073-273b-461e-8eef-ac35c08e3d95/'
  },
  {
    date: 'Oct 30, 2022',
    title: 'Go Basic',
    // title: 'Go Básico',
    description:
      'This course introduces the essential fundamentals of the language, covering data structures, concurrency, error handling, and unique features such as goroutines and pipelines to develop efficient and scalable applications.',
    // description: 'Este curso introduce los fundamentos esenciales del lenguaje, cubriendo estructuras de datos, concurrencia, manejo de errores y características únicas como goroutines y pipelines para desarrollar aplicaciones eficientes y escalables.',
    tags: ['certifications'],
    image: '/timeline-9.webp',
    link: 'https://platzi.com/p/rarojasf/curso/2232-programacion-golang/diploma/detalle/'
  },
  {
    date: 'Oct 31, 2022',
    title: 'Go - server web',
    // title: 'Go Básico',
    description:
      'This course teaches everything from basic configuration to advanced implementation of RESTful APIs, middleware, HTTP request handling and efficient resource management for scalable web applications.',
    // description: 'Este curso enseña todo desde la configuración básica hasta la implementación avanzada de APIs RESTful, middleware, manejo de peticiones HTTP y gestión eficiente de recursos para aplicaciones web escalables.',
    tags: ['certifications'],
    image: '/timeline-10.webp',
    link: 'https://platzi.com/p/rarojasf/curso/1846-programacion-golang-2020/diploma/detalle/'
  },
  {
    date: 'Nov 7, 2022',
    title: 'Go - OOP and concurrency',
    // title: 'Go - POO y concurrencia',
    description:
      'This course explores how to design and develop applications using object-oriented programming principles along with advanced concurrency features such as goroutines and channels to maximize performance and efficiency.',
    // description: 'Este curso explora cómo diseñar y desarrollar aplicaciones utilizando principios de programación orientada a objetos junto con características avanzadas de concurrencia como goroutines y channels para maximizar el rendimiento y la eficiencia.',
    tags: ['certifications'],
    image: '/timeline-11.webp',
    link: 'https://platzi.com/p/rarojasf/curso/2357-golang-intermedio/diploma/detalle/'
  }
]
