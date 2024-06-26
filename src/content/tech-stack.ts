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
    'description-en': 'A programming language that conforms to the ECMAScript specification',
    'description-es':
      'Es un lenguaje de programación utilizado principalmente en navegadores web para crear interactividad y dinamismo en las páginas.'
  },

  {
    name: 'React',
    logo: '/react.webp',
    url: 'https://reactjs.org/',
    'description-en': 'A JavaScript library for building user interfaces',
    'description-es':
      'Es una biblioteca JavaScript para crear interfaces de usuario interactivas y eficientes con componentes reutilizables y declarativos.'
  },
  {
    name: 'TypeScript',
    logo: '/typescript.webp',
    url: 'https://www.typescriptlang.org/',
    'description-en': 'JavaScript that scales',
    'description-es':
      'Es un superconjunto tipado de JavaScript que mejora la escalabilidad y mantenibilidad de aplicaciones web.'
  },
  {
    name: 'Next.js',
    logo: '/next.webp',
    url: 'https://nextjs.org/',
    'description-en': 'The React Framework for Production',
    'description-es':
      'Es un framework de React que facilita la creación de aplicaciones web rápidas y escalables.'
  },
  {
    name: 'Tailwind CSS',
    logo: '/tailwind.webp',
    url: 'https://tailwindcss.com/',
    'description-en': 'A utility-first CSS framework',
    'description-es':
      'Es un framework de CSS utilitario que facilita la creación de interfaces web personalizables y responsivas.'
  },
  {
    name: 'Node.js',
    logo: '/node.webp',
    url: 'https://nodejs.org/',
    'description-en': "A JavaScript runtime built on Chrome's V8 JavaScript engine",
    'description-es':
      'Es un entorno de ejecución de JavaScript basado en el motor V8, utilizado para construir aplicaciones backend escalables.'
  },
  {
    name: 'GraphQL',
    logo: '/graphql.webp',
    url: 'https://graphql.org/',
    'description-en': 'A query language for your API',
    'description-es':
      'Es un lenguaje de consulta para APIs que permite a los clientes solicitar datos específicos de manera eficiente.'
  },
  {
    name: 'PHP',
    logo: '/php.webp',
    url: 'https://www.php.net/',
    'description-en':
      'A popular general-purpose scripting language that is especially suited to web development',
    'description-es':
      'Es un lenguaje de programación ampliamente utilizado en el desarrollo web para crear contenido dinámico en aplicaciones y sitios.'
  },
  {
    name: 'MongoDB',
    logo: '/mongodb.webp',
    url: 'https://www.mongodb.com/',
    'description-en': 'The most popular database for modern apps',
    'description-es':
      'Es una base de datos NoSQL que usa documentos JSON para almacenar datos de manera flexible.'
  },
  {
    name: 'Docker',
    logo: '/docker.webp',
    url: 'https://www.docker.com/',
    'description-en': 'Empowering App Development for Developers',
    'description-es':
      'Es una herramienta que simplifica la creación y gestión de contenedores para aplicaciones software.'
  },
  {
    name: 'Go',
    logo: '/go.webp',
    url: 'https://golang.org/',
    'description-en':
      'An open source programming language that makes it easy to build simple, reliable, and efficient software',
    'description-es':
      'Es un lenguaje de programación diseñado para la concurrencia y la eficiencia en sistemas distribuidos.'
  },
  {
    name: 'Astro',
    logo: '/astro.webp',
    url: 'https://astro.build/',
    'description-en': 'The fastest way to build modern websites',
    'description-es': 'Es un marco de trabajo para construir aplicaciones web que combina renderización estática y dinámica eficientemente.'
  },
  {
    name: 'Sass',
    logo: '/sass.webp',
    url: 'https://sass-lang.com/',
    'description-en': 'CSS with superpowers',
    'description-es': 'Es un preprocesador de CSS que permite escribir estilos más eficientes y mantenibles utilizando variables y funciones.'
  },
  {
    name: 'Laravel',
    logo: '/laravel.webp',
    url: 'https://laravel.com/',
    'description-en': 'The PHP Framework For Web Artisans',
    'description-es': 'Es un framework de PHP que ofrece una estructura elegante y herramientas poderosas para el desarrollo web moderno.'
  }
]

export const tools: TechnologyAndFramework[] = [
  {
    name: 'VS Code',
    logo: '/vscode.webp',
    url: 'https://code.visualstudio.com/',
    'description-en':
      'Code editor redefined and optimized for building and debugging modern web and cloud applications',
    'description-es':
      'Es un editor de código versátil y ligero, ideal para desarrollar software y aplicaciones web modernas.'
  },
  {
    name: 'Git',
    logo: '/git.webp',
    url: 'https://git-scm.com/',
    'description-en': 'A free and open source distributed version control system',
    'description-es': 'Es un sistema de control de versiones distribuido, crucial para el seguimiento y colaboración en proyectos de software.'
  },
  {
    name: 'Apple music',
    logo: '/music.webp',
    url: 'https://music.apple.com/',
    'description-en': '50 million songs. All ad-free',
    'description-es': 'Es un servicio de streaming de música que ofrece acceso a millones de canciones y contenido exclusivo.'
  },
  {
    name: 'Discord',
    logo: '/discord.webp',
    url: 'https://discord.com/',
    'description-en': 'Your place to talk',
    'description-es': 'Es una plataforma de comunicación para comunidades en línea, popular entre gamers y grupos sociales diversos.'
  },
  {
    name: 'Obsidian',
    logo: '/obsidian.webp',
    url: 'https://obsidian.md/',
    'description-en': 'A second brain, for you, forever',
    'description-es': 'Es un software de notas y conocimiento basado en Markdown, diseñado para organización y productividad personal avanzada.'
  },
  {
    name: 'Teams',
    logo: '/teams.webp',
    url: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software',
    'description-en': 'Chat, meet, call and collaborate',
    'description-es': 'Es una plataforma integral de colaboración empresarial de Microsoft, ideal para trabajo remoto y comunicación eficiente.'
  }
]

export const devices: TechnologyAndFramework[] = [
  {
    name: 'MacBook Pro M1 Pro',
    logo: '/macbook.webp',
    'description-en': 'The ultimate pro notebook, MacBook Pro sdjbshfhbsdbhksfdkbhsfdkbhhkbfsdsfb',
    'description-es': 'Es una laptop potente con el chip M1 Pro de Apple, ideal para profesionales creativos.'
  },
  {
    name: 'iPhone 13',
    logo: '/iphone.webp',
    'description-en': 'Blast past fast',
    'description-es': 'Es un teléfono móvil de Apple que ofrece mejoras significativas en cámara, rendimiento, duración de batería y diseño.'
  },
  {
    name: 'Magic Keyboard',
    logo: '/keyboard.webp',
    'description-en': 'Magic Keyboard with Touch ID',
    'description-es': 'Es un teclado inalámbrico elegante y funcional diseñado para dispositivos como iPad.'
  },
  {
    name: 'Magic Mouse',
    logo: '/mouse.webp',
    'description-en': 'Magic Mouse',
    'description-es': 'Es un ratón inalámbrico con tecnología multitouch y diseño ergonómico para Mac.'
  },
  {
    name: 'Screen Janus',
    logo: '/screen.webp',
    'description-en': 'Screen Janus',
    'description-es': 'Es un monitor con alta resolución y colores precisos para uso profesional.'
  },
  {
    name: 'Sony WH-1000XM4',
    logo: '/headphone.webp',
    'description-en': 'Sony WH-1000XM4',
    'description-es': 'Son auriculares inalámbricos con cancelación de ruido y calidad de sonido excepcional para usuarios exigentes.'
  }
]
