export type Pet = {
  _id: string;
  name: string;
  type: "Dog" | "Cat" | "Bird" | "Rabbit" | "Other";
  breed: string;
  age: number;
  gender: "Male" | "Female";
  size: "Small" | "Medium" | "Large";

  image: string;
  description: string;

  vaccinated: boolean;
  neutered: boolean;
  healthCondition: string;

  adopted: boolean;
  location: string;

  temperament: string[];
  goodWithKids: boolean;
  goodWithPets: boolean;

  adoptionFee: number;
  createdAt: string;
};