export default {
  global: {
    componenteFormativo: 'Introducción a la tanatoestética',
    descripcionCurso:
      'El presente componente formativo tiene como intención, realizar el abordaje de algunos conceptos y generalidades para el sector funerario, la comprensión de la muerte y la ética del tanatopractor en el proceso de tanatoestética. Elementos que están orientados al acondicionamiento del cuerpo, para borrar en él los signos de la muerte y crear un cuadro memorial para los familiares y su recuerdo en la posteridad.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos y generalidades para el sector funerario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tanatoestética: historia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ética en el sector funerario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'La muerte en la tanatopraxia',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bonete, E. (2002). Ética de la muerte: de la Bio-ética a la Tánato-ética. Daimon Revista Internacional de Filosofía, (25), p. 57–74.',
      link: 'https://revistas.um.es/daimon/article/view/14801',
    },
    {
      referencia:
        'Escobar. G. (2000). Ética. Introducción a su problemática y su historia. McGraw-Hill. ',
      link:
        'https://www.academia.edu/30060589/%C3%89tica_Introducci%C3%B3n_a_su_problem%C3%A1tica_y_su_historia_ESCOBAR_1_',
    },
    {
      referencia: 'Equipo editorial, E. (2021). Ritual. Obtenido de ',
      link: 'https://concepto.de/ritual/',
    },
    {
      referencia:
        'Illinois Institute of Technology. (s.f.). Language of professional ethics. Illinois Institute of Technology.',
      link: 'http://ethics.iit.edu/teaching/language-professional-ethics',
    } /* 
    {
      referencia:
        'ICONTEC. (2017). Norma Técnica Colombiana NTC 5840. ICONTEC.',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=es-ES&Q=AF60935720F13C6466C0297B7F80FF16&Req=',
    }, */,
    {
      referencia:
        'Lichtenberg, J. (1996). What are codes of ethics for? Codes of Ethics and the Professions. Margaret Coady and Sidney Bloch, eds. Melbourne University Press.',
      /*link:
        'https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/Talento_humano/Circular-015/GUIA_DE_LIMPIEZA_Y_DESINFECCION.pdf',
    */
    },
    {
      referencia:
        'Mayer, R. G. y Johnson, E. (2012). Embalsamamiento: Historia, teoría y práctica. (quinta edición). Mc Graw Hill.',
    },
    {
      referencia:
        'Mego, G. (2016). Tanatopraxia y tanatoestética. Todo un arte de conservar y embellecer al cadáver. Morfolia – Vol. 8 - No. 2 – 2016.',
      link:
        'https://repositorio.unal.edu.co/bitstream/handle/unal/67117/60112-305939-1-PB.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Norman, R. (1998). The moral philosophers. Oxford University Press.',
    },
    {
      referencia:
        'Ortiz, G. (2016). Sobre la distinción entre ética y moral. Isonomía. Revista de Teoría y Filosofía del Derecho, 45, p. 113-139.',
      link: 'https://www.redalyc.org/pdf/3636/363648284005.pdf',
    },
    {
      referencia:
        'Panasef Asociación Nacional de Servicios Funerarios. (2020). Charla - Los compromisos éticos del sector funerario [video]. YouTube.',
      link: 'https://youtu.be/WD94qPyCu0E',
    },
    {
      referencia: 'Significados. (s.f.).  Significado: Ritual. Obtenido de ',
      link: 'https://www.significados.com/ritual/',
    },
    {
      referencia:
        'Subercaseaux Instituto de Banca y Finanzas. (s.f.). Unidad I: la moral, la ética profesional y los valores de la empresa.',
      link: 'http://sedevirtual.ieb.cl/DG/PDF/ERS01e/version_pdf_unidad1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Respeto',
      significado:
        'Consideración acompañada de cierta sumisión, con que se trata a una persona o a una cosa por alguna cualidad, situación o circunstancia que la determina y que lleva a acatar lo que dice o establece o a no causar ofensa o perjuicio.',
    },
    {
      termino: 'Servicios funerarios',
      significado:
        'Conjunto de actividades organizadas para la realización de rituales fúnebres.  Pueden constar de servicios básicos tales como la preparación del cadáver, restos humanos, restos óseos o cenizas; obtención de licencias de inhumación o cremación; traslados, suministro de carroza fúnebre para el servicio; ataúd, urna, sala de velación, trámites civiles y eclesiásticos (Norma Técnica Colombiana NTC 5840, 2017).',
    },
    {
      termino: 'Valores',
      significado:
        'Cualidad o conjunto de cualidades por las que una persona o cosa es apreciada o bien considerada.',
    },
  ],
  complementario: [
    {
      texto:
        'Legiscomex. (s.f.). Tipos de carga, regularizado. <br> <small>Apreciado Aprendiz, para la utilización del recurso de Legiscomex que se encuentra en el Sistema de Bibliotecas, es necesario el ingreso con sus datos de acceso (número de identificación en los campos de usuario y contraseña). Es importante que, ingrese primero a la biblioteca y posteriormente acceda con el enlace del recurso de Tipos de Carga, para que el sistema lo direccione al espacio correcto. </small>',
      tipo: 'Página web',
      link:
        'https://login.bdigital.sena.edu.co/login?url=https://www.legiscomex.com/Documentos/TIPOSDECARGA',
    },
    {
      texto:
        'Panasef Asociación Nacional Servicios Funerarios (2020), Charla - Los compromisos éticos del sector funerario.',
      tipo: 'Video',
      link: 'https://youtu.be/WD94qPyCu0E',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luz María Uribe Lotero',
        cargo: 'Experta Temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Lina María Restrepo Zapata',
        cargo: 'Experta Temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'John Alejandro Carmona Escobar.',
        cargo: 'Experto Temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo:
          'Instructora (EPC) – Líder Desarrollo Curricular Servicios Personales',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Adriana María Bustamante Cataño',
        cargo: 'Profesional de Diseño y Producción Curricular',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica del SENA - Regional Distrito Capital',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Eulises Orduz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lizeth Karina Manchego',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Emilsen Alfonso Bautista',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
