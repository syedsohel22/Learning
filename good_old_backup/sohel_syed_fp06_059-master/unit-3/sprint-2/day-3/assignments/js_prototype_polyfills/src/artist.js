function Artist(name, skill, profession) {
  this.name = name;
  this.skill = skill;
  this.profession = profession;
}

Artist.prototype.getProfession = function () {
  return this.profession;
};
//var artistsObject = Object.create(Artist);
let artistsObject = {
  name: "Rahul Dravid",
  skill: "Cricket",
  profession: "Cricketer",
};

let artist = Object.create(artistsObject);

// expect(artist.name).toBe("Rahul Dravid");
// expect(artist.skill).toBe("Cricket");
// expect(artist.profession).toBe("Cricketer");
// expect(artist.hasOwnProperty("name")).toBe(false)

Artist.prototype.print = function () {
  return `I am ${this.name}`;
};

// Do not change this
export { Artist, artistsObject };
