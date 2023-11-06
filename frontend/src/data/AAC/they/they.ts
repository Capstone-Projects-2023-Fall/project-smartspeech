import { TileAssets } from "@/components/AAC/TileTypes";
import who from "@/data/AAC/who/who";
import { WHO_TILES_COLOR } from "@/data/AAC/who/who";

export const THEY_NOUN_TILES_COLOR = "orange";
export const THEY_PRONOUN_TILES_COLOR = "yellow";

const they: TileAssets = {
  he: {
    image: "/AAC_assets/img/they/he.png",
    text: "He",
    sound: "He",
    tileColor: THEY_PRONOUN_TILES_COLOR,
  },
  she: {
    image: "/AAC_assets/img/they/she.png",
    text: "She",
    sound: "She",
    tileColor: THEY_PRONOUN_TILES_COLOR,
  },
  we: {
    image: "/AAC_assets/img/they/we.png",
    text: "We",
    sound: "We",
    tileColor: THEY_PRONOUN_TILES_COLOR,
  },
  they: {
    image: "/AAC_assets/img/they/they.png",
    text: "They",
    sound: "They",
    tileColor: THEY_PRONOUN_TILES_COLOR,
  },
  who: {
    image: "/AAC_assets/img/who/who.png",
    text: "Who",
    sound: "Who",
    tileColor: WHO_TILES_COLOR,
    subTiles: who,
  },
  grandma: {
    image: "/AAC_assets/img/they/grandma.png",
    text: "Grandma",
    sound: "Grandma",
    tileColor: THEY_NOUN_TILES_COLOR,
  },
  grandpa: {
    image: "/AAC_assets/img/they/grandpa.png",
    text: "Grandpa",
    sound: "Grandpa",
    tileColor: THEY_NOUN_TILES_COLOR,
  },
  teacher: {
    image: "/AAC_assets/img/they/teacher.png",
    text: "Teacher",
    sound: "Teacher",
    tileColor: THEY_NOUN_TILES_COLOR,
  },
  cook: {
    image: "/AAC_assets/img/they/cook.png",
    text: "Cook",
    sound: "Cook",
    tileColor: THEY_NOUN_TILES_COLOR,
  },
  sister: {
    image: "/AAC_assets/img/they/sister.png",
    text: "Sister",
    sound: "Sister",
    tileColor: THEY_NOUN_TILES_COLOR,
  },
  brother: {
    image: "/AAC_assets/img/they/brother.png",
    text: "Brother",
    sound: "Brother",
    tileColor: THEY_NOUN_TILES_COLOR,
  },
  policeofficer: {
    image: "/AAC_assets/img/they/policeofficer.png",
    text: "Police Officer",
    sound: "Police Officer",
    tileColor: THEY_NOUN_TILES_COLOR,
  },
  mother: {
    image: "/AAC_assets/img/they/mother.png",
    text: "Mother",
    sound: "Mother",
    tileColor: THEY_NOUN_TILES_COLOR,
  },
  father: {
    image: "/AAC_assets/img/they/father.png",
    text: "Father",
    sound: "Father",
    tileColor: THEY_NOUN_TILES_COLOR,
  },
  doctor: {
    image: "/AAC_assets/img/they/doctor.png",
    text: "Doctor",
    sound: "Doctor",
    tileColor: THEY_NOUN_TILES_COLOR,
  },
  fireman: {
    image: "/AAC_assets/img/they/fireman.png",
    text: "Fireman",
    sound: "Fireman",
    tileColor: THEY_NOUN_TILES_COLOR,
  },
  boy: {
    image: "/AAC_assets/img/they/boy.png",
    text: "Boy",
    sound: "Boy",
    tileColor: THEY_NOUN_TILES_COLOR,
  },
  girl: {
    image: "/AAC_assets/img/they/girl.png",
    text: "Girl",
    sound: "Girl",
    tileColor: THEY_NOUN_TILES_COLOR,
  },
  baby: {
    image: "/AAC_assets/img/they/baby.png",
    text: "Baby",
    sound: "Baby",
    tileColor: THEY_NOUN_TILES_COLOR,
  },
  friend: {
    image: "/AAC_assets/img/they/friend.png",
    text: "Friend",
    sound: "Friend",
    tileColor: THEY_NOUN_TILES_COLOR,
  },
};

export default they;
