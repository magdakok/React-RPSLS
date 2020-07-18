const scissors = {
  name: "scissors",
  beat: ["paper", "lizard"],
  colorDark: "hsl(39, 89%, 44%)",
  colorLight: "hsl(40, 84%, 53%)",
  position: "top: -16.5%; left: 27.5%",
};

const paper = {
  name: "paper",
  beat: ["rock", "spock"],
  colorDark: "hsl(230, 89%, 57%)",
  colorLight: "hsl(230, 89%, 65%)",
  position: "top: 22%; right: -22%",
};

const rock = {
  name: "rock",
  beat: ["lizard", "scissors"],
  colorDark: "hsl(349, 71%, 47%)",
  colorLight: "hsl(349, 70%, 56%)",
  position: "bottom: -23% ; right: -1.5%",
};

const lizard = {
  name: "lizard",
  beat: ["spock", "paper"],
  colorDark: "hsl(261, 73%, 55%)",
  colorLight: "hsl(261, 72%, 63%)",
  position: "bottom: -23% ; left: -1.5%",
};

const spock = {
  name: "spock",
  beat: ["scissors", "rock"],
  colorDark: "hsl(189, 59%, 48%)",
  colorLight: "hsl(189, 58%, 57%)",
  position: "top: 22%; left: -22%",
};

export { scissors, paper, rock, lizard, spock };
