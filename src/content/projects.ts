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
    images: ['/project-1-1.webp', '/project-1-2.webp', '/project-1-3.webp']
  },
  {
    id: '2',
    'title-en': 'Dynamic components',
    'title-es': 'Componentes dinámicos',
    'description-en': 'Library of dynamic components adapted to display information.',
    'description-es': 'Librería de componentes dinámicos adaptados para mostrar información.',
    image: '/project-2.webp',
    tags: ['React', 'Sass', 'TypeScript', 'Git'],
    state: 'private',
    year: '2023 - now',
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
    images: ['/project-3-1.webp'],
    link: 'https://www.npmjs.com/package/@tingenio/apolo-ui'
  },
  {
    id: '4',
    'title-en': 'ASED',
    'title-es': 'ASED',
    'description-en': 'This is a description-en of project 2',
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
  },
  {
    id: '7',
    'title-en': 'Backend Blog API',
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
  },
  {
    id: '8',
    'title-en': 'Backend Blog API',
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
