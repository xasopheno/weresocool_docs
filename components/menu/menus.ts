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
]
