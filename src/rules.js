const scissors = {
  name: "scissors",
  beat: ["paper", "lizard"],
  colorDark: "hsl(39, 89%, 49%)",
  colorLight: "hsl(40, 84%, 53%)",
};

const paper = {
  name: "paper",
  beat: ["rock", "spock"],
  colorDark: "hsl(230, 89%, 62%)",
  colorLight: "hsl(230, 89%, 65%)",
};

const rock = {
  name: "rock",
  beat: ["lizard", "scissors"],
  colorDark: "hsl(349, 71%, 52%)",
  colorLight: "hsl(349, 70%, 56%)",
};

const lizard = {
  name: "lizard",
  beat: ["spock", "paper"],
  colorDark: "hsl(261, 73%, 60%)",
  colorLight: "hsl(261, 72%, 63%)",
};

const spock = {
  name: "spock",
  beat: ["scissors", "rock"],
  colorDark: "hsl(189, 59%, 53%)",
  colorLight: "hsl(189, 58%, 57%)",
};

export { scissors, paper, rock, lizard, spock };
