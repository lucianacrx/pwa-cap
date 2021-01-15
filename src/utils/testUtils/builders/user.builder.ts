// User entity builder functions
import faker from "faker";

import { User, UserRol } from "types/user.types";
import {
  genId,
  genMobilPhone,
  chooseRandomEnum,
  genEmail,
  genBiasBoolean
} from "./common.builder";
import CONSTANTS from "config/constants";

const genUserName = () => {
  return `${faker.name.firstName()} ${faker.name.firstName()}`;
};

const genUserLastName = () => {
  return `${faker.name.lastName()} ${faker.name.lastName()}`;
};

const getRol = () => {
  return chooseRandomEnum(UserRol);
};

const genUserPhone = () => {
  const should = genBiasBoolean(0.8);
  if (!should) {
    return;
  }
  return genMobilPhone(CONSTANTS.COUNTRY.CODE);
};

export const buildUser = (overrides: Partial<User> = {}): User => {
  return {
    id: genId(),
    name: genUserName(),
    lastName: genUserLastName(),
    email: genEmail(),
    phone: genUserPhone(),
    rol: getRol(),
    ...overrides
  };
};
