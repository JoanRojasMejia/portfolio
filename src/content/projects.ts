export interface Project {
  id: string
  'title-en': string
  'title-es'?: string
  'description-en': string
  'description-es'?: string
  image: string
  tags: string[]
  state: 'public' | 'private'
  images: string[]
  year?: number | string
  'firstParagraph-en'?: string
  'firstParagraph-es'?: string
  'secondParagraph-en'?: string
  'secondParagraph-es'?: string
  'thirdParagraph-en'?: string
  'thirdParagraph-es'?: string
  'fourthParagraph-en'?: string
  'fourthParagraph-es'?: string
  link?: string
}

export const projects: Project[] = [
  {
    id: '1',
    'title-en': 'Sales force',
    'title-es': 'Fuerza de ventas',
    'description-en': 'Dynamic application for sales force and reporting adaptable to any company.',
    'description-es':
      'Aplicación dinámica para fuerza de ventas y reportes adaptable a cualquier empresa.',
    image: '/project-1.webp',
    tags: ['React', 'Sass', 'TypeScript', 'GraphQL', 'Git'],
    state: 'private',
    year: '2022 - now',
    'firstParagraph-en': `This project aims to comprehensively improve the operations of companies dedicated to the export of food and raw materials. 
      Key aspects addressed include: order management, user administration on the platform, integrations with external systems, report generation, 
      dashboard creation, route tracking through maps, and various additional operational tools. My role as leader of the frontend development team 
      included managing the project architecture, general organization, user interface development, and integration with the backend. In addition, 
      I carried out specific implementations in essential modules, such as order management, integrations, and administration, contributing significantly 
      to the success of the project.`,
    'firstParagraph-es': `Este proyecto tiene como objetivo mejorar de manera integral las operaciones de empresas dedicadas a la exportación de alimentos y materias primas. 
      Entre los aspectos clave que se abordaron están: la gestión de pedidos, la administración de usuarios en la plataforma, integraciones con sistemas externos, generación de reportes, 
      creación de dashboards, seguimiento de recorridos a través de mapas, y diversas herramientas operativas adicionales. Mi rol como líder del equipo de desarrollo frontend incluyó la gestión 
      de la arquitectura del proyecto, la organización general, el desarrollo de interfaces de usuario, y la integración con el backend. Además, realicé implementaciones 
      específicas en módulos esenciales, como la gestión de pedidos, integraciones y administración, contribuyendo de manera significativa al éxito del proyecto.`,
    'secondParagraph-en': `For this project I implemented Clean Architecture, which allowed for a modular, scalable, and easy-to-maintain structure. 
      I divided the work into three layers: the domain, which contains the core business logic; the infrastructure, which manages communication with the 
      backend through repositories; and the UI, developed in React JS, where the framework is abstracted to ensure component reuse. This organization ensures 
      independence between layers, facilitates future expansions, and maintains the integrity of the project over time.`,
    'secondParagraph-es': `Para este proyecto implementé Clean Architecture, lo que permitió una estructura modular, escalable y fácil de mantener. 
      Dividí el trabajo en tres capas: el dominio, que contiene la lógica central del negocio; la infraestructura, que gestiona la comunicación con el backend 
      a través de repositorios; y la UI, desarrollada en React JS, donde se abstrae el framework para garantizar la reutilización de componentes. Esta organización 
      asegura la independencia entre capas, facilita futuras expansiones y mantiene la integridad del proyecto a lo largo del tiempo.
    `,
    'thirdParagraph-en': `I developed a fundamental modular integrations module that consists of two key parts: configuration and execution. 
      Configuration allows setting the necessary parameters for integrations through an intuitive graphical user interface. Execution processes and 
      transforms data coming from files such as Excel, CSV or TXT, as well as from databases, to store and organize them in the application database, 
      ensuring an efficient and structured integration.`,
    'thirdParagraph-es': `Desarrollé un módulo fundamental de integraciones modulares que se compone de dos partes clave: configuración y ejecución. La configuración permite establecer 
      los parámetros necesarios para las integraciones a través de una interfaz gráfica de usuario intuitiva. La ejecución procesa y transforma los datos provenientes de archivos como Excel,
      CSV o TXT, así como de bases de datos, para almacenarlos y organizarlos en la base de datos de la aplicación, asegurando una integración eficiente y estructurada.`,
    'fourthParagraph-en': `Other key modules I developed include the administrators module, which manages and configures database information through SQL queries or tables; 
      the order management module, which handles all aspects related to purchase orders, returns, reasons for non-purchase, and collections generated by sales; and the maps module, 
      which graphically displays the routes of sellers in various cities in Colombia, providing a clear and useful representation for logistics analysis.`,
    'fourthParagraph-es': `Otros modulos clave que desarrollé incluyen el módulo de administradores, que gestiona y configura la información de las bases de datos a través de consultas SQL o 
      tablas; el módulo de gestión de pedidos, que maneja todos los aspectos relacionados con las órdenes de compra, devoluciones, motivos de no compra y recaudos generados por las ventas; y 
      el módulo de mapas, que visualiza gráficamente los recorridos de los vendedores en diversas ciudades de Colombia, proporcionando una representación clara y útil para el análisis logístico.`,
    images: ['/project-1-1.webp', '/project-1-2.webp', '/project-1-3.webp']
  },
  {
    id: '2',
    'title-en': 'Dynamic components',
    'title-es': 'Componentes dinámicos',
    'description-en': 'Library of dynamic components adapted for information visualization.',
    'description-es':
      'Librería de componentes dinámicos adaptados para visualizacion de información.',
    image: '/project-2.webp',
    tags: ['React', 'Sass', 'TypeScript', 'Git'],
    state: 'private',
    year: '2023 - now',
    'firstParagraph-en': `The Dynamic Components Library was developed as a solution to a significant challenge in the sales force project: code repetition 
      in multiple parts of the system. In order to streamline development and maintain consistency, we decided to create a library that would facilitate code 
      reuse and dynamic component generation. To implement this solution, we employed a combination of advanced technologies, including React for component 
      creation, Storybook for display in a development environment, and Rollup for component optimization and packaging. This strategy not only enabled increased 
      development efficiency, but also improved the maintainability and scalability of the project by reducing redundancy and centralizing component management.`,
    'firstParagraph-es': `La librería de componentes dinámicos se desarrolló como una solución para un desafío significativo en el proyecto 
      de fuerza de ventas: la repetición de código en múltiples partes del sistema. Con el fin de optimizar el desarrollo y mantener la consistencia, 
      decidimos crear una librería que facilitara la reutilización del código y la generación de componentes de forma dinámica. Para llevar a cabo esta 
      solución, empleamos una combinación de tecnologías avanzadas, incluyendo React para la creación de los componentes, Storybook para su visualización 
      en un entorno de desarrollo, y Rollup para la optimización y empaquetado de los mismos. Esta estrategia no solo permitió una mayor eficiencia en el 
      desarrollo, sino que también mejoró la capacidad de mantenimiento y escalabilidad del proyecto al reducir la redundancia y centralizar la gestión de componentes.`,
    'secondParagraph-en': `Within the dynamic component library, the most notable component is the dynamic report component, which stands out for being the most complex 
      and versatile of the entire collection. This component is composed of a series of dynamic subcomponents that work together to offer a flexible and adaptive presentation 
      of various types of reports. Its design allows the generation of reports in real time, integrating multiple display formats, including dynamic tables, graphs of various 
      types and interactive maps. Thanks to its ability to effectively manage and display data, the dynamic report component not only facilitates the interpretation of 
      information, but also improves decision making by providing a comprehensive and personalized view of the data.`,
    'secondParagraph-es': `Dentro de la librería de componentes dinámicos, el componente más destacado es el componente de reporte dinámico, que se distingue por 
      ser el más complejo y versátil de toda la colección. Este componente está compuesto por una serie de subcomponentes dinámicos que trabajan en conjunto para 
      ofrecer una presentación flexible y adaptativa de diversos tipos de reportes. Su diseño permite la generación de informes en tiempo real, integrando múltiples 
      formatos de visualización, incluyendo tablas dinámicas, gráficos de variados tipos y mapas interactivos. Gracias a su capacidad para manejar y mostrar datos de 
      manera efectiva, el componente de reporte dinámico no solo facilita la interpretación de la información, sino que también mejora la toma de decisiones al 
      proporcionar una vista integral y personalizada de los datos.`,
    'thirdParagraph-en': `In addition to the dynamic report component, the library includes other equally important dynamic components. The dynamic table component 
      offers an orderly and categorized way of presenting data, facilitating its analysis and understanding. The dynamic map component allows the data to be visualized 
      on an interactive map, providing a geospatial perspective of the information. Finally, the dynamic filters component offers the flexibility to apply different 
      configurations to customize the filters to be applied to the data, thus optimizing the visualization and analysis of the information according to the specific 
      needs of the user. These components work together to provide a rich and versatile user experience, adapting to various forms of data presentation.`,
    'thirdParagraph-es': `Además del componente de reporte dinámico, la librería incluye otros componentes dinámicos igualmente importantes. El componente de 
      tabla dinámica ofrece una forma ordenada y categorizada de presentar datos, facilitando su análisis y comprensión. El componente de mapa dinámico permite 
      visualizar los datos en un mapa interactivo, proporcionando una perspectiva geoespacial de la información. Por último, el componente de filtros dinámicos
      ofrece la flexibilidad de aplicar diferentes configuraciones para personalizar los filtros que se desean aplicar a los datos, optimizando así la visualización 
      y el análisis de la información según las necesidades específicas del usuario. Estos componentes trabajan en conjunto para proporcionar una experiencia de 
      usuario rica y versátil, adaptándose a diversas formas de presentación de datos.`,
    images: ['/project-2-1.webp', '/project-2-2.webp'],
    link: 'https://dynamic-components-storybook.netlify.app/?path=/docs/example-dynamictable--docs'
  },
  {
    id: '3',
    'title-en': 'Apolo UI',
    'title-es': 'Apolo UI',
    'description-en': 'Reusable component library with system ui for react js.',
    'description-es': 'Librería de componentes reutilizables con sistema ui para react js.',
    image: '/project-3.webp',
    tags: ['React', 'Tailwindcss', 'TypeScript', 'Git'],
    state: 'public',
    year: '2024',
    'firstParagraph-en': `This project consists of a UI component library designed for building user interfaces in React JS. The initiative arose 
      to meet the need for a coherent design system that could effectively manage diverse projects both visually and functionally. Apolo UI was built 
      using advanced technologies such as React JS, Storybook, and Rollup, ensuring seamless integration and a robust development experience. I worked 
      on this library in collaboration with a team of developers, and it includes a wide range of essential UI components such as inputs, buttons, modals, 
      alerts, and more. This modular and adaptable approach allows developers to quickly implement consistent, high-quality interfaces in their projects.`,
    'firstParagraph-es': `Este proyecto consiste en una librería de componentes UI diseñada para la creación de interfaces de 
      usuario en React JS. La iniciativa surgió para satisfacer la necesidad de un sistema de diseño coherente que pudiera gestionar de 
      manera eficaz diversos proyectos tanto en términos visuales como funcionales. Apolo UI se construyó utilizando tecnologías avanzadas 
      como React JS, Storybook y Rollup, lo que garantiza una integración fluida y una experiencia de desarrollo robusta. Trabajé en esta 
      librería en colaboración con un equipo de desarrolladores, y la misma incluye una amplia gama de componentes esenciales para el diseño 
      de interfaces, tales como inputs, botones, modales, alertas y más. Este enfoque modular y adaptable permite a los desarrolladores 
      implementar rápidamente interfaces consistentes y de alta calidad en sus proyectos.`,
    'secondParagraph-en': `Among the most notable components I developed in this library is an image gallery with interactive file upload functionality. 
    This component is not only aesthetically pleasing, but also fluidly adapts to any resolution, ensuring a consistent visual experience across multiple devices. 
    Additionally, I included a sophisticated dropdown component, which features a drop-down menu with smooth animations, designed using Framer Motion. This component 
    offers multiple customization options, allowing developers to fine-tune its appearance and behavior to the specific needs of the project. Both components demonstrate 
    the library’s ability to combine advanced functionality with an elegant, responsive design.`,
    'secondParagraph-es': `Entre los componentes más destacados que desarrollé en esta librería se encuentra una galería de imágenes con una 
      funcionalidad de subida de archivos interactiva. Este componente no solo es estéticamente atractivo, sino que también se adapta de manera 
      fluida a cualquier resolución, garantizando una experiencia visual consistente en diversos dispositivos. Además, incluí un sofisticado componente de 
      dropdown, que presenta un menú desplegable con animaciones suaves, diseñadas utilizando Framer Motion. Este componente ofrece múltiples opciones de 
      personalización, permitiendo a los desarrolladores ajustar su apariencia y comportamiento según las necesidades específicas del proyecto. 
      Ambos componentes demuestran la capacidad de la librería para combinar funcionalidad avanzada con un diseño elegante y adaptable.`,
    images: ['/project-3-1.webp'],
    link: 'https://www.npmjs.com/package/@tingenio/apolo-ui'
  },
  {
    id: '4',
    'title-en': 'ASED',
    'title-es': 'ASED',
    'description-en': 'Business management for an exterior design company',
    'description-es': 'Gestion de negocio para una compañia de diseño de exteriores.',
    image: '/project-4.webp',
    tags: ['Nextjs', 'Tailwindcss', 'TypeScript', 'Git'],
    state: 'private',
    year: '2024',
    'firstParagraph-en': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu bibendum nulla. Nullam 
      facilisis porta sem quis interdum. Suspendisse rutrum ex sem, et rhoncus nunc posuere eget. Curabitur 
      arius augue lectus, quis condimentum enim pretium ac. Pellentesque maximus vestibulum enim non luctus. 
      Maecenas tellus sem, commodo id mi sed, bibendum euismod urna. Nam metus sapien, venenatis id feugiat eget, 
      sollicitudin a elit. Ut hendrerit, risus eu rutrum maximus, risus sapien auctor dui, eu efficitur metus odio a augue. 
      Cras lacinia et massa vitae rutrum. Nam non cursus mi. Duis consectetur, enim vel fermentum lobortis, dolor augue gravida massa, 
      ut consectetur enim ex sed felis. Donec sed massa varius, mattis purus nec, bibendum sapien. Vivamus at lacinia risus. 
      Phasellus nec turpis tortor.`,
    'firstParagraph-es': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu bibendum nulla. Nullam 
      facilisis porta sem quis interdum. Suspendisse rutrum ex sem, et rhoncus nunc posuere eget. Curabitur 
      arius augue lectus, quis condimentum enim pretium ac. Pellentesque maximus vestibulum enim non luctus. 
      Maecenas tellus sem, commodo id mi sed, bibendum euismod urna. Nam metus sapien, venenatis id feugiat eget, 
      sollicitudin a elit. Ut hendrerit, risus eu rutrum maximus, risus sapien auctor dui, eu efficitur metus odio a augue. 
      Cras lacinia et massa vitae rutrum. Nam non cursus mi. Duis consectetur, enim vel fermentum lobortis, dolor augue gravida massa, 
      ut consectetur enim ex sed felis. Donec sed massa varius, mattis purus nec, bibendum sapien. Vivamus at lacinia risus. 
      Phasellus nec turpis tortor.`,
    'secondParagraph-en': `Vestibulum posuere quis ante sit amet vulputate. In lorem sem, tempus id erat in, consectetur luctus turpis. Cras ac 
      risus odio. Etiam tempor ligula eu mi dapibus placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit 
      amet, consectetur adipiscing elit. Maecenas tristique justo id ante sagittis, vel placerat magna viverra. Morbi sodales urna vel arcu tincidunt, 
      a bibendum arcu tempor. Mauris vulputate rhoncus porttitor.`,
    'secondParagraph-es': `Vestibulum posuere quis ante sit amet vulputate. In lorem sem, tempus id erat in, consectetur luctus turpis. Cras ac 
      risus odio. Etiam tempor ligula eu mi dapibus placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit 
      amet, consectetur adipiscing elit. Maecenas tristique justo id ante sagittis, vel placerat magna viverra. Morbi sodales urna vel arcu tincidunt, 
      a bibendum arcu tempor. Mauris vulputate rhoncus porttitor.`,
    'thirdParagraph-en': `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at risus diam. Interdum et malesuada 
      fames ac ante ipsum primis in faucibus. Nunc eu posuere urna, quis fringilla ligula. In hac habitasse platea dictumst. Nulla facilisi. Fusce convallis
      lorem dui, vel porttitor mi facilisis nec. Nam ultrices sapien ac pretium facilisis.`,
    'thirdParagraph-es': `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at risus diam. Interdum et malesuada 
      fames ac ante ipsum primis in faucibus. Nunc eu posuere urna, quis fringilla ligula. In hac habitasse platea dictumst. Nulla facilisi. Fusce convallis
      lorem dui, vel porttitor mi facilisis nec. Nam ultrices sapien ac pretium facilisis.`,
    images: ['/project-4-1.webp', '/project-4-2.webp']
  },
  {
    id: '5',
    'title-en': 'Ecuadorian registry',
    'title-es': 'Registraduría ecuatoriana',
    'description-en': 'This is a description-en of project 2',
    image: '/project-5.webp',
    tags: ['React', 'Sass', 'JavaScript', 'Git'],
    state: 'private',
    year: '2023 - 2024',
    'firstParagraph-en': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu bibendum nulla. Nullam 
      facilisis porta sem quis interdum. Suspendisse rutrum ex sem, et rhoncus nunc posuere eget. Curabitur 
      arius augue lectus, quis condimentum enim pretium ac. Pellentesque maximus vestibulum enim non luctus. 
      Maecenas tellus sem, commodo id mi sed, bibendum euismod urna. Nam metus sapien, venenatis id feugiat eget, 
      sollicitudin a elit. Ut hendrerit, risus eu rutrum maximus, risus sapien auctor dui, eu efficitur metus odio a augue. 
      Cras lacinia et massa vitae rutrum. Nam non cursus mi. Duis consectetur, enim vel fermentum lobortis, dolor augue gravida massa, 
      ut consectetur enim ex sed felis. Donec sed massa varius, mattis purus nec, bibendum sapien. Vivamus at lacinia risus. 
      Phasellus nec turpis tortor.`,
    'firstParagraph-es': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu bibendum nulla. Nullam 
      facilisis porta sem quis interdum. Suspendisse rutrum ex sem, et rhoncus nunc posuere eget. Curabitur 
      arius augue lectus, quis condimentum enim pretium ac. Pellentesque maximus vestibulum enim non luctus. 
      Maecenas tellus sem, commodo id mi sed, bibendum euismod urna. Nam metus sapien, venenatis id feugiat eget, 
      sollicitudin a elit. Ut hendrerit, risus eu rutrum maximus, risus sapien auctor dui, eu efficitur metus odio a augue. 
      Cras lacinia et massa vitae rutrum. Nam non cursus mi. Duis consectetur, enim vel fermentum lobortis, dolor augue gravida massa, 
      ut consectetur enim ex sed felis. Donec sed massa varius, mattis purus nec, bibendum sapien. Vivamus at lacinia risus. 
      Phasellus nec turpis tortor.`,
    'secondParagraph-en': `Vestibulum posuere quis ante sit amet vulputate. In lorem sem, tempus id erat in, consectetur luctus turpis. Cras ac 
      risus odio. Etiam tempor ligula eu mi dapibus placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit 
      amet, consectetur adipiscing elit. Maecenas tristique justo id ante sagittis, vel placerat magna viverra. Morbi sodales urna vel arcu tincidunt, 
      a bibendum arcu tempor. Mauris vulputate rhoncus porttitor.`,
    'secondParagraph-es': `Vestibulum posuere quis ante sit amet vulputate. In lorem sem, tempus id erat in, consectetur luctus turpis. Cras ac 
      risus odio. Etiam tempor ligula eu mi dapibus placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit 
      amet, consectetur adipiscing elit. Maecenas tristique justo id ante sagittis, vel placerat magna viverra. Morbi sodales urna vel arcu tincidunt, 
      a bibendum arcu tempor. Mauris vulputate rhoncus porttitor.`,
    'thirdParagraph-en': `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at risus diam. Interdum et malesuada 
      fames ac ante ipsum primis in faucibus. Nunc eu posuere urna, quis fringilla ligula. In hac habitasse platea dictumst. Nulla facilisi. Fusce convallis
      lorem dui, vel porttitor mi facilisis nec. Nam ultrices sapien ac pretium facilisis.`,
    'thirdParagraph-es': `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at risus diam. Interdum et malesuada 
      fames ac ante ipsum primis in faucibus. Nunc eu posuere urna, quis fringilla ligula. In hac habitasse platea dictumst. Nulla facilisi. Fusce convallis
      lorem dui, vel porttitor mi facilisis nec. Nam ultrices sapien ac pretium facilisis.`,
    'fourthParagraph-en': `Donec libero purus, consequat at imperdiet eget, mollis nec dui. Fusce ut massa et odio bibendum maximus quis eu nisi. Proin lobortis 
      pharetra molestie. Maecenas sagittis eros feugiat mi malesuada maximus. Quisque ac purus dolor. Phasellus auctor diam sed sapien elementum tincidunt. 
      Nunc nisi est, dapibus sit amet finibus vel, egestas non felis. Nulla ultricies neque eu est consectetur euismod. Aenean consectetur molestie vestibulum. 
      Maecenas ut eleifend tortor. Nullam a leo turpis. Duis ante ipsum, sollicitudin tempor nisi ut, posuere luctus odio. Phasellus et sem mauris.`,
    'fourthParagraph-es': `Donec libero purus, consequat at imperdiet eget, mollis nec dui. Fusce ut massa et odio bibendum maximus quis eu nisi. Proin lobortis 
      pharetra molestie. Maecenas sagittis eros feugiat mi malesuada maximus. Quisque ac purus dolor. Phasellus auctor diam sed sapien elementum tincidunt. 
      Nunc nisi est, dapibus sit amet finibus vel, egestas non felis. Nulla ultricies neque eu est consectetur euismod. Aenean consectetur molestie vestibulum. 
      Maecenas ut eleifend tortor. Nullam a leo turpis. Duis ante ipsum, sollicitudin tempor nisi ut, posuere luctus odio. Phasellus et sem mauris.`,
    images: ['/project-5-1.webp', '/project-5-2.webp', '/project-5-3.webp']
  },
  {
    id: '6',
    'title-en': 'Backend Blog API',
    'title-es': 'API de blog backend',
    'description-en': 'This is a description-en of project 2',
    image: '/project-6.webp',
    tags: ['Php', 'Laravel', 'MongoDB', 'Git'],
    state: 'public',
    year: '2023',
    'firstParagraph-en': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu bibendum nulla. Nullam 
      facilisis porta sem quis interdum. Suspendisse rutrum ex sem, et rhoncus nunc posuere eget. Curabitur 
      arius augue lectus, quis condimentum enim pretium ac. Pellentesque maximus vestibulum enim non luctus. 
      Maecenas tellus sem, commodo id mi sed, bibendum euismod urna. Nam metus sapien, venenatis id feugiat eget, 
      sollicitudin a elit. Ut hendrerit, risus eu rutrum maximus, risus sapien auctor dui, eu efficitur metus odio a augue. 
      Cras lacinia et massa vitae rutrum. Nam non cursus mi. Duis consectetur, enim vel fermentum lobortis, dolor augue gravida massa, 
      ut consectetur enim ex sed felis. Donec sed massa varius, mattis purus nec, bibendum sapien. Vivamus at lacinia risus. 
      Phasellus nec turpis tortor.`,
    'firstParagraph-es': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu bibendum nulla. Nullam 
      facilisis porta sem quis interdum. Suspendisse rutrum ex sem, et rhoncus nunc posuere eget. Curabitur 
      arius augue lectus, quis condimentum enim pretium ac. Pellentesque maximus vestibulum enim non luctus. 
      Maecenas tellus sem, commodo id mi sed, bibendum euismod urna. Nam metus sapien, venenatis id feugiat eget, 
      sollicitudin a elit. Ut hendrerit, risus eu rutrum maximus, risus sapien auctor dui, eu efficitur metus odio a augue. 
      Cras lacinia et massa vitae rutrum. Nam non cursus mi. Duis consectetur, enim vel fermentum lobortis, dolor augue gravida massa, 
      ut consectetur enim ex sed felis. Donec sed massa varius, mattis purus nec, bibendum sapien. Vivamus at lacinia risus. 
      Phasellus nec turpis tortor.`,
    'secondParagraph-en': `Vestibulum posuere quis ante sit amet vulputate. In lorem sem, tempus id erat in, consectetur luctus turpis. Cras ac 
      risus odio. Etiam tempor ligula eu mi dapibus placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit 
      amet, consectetur adipiscing elit. Maecenas tristique justo id ante sagittis, vel placerat magna viverra. Morbi sodales urna vel arcu tincidunt, 
      a bibendum arcu tempor. Mauris vulputate rhoncus porttitor.`,
    'secondParagraph-es': `Vestibulum posuere quis ante sit amet vulputate. In lorem sem, tempus id erat in, consectetur luctus turpis. Cras ac 
      risus odio. Etiam tempor ligula eu mi dapibus placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit 
      amet, consectetur adipiscing elit. Maecenas tristique justo id ante sagittis, vel placerat magna viverra. Morbi sodales urna vel arcu tincidunt, 
      a bibendum arcu tempor. Mauris vulputate rhoncus porttitor.`,
    link: 'https://github.com/JoanRojasMejia/backend-blog',
    images: ['/project-6-1.webp']
  }
]
