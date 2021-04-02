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
    title: "Brad Goode",
    items: [{ name: "Brad Goode", link: "brad_goode_1" }],
  },
]
