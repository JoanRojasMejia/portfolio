export interface TechnologyAndFramework {
  name: string
  logo: string
  'description-en': string
  'description-es': string
  url?: string
}

export const technologiesAndFrameworks: TechnologyAndFramework[] = [
  {
    name: 'JavaScript',
    logo: '/javascript.webp',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    'description-en':
      'It is a programming language primarily used in web browsers to create interactivity and dynamism on web pages.',
    'description-es':
      'Es un lenguaje de programación utilizado principalmente en navegadores web para crear interactividad y dinamismo en las páginas.'
  },

  {
    name: 'React',
    logo: '/react.webp',
    url: 'https://reactjs.org/',
    'description-en':
      'It is a JavaScript library for creating interactive and efficient user interfaces with reusable and declarative components.',
    'description-es':
      'Es una biblioteca JavaScript para crear interfaces de usuario interactivas y eficientes con componentes reutilizables y declarativos.'
  },
  {
    name: 'Vue',
    logo: '/vue.webp',
    url: 'https://vuejs.org/',
    'description-en': 'It is a Javascript framework that uses "high decoupling", which allows to progressively create user interfaces.',
    'description-es':
    'Es un framework de Javascript que utiliza "alto desacoplamiento", lo que permite crear progresivamente interfaces de usuario.'
  },
  {
    name: 'TypeScript',
    logo: '/typescript.webp',
    url: 'https://www.typescriptlang.org/',
    'description-en':
      'It is a typed superset of JavaScript that enhances the scalability and maintainability of web applications.',
    'description-es':
      'Es un superconjunto tipado de JavaScript que mejora la escalabilidad y mantenibilidad de aplicaciones web.'
  },
  {
    name: 'Next.js',
    logo: '/next.webp',
    url: 'https://nextjs.org/',
    'description-en':
      'It is a React framework that facilitates the creation of fast and scalable web applications.',
    'description-es':
      'Es un framework de React que facilita la creación de aplicaciones web rápidas y escalables.'
  },
  {
    name: 'Tailwind CSS',
    logo: '/tailwind.webp',
    url: 'https://tailwindcss.com/',
    'description-en':
      'It is a utility-first CSS framework that makes it easy to create customizable and responsive web interfaces.',
    'description-es':
      'Es un framework de CSS utilitario que facilita la creación de interfaces web personalizables y responsivas.'
  },
  {
    name: 'Node.js',
    logo: '/node.webp',
    url: 'https://nodejs.org/',
    'description-en':
      'It is a JavaScript runtime environment based on the V8 engine, used for building scalable backend applications.',
    'description-es':
      'Es un entorno de ejecución de JavaScript basado en el motor V8, utilizado para construir aplicaciones backend escalables.'
  },
  {
    name: 'GraphQL',
    logo: '/graphql.webp',
    url: 'https://graphql.org/',
    'description-en':
      'It is a query language for APIs that allows clients to request specific data efficiently.',
    'description-es':
      'Es un lenguaje de consulta para APIs que permite a los clientes solicitar datos específicos de manera eficiente.'
  },
  {
    name: 'PHP',
    logo: '/php.webp',
    url: 'https://www.php.net/',
    'description-en':
      'It is a programming language widely used in web development to create dynamic content in applications and websites.',
    'description-es':
      'Es un lenguaje de programación ampliamente utilizado en el desarrollo web para crear contenido dinámico en aplicaciones y sitios.'
  },
  {
    name: 'MongoDB',
    logo: '/mongodb.webp',
    url: 'https://www.mongodb.com/',
    'description-en': 'It is a NoSQL database that uses JSON documents to store data flexibly.',
    'description-es':
      'Es una base de datos NoSQL que usa documentos JSON para almacenar datos de manera flexible.'
  },
  {
    name: 'Docker',
    logo: '/docker.webp',
    url: 'https://www.docker.com/',
    'description-en':
      'It is a tool that simplifies the creation and management of containers for software applications.',
    'description-es':
      'Es una herramienta que simplifica la creación y gestión de contenedores para aplicaciones software.'
  },
  {
    name: 'Go',
    logo: '/go.webp',
    url: 'https://golang.org/',
    'description-en':
      'It is a programming language designed for concurrency and efficiency in distributed systems.',
    'description-es':
      'Es un lenguaje de programación diseñado para la concurrencia y la eficiencia en sistemas distribuidos.'
  },
  {
    name: 'Astro',
    logo: '/astro.webp',
    url: 'https://astro.build/',
    'description-en':
      'It is a framework for building web applications that efficiently combines static and dynamic rendering.',
    'description-es':
      'Es un marco de trabajo para construir aplicaciones web que combina renderización estática y dinámica eficientemente.'
  },
  {
    name: 'Sass',
    logo: '/sass.webp',
    url: 'https://sass-lang.com/',
    'description-en':
      'It is a CSS preprocessor that allows for writing more efficient and maintainable styles using variables and functions.',
    'description-es':
      'Es un preprocesador de CSS que permite escribir estilos más eficientes y mantenibles utilizando variables y funciones.'
  },
  {
    name: 'Laravel',
    logo: '/laravel.webp',
    url: 'https://laravel.com/',
    'description-en':
      'It is a PHP framework that offers an elegant structure and powerful tools for modern web development.',
    'description-es':
      'Es un framework de PHP que ofrece una estructura elegante y herramientas poderosas para el desarrollo web moderno.'
  }
]

export const tools: TechnologyAndFramework[] = [
  {
    name: 'VS Code',
    logo: '/vscode.webp',
    url: 'https://code.visualstudio.com/',
    'description-en':
      'It is a versatile and lightweight code editor, ideal for developing modern software and web applications.',
    'description-es':
      'Es un editor de código versátil y ligero, ideal para desarrollar software y aplicaciones web modernas.'
  },
  {
    name: 'Git',
    logo: '/git.webp',
    url: 'https://git-scm.com/',
    'description-en':
      'It is a distributed version control system, crucial for tracking and collaborating on software projects.',
    'description-es':
      'Es un sistema de control de versiones distribuido, crucial para el seguimiento y colaboración en proyectos de software.'
  },
  {
    name: 'Apple music',
    logo: '/music.webp',
    url: 'https://music.apple.com/',
    'description-en':
      'It is a music streaming service that offers access to millions of songs and exclusive content.',
    'description-es':
      'Es un servicio de streaming de música que ofrece acceso a millones de canciones y contenido exclusivo.'
  },
  {
    name: 'Discord',
    logo: '/discord.webp',
    url: 'https://discord.com/',
    'description-en':
      'It is a communication platform for online communities, popular among gamers and diverse social groups.',
    'description-es':
      'Es una plataforma de comunicación para comunidades en línea, popular entre gamers y grupos sociales diversos.'
  },
  {
    name: 'Obsidian',
    logo: '/obsidian.webp',
    url: 'https://obsidian.md/',
    'description-en':
      'It is a Markdown-based note-taking and knowledge software, designed for advanced personal organization and productivity.',
    'description-es':
      'Es un software de notas y conocimiento basado en Markdown, diseñado para organización y productividad personal avanzada.'
  },
  {
    name: 'Teams',
    logo: '/teams.webp',
    url: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software',
    'description-en':
      'It is a comprehensive Microsoft business collaboration platform, ideal for remote work and efficient communication.',
    'description-es':
      'Es una plataforma integral de colaboración empresarial de Microsoft, ideal para trabajo remoto y comunicación eficiente.'
  }
]

export const devices: TechnologyAndFramework[] = [
  {
    name: 'MacBook Pro M1 Pro',
    logo: '/macbook.webp',
    'description-en':
      'It is a powerful laptop with Apple M1 Pro chip, ideal for creative professionals.',
    'description-es':
      'Es una laptop potente con el chip M1 Pro de Apple, ideal para profesionales creativos.'
  },
  {
    name: 'iPhone 13',
    logo: '/iphone.webp',
    'description-en':
      'It is an Apple mobile phone that offers significant improvements in camera, performance, battery life, and design.',
    'description-es':
      'Es un teléfono móvil de Apple que ofrece mejoras significativas en cámara, rendimiento, duración de batería y diseño.'
  },
  {
    name: 'Magic Keyboard',
    logo: '/keyboard.webp',
    'description-en':
      'It is a stylish and functional wireless keyboard designed for devices like iPad.',
    'description-es':
      'Es un teclado inalámbrico elegante y funcional diseñado para dispositivos como iPad.'
  },
  {
    name: 'Magic Mouse',
    logo: '/mouse.webp',
    'description-en':
      'It is a wireless mouse with multitouch technology and ergonomic design for Mac.',
    'description-es':
      'Es un ratón inalámbrico con tecnología multitouch y diseño ergonómico para Mac.'
  },
  {
    name: 'Screen Janus',
    logo: '/screen.webp',
    'description-en':
      'It is a monitor with high resolution and accurate colors for professional use.',
    'description-es': 'Es un monitor con alta resolución y colores precisos para uso profesional.'
  },
  {
    name: 'Sony WH-1000XM4',
    logo: '/headphone.webp',
    'description-en':
      'They are wireless headphones with noise cancellation and exceptional sound quality for demanding users.',
    'description-es':
      'Son auriculares inalámbricos con cancelación de ruido y calidad de sonido excepcional para usuarios exigentes.'
  }
]
