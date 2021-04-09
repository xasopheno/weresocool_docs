export type MenuDatum = {
  title: string
  items: (string | { name: string; link: string })[]
}

export const tutorialMenu: MenuDatum[] = [
  {
    title: "Documentation",
    items: [{ name: "WereSoCool Docs", link: "documentation" }],
  },
  {
    title: "Tutorials",
    items: [
      "welcome",
      "overtones",
      "overlay",
      "point_operations",
      "pipe_operations",
      "pipe_and_sequence",
      "small_differences",
      "o_operation",
      "fit_length",
      "modulate_by",
      "functions",
      "intro_to_lists",
      "equal_temperament",
      "indices",
      "generators",
      "expressive_generators",
      "cool_coefficients",
    ],
  },
]

export const dannyMenu: MenuDatum[] = [
  {
    title: "Danny Meyer",

    items: [
      { name: "About", link: "about" },
      { name: "Itinerary", link: "live" },
    ],
  },
]

export const tvMenu: MenuDatum[] = [
  {
    title: "Watch to Past Concerts",
    items: [
      {
        name: "#39 | Shags Chamberlain - Synths - (LA)",
        link: "shags_chamberlain",
      },

      { name: "#38 | Kjetil Jerve - Piano - (Norway)", link: "kjetil_jerve" },
      {
        name: "#37 | Gabi Hartmann (#2) - Songs - (Paris)",
        link: "gabi_hartmann_2",
      },
      { name: "#36 | Caleb Curtis - Saxophone - (NYC)", link: "caleb_curtis" },
      {
        name: "#35 | Doors That Don't - Songs - (Denver, CO)",
        link: "doors_that_dont",
      },
      {
        name: "#34 | Caroline Davis - Saxophone/Effects (NYC)",
        link: "caroline_davis",
      },
      {
        name: "#33 | Pablo Eluchans - Drums - (NYC)",
        link: "pablo_eluchans",
      },
      {
        name: "#31 | Tomoko Omura - Violin - (NYC)",
        link: "tomoko_omura",
      },
      {
        name: "#30 | Kimberly Hawkey - Jazz Standards (New York)",
        link: "kim_hawkey",
      },
      {
        name: "#28 | John Gunther - Woodwinds and Effects - (Boulder, CO)",
        link: "john_gunther",
      },
      {
        name: "#27 | Miki Yamanaka - Piano - (NYC)",
        link: "miki_yamanaka",
      },
      {
        name: "#26 | Who is Andrew Fox - ??? - (NYC)",
        link: "andrew_fox",
      },
      {
        name: "#25 | Emily Holden - Vox/Violin/Beats - (NYC)",
        link: "soft_talon",
      },
      { name: "#24 | Chris Votek - Cello - (LA)", link: "chris_votek" },
      // { name: "#21 | Molly Bolton - Songs", link: "molly_bolten" },
      { name: "#20 | Ross Martin - Guitar - (NYC)", link: "ross_martin" },
      {
        name: "#19 | Cleek Schrey - Hardanger D’Amore, - (NYC)",
        link: "cleek",
      },
      { name: "#11 | Topu Lyo - Cello and Effects (NYC)", link: "topu_lyo" },

      // "10/22/20 -> Polartropica - Popular Music - (LA)",

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
]

export const interviewMenu: MenuDatum[] = [
  {
    title: "Brad Goode: Stories from Chicago",

    items: [
      { name: "Life and Music", link: "brad_goode_1" },
      { name: "Red Rodney, Chris Potter, Eddie Harris", link: "brad_goode_2" },
      { name: "Arturo Sandoval and Barrett Deems", link: "brad_goode_3" },
      { name: "Lin Halliday", link: "brad_goode_4" },
      { name: "Mentors", link: "brad_goode_5" },
      { name: "Von Freeman", link: "brad_goode_6" },
    ],
  },
  {
    title: "Ron Miles: Beautiful Melodies",

    items: [
      { name: "Growing", link: "ron_miles_1" },
      { name: "Inspiration", link: "ron_miles_2" },
      { name: "Bill Frisell", link: "ron_miles_3" },
    ],
  },

  {
    title: "Art Lande: Music Is A Language To Talk About Life",

    items: [
      { name: "Community", link: "art_lande_community" },
      { name: "Balance", link: "art_lande_balance" },
      { name: "Mentors", link: "art_lande_mentors" },
      {
        name: "The Great Bassists and Drummers",
        link: "art_lande_bassists_drummers",
      },
      { name: "Chet Baker", link: "art_lande_chet_baker" },
      { name: "Music and Society", link: "art_lande_music_and_society" },
    ],
  },

  {
    title: "Grant Gordy: Amazing Guitarist, Really Nice Guy",

    items: [
      { name: "Jazz and Bluegrass", link: "grant_gordy" },
      { name: "Three Beautiful Things", link: "grant_gordy_beautiful" },
      {
        name: "Dave Grisman and Darol Anger",
        link: "grant_gordy_grisman_anger",
      },
      { name: "Recording", link: "grant_gordy_recording" },
      { name: "Moving To New York", link: "grant_gordy_moving" },
    ],
  },
]
