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

export interface ISortInputs {
  categories: string;
  type: string;
  level: string;
}

export interface IloginProps {
  auth: boolean;
  email: string;
}

export interface IRegisterInputs {
  email: string;
  name: string;
  password: string;
}

export interface SortFilterProps {
  handleClearAll: () => void;
}
