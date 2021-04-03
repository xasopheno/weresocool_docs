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
