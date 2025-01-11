import {SKILL_NAMES, SKILLS_LEVEL} from "../enums/skills";

interface ISkill {
  skillName: SKILL_NAMES;
  skillLevel: SKILLS_LEVEL;
}

export interface IUser {
  id: number;
  name: string;
  surname: string;
  photo: string;
  age: number;
  totalExperience: number;
  skills: ISkill[];
}
