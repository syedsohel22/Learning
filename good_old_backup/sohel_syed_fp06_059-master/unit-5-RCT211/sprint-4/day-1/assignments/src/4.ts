let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "sohel",
};

user.name = "syed";

let questions: Record<string, boolean> = {
  isMarried: false,
  isEmployeed: false,
  isIndian: true,
  //name: "sohel", //error
};

questions.isHuman = true;
