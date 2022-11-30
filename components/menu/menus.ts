export type Translation = { trans: Record<string, string>; link: string };
export type MenuDatum = {
  title: string;
  items: (string | { name: string; link: string } | Translation)[];
};

export function isTranslation(thing: any): thing is Translation {
  return thing.hasOwnProperty('trans');
}

export const tutorialMenu: MenuDatum[] = [
  {
    title: 'Tutorials',
    items: [
      {
        trans: { en: 'Getting Started', pt: 'Começando', es: 'Comenzando' },
        link: 'getting_started',
      },
      {
        trans: {
          en: 'WereSoCool CLI',
          pt: 'WereSoCool CLI',
          es: 'WereSoCool CLI',
        },
        link: 'cli',
      },
      {
        trans: { en: 'Welcome', pt: 'Bem Vindo', es: 'Bienvenido' },
        link: 'welcome',
      },
      {
        trans: { en: 'Overtones', pt: 'Série Harmônica', es: 'Sobretonos' },
        link: 'overtones',
      },
      {
        trans: { en: 'Overlay', pt: 'Sobreposição', es: 'Sobrepuesta' },
        link: 'overlay',
      },
      {
        trans: {
          en: 'Point Operations',
          pt: 'Operações de Ponto',
          es: 'Operaciones de Puntos',
        },
        link: 'point_operations',
      },
      {
        trans: {
          en: 'Pipe Operations',
          pt: 'Operações de Pipe',
          es: 'Operaciones de Pipe',
        },
        link: 'pipe_operations',
      },
      {
        trans: {
          en: 'Pipe and Sequences',
          pt: 'Pipe e Sequências',
          es: 'Pipe y Secuencias',
        },
        link: 'pipe_and_sequences',
      },
      {
        trans: {
          en: 'Small Differences',
          pt: 'Pequenas Diferenças',
          es: 'Pequeñas Diferencias',
        },
        link: 'small_differences',
      },
      {
        trans: { en: 'O Operation', pt: 'O Operação', es: 'O Operación' },
        link: 'o_operation',
      },
      {
        trans: {
          en: 'Fit Length',
          pt: 'Ajuste ao Duração',
          es: 'Ajustar a la Duración',
        },
        link: 'fit_length',
      },
      {
        trans: { en: 'ModulateBy', pt: 'Modulação', es: 'Modulación' },
        link: 'modulate_by',
      },
      {
        trans: { en: 'Functions', pt: 'Funções', es: 'Funciones' },
        link: 'functions',
      },
      {
        trans: {
          en: 'Intro to Lists',
          pt: 'Introdução às Listas',
          es: 'Introducción a las Listas',
        },
        link: 'intro_to_lists',
      },
      {
        trans: {
          en: 'Equal Temperaments',
          pt: 'Temperamentos Iguais',
          es: 'Temperamentos iguales',
        },
        link: 'equal_temperament',
      },
      {
        trans: { en: 'indices', pt: 'indices', es: 'índices' },
        link: 'indices',
      },
      {
        trans: { en: 'Generators', pt: 'Geradores', es: 'Generadores' },
        link: 'generators',
      },
      {
        trans: {
          en: 'Expressive Generators',
          pt: 'Geradores Expressivos',
          es: 'Generadores Expresivos',
        },
        link: 'expressive_generators',
      },
      {
        trans: {
          en: 'Cool Coefficients',
          pt: 'Coeficientes Legais',
          es: 'Coeficientes Geniales',
        },
        link: 'cool_coefficients',
      },
      {
        trans: { en: 'timbre', pt: 'timbre', es: 'timbre' },
        link: 'timbre',
      },
      {
        trans: { en: 'import', pt: 'import', es: 'import' },
        link: 'import',
      },
      {
        trans: { en: 'stems', pt: 'stems', es: 'stems' },
        link: 'stems',
      },
    ],
  },
];

export const dannyMenu: MenuDatum[] = [
  {
    title: 'Danny',

    items: [
      { name: 'About', link: 'who/about' },
      { name: 'discography', link: 'who/discography' },
      { name: 'Itinerary', link: 'who/live' },
      { name: 'Make Work', link: 'make' },
    ],
  },
];

export const tvMenu: MenuDatum[] = [
  {
    title: 'Watch Past Concerts',
    items: [
      {
        name: '#40 | Maya Laliberte - Dance - (Boulder, CO)',
        link: 'maya_laliberte',
      },
      {
        name: '#39 | Shags Chamberlain - Synths - (LA)',
        link: 'shags_chamberlain',
      },

      { name: '#38 | Kjetil Jerve - Piano - (Norway)', link: 'kjetil_jerve' },
      {
        name: '#37 | Gabi Hartmann (#2) - Songs - (Paris)',
        link: 'gabi_hartmann_2',
      },
      { name: '#36 | Caleb Curtis - Saxophone - (NYC)', link: 'caleb_curtis' },
      {
        name: "#35 | Doors That Don't - Songs - (Denver, CO)",
        link: 'doors_that_dont',
      },
      {
        name: '#34 | Caroline Davis - Saxophone/Effects (NYC)',
        link: 'caroline_davis',
      },
      {
        name: '#33 | Pablo Eluchans - Drums - (NYC)',
        link: 'pablo_eluchans',
      },
      {
        name: '#32 | Jacquelyn West - Songs - (NYC)',
        link: 'jacquelyn_west',
      },
      {
        name: '#31 | Tomoko Omura - Violin - (NYC)',
        link: 'tomoko_omura',
      },
      {
        name: '#30 | Kimberly Hawkey - Jazz Standards (New York)',
        link: 'kim_hawkey',
      },
      {
        name: '#29 | Polartropica - Popular Music - (L.A.)',
        link: 'polartropica',
      },
      {
        name: '#28 | John Gunther - Woodwinds and Effects - (Boulder, CO)',
        link: 'john_gunther',
      },
      {
        name: '#27 | Miki Yamanaka - Piano - (NYC)',
        link: 'miki_yamanaka',
      },
      {
        name: '#26 | Who is Andrew Fox - ??? - (NYC)',
        link: 'andrew_fox',
      },
      {
        name: '#25 | Emily Holden - Vox/Violin/Beats - (NYC)',
        link: 'soft_talon',
      },
      { name: '#24 | Chris Votek - Cello - (LA)', link: 'chris_votek' },
      { name: '#23 | Glenn Zaleski - Piano - (NYC)', link: 'glenn_zaleski' },
      { name: '#22 | AJ Salas - Keys/Beats - (Denver, CO)', link: 'aj_salas' },
      { name: '#21 | Moly Bolton - Songs - (Oakland)', link: 'molly_bolten' },
      { name: '#20 | Ross Martin - Guitar - (NYC)', link: 'ross_martin' },
      {
        name: '#19 | Cleek Schrey - Hardanger D’Amore, - (NYC)',
        link: 'cleek',
      },
      {
        name: '#18 | John Grigsby - Bass and More - (Denver, CO)',
        link: 'john_grigsby',
      },
      {
        name: '#17 | Alejandro Castaño - Jazz (Denver, CO)',
        link: 'alejandro',
      },
      {
        name: '#16 | Dan Tepfer - Piano and Computer (NYC)',
        link: 'dan_tepfer',
      },
      { name: '#15 | Corey Fogel - Drums (L.A.)', link: 'corey_fogel' },
      { name: '#14 | Dina Maccabee - Viola (NYC)', link: 'dina_maccabee' },
      {
        name: '#13 | Gabi Hartmann (#2) - Songs - (Paris)',
        link: 'gabi_hartmann',
      },
      {
        name: '#12 | Mike Thies - Drums and Effects (NYC)',
        link: 'mike_thies',
      },
      { name: '#11 | Topu Lyo - Cello and Effects (NYC)', link: 'topu_lyo' },
      {
        name: '#10 | Bob Woods Ladue - Drums - (Oakland)',
        link: 'bob_ladue',
      },
      {
        name: '#9 | Dj Check One - Drums/Beats - (Denver, CO)',
        link: 'dj_check_one',
      },
      { name: '#8 | Ayo Awosika - Songs (L.A.)', link: 'ayo_awosika' },
      {
        name: '#7 | Jesse Harris and Jeremy Gustin  - Songs (NYC)',
        link: 'jesse_harris',
      },
      { name: '#6 | Colin Stranahan - Songs (NYC)', link: 'colin_stranahan' },
      {
        name: '#5 | Eric Lane and Marandi Hostetter - Piano and Violin (NYC)',
        link: 'eric_marandi',
      },
      {
        name: '#4 | Beck Burger - Piano (New Orleans)',
        link: 'beck_burger',
      },
      {
        name: '#3 | Beck Burger - Piano (New Orleans)',
        link: 'beck_burger',
      },
      {
        name: '#2 | Grant Gordy - Guitar (NYC)',
        link: 'grant_gordy',
      },
      {
        name: '#1 | Danny Meyer - Saxophone - (NYC)',
        link: 'danny_meyer',
      },

      // "9/10/20 -> Glenn Zaleski - Piano - (NYC)",

      // "9/3/20 -> AJ Salas - Keyboards/Beats - (Denver)",

      // "8/27/20 -> Molly Bolten (Oakland)",

      // "8/13/20 -> Cleek Schrey - (Princeton, NY)",

      // "8/6/20 - John Grigsby - (Denver)",

      // "7/23/20 - Dan Tepfer - (NYC)",

      // "7/16/20 - Corey Fogel - Drums/Sounds - (L.A.)",

      // "7/9/20 - Dina Maccabee - Viola, Effects - (NYC)",

      // "7/2/20 - Gabi Hartmann - Songs (Paris)",

      // "6/25/20 - Mike Thies - Electronics, Drums (NYC)",

      // "6/11/20 - Bob Woods-LaDue - Drums and Computer Programming (Oakland)",

      // "6/4/20 - Dameion Hines a.k.a. Dj Check One - Beats (Denver)",

      // "5/28/20 - Ayo Awosika - Songs (LA)",

      // "5/21/20 - Jesse Harris and Jeremy Gustin - Songs/Drums (NYC)",

      // "5/14/20 - Colin Stranahan - Drums/Sounds (NYC)",

      // "5/7/2020 - Marandi Hostetter and Eric Lane (NYC)",

      // "4/30/2020 - Beck Burger Piano (New Orleans)",

      // "4/23/2020 - Inner Movements - Mark Clifford Vibraphone, Crystal Pascucci",

      // "4/16/2020 - Grant Gordy - Guitar (NYC)",

      // "4/9/2020 - Danny Meyer - Saxophone (NYC)",
    ],
  },
];

export const interviewMenu: MenuDatum[] = [
  {
    title: 'Brad Goode: Stories from Chicago',

    items: [
      { name: 'Life and Music', link: 'brad_goode_1' },
      { name: 'Red Rodney, Chris Potter, Eddie Harris', link: 'brad_goode_2' },
      { name: 'Arturo Sandoval and Barrett Deems', link: 'brad_goode_3' },
      { name: 'Lin Halliday', link: 'brad_goode_4' },
      { name: 'Mentors', link: 'brad_goode_5' },
      { name: 'Von Freeman', link: 'brad_goode_6' },
    ],
  },
  {
    title: 'Ron Miles: Beautiful Melodies',

    items: [
      { name: 'Growing', link: 'ron_miles_1' },
      { name: 'Inspiration', link: 'ron_miles_2' },
      { name: 'Bill Frisell', link: 'ron_miles_3' },
    ],
  },

  {
    title: 'Art Lande: Music Is A Language To Talk About Life',

    items: [
      { name: 'Community', link: 'art_lande_community' },
      { name: 'Balance', link: 'art_lande_balance' },
      { name: 'Mentors', link: 'art_lande_mentors' },
      {
        name: 'The Great Bassists and Drummers',
        link: 'art_lande_bassists_drummers',
      },
      { name: 'Chet Baker', link: 'art_lande_chet_baker' },
      { name: 'Music and Society', link: 'art_lande_music_and_society' },
    ],
  },

  {
    title: 'Grant Gordy: Amazing Guitarist, Really Nice Guy',

    items: [
      { name: 'Jazz and Bluegrass', link: 'grant_gordy' },
      { name: 'Three Beautiful Things', link: 'grant_gordy_beautiful' },
      {
        name: 'Dave Grisman and Darol Anger',
        link: 'grant_gordy_grisman_anger',
      },
      { name: 'Recording', link: 'grant_gordy_recording' },
      { name: 'Moving To New York', link: 'grant_gordy_moving' },
    ],
  },
];
