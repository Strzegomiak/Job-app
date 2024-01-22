export interface IJobOffers {
  Categories: string;
  Description: string;
  JobName: string;
  Name: string;
  Sallary: number;
  Type: string;
  country: string;
  email: string;
  id: number;
  levelOfExpirience: string;
  workType: string;
}

export interface IFormInput {
  title: string;
  company: string;
  location: string;
}

export interface PropsSortValue {
  categories: string;
  type: string;
  level: string;
}

export interface Inputs {
  categories: string;
  type: string;
  level: string;
}
