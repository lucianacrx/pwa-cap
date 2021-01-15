// authentication services
import { genBiasBoolean } from "utils/testUtils/builders/common.builder";
import { buildUser } from "utils/testUtils/builders/user.builder";
import { LogInByTokenRes, LogInByCredentials } from "./auth.service.types";
import { User } from "types/user.types";

export const fetchAuthToken = async (
  token: string | null
): Promise<LogInByTokenRes> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (genBiasBoolean(1)) {
        resolve({ token: "FAKE_TOKEN", user: buildUser() });
      } else {
        reject(new Error("Server: Auth token expired"));
      }
    }, 500);
  });
};

export const logInUser = async (
  email: string,
  password: string
): Promise<LogInByCredentials> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (genBiasBoolean(1)) {
        resolve({ token: "FAKE_TOKEN", user: buildUser() });
      } else {
        reject(new Error("Server: Password and email did not match"));
      }
    }, 500);
  });
};

export const updateUserService = async (user: User): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (genBiasBoolean(1)) {
        resolve(buildUser({ ...user }));
      } else {
        reject(new Error("Server: Fail to update user"));
      }
    }, 1000);
  });
};

export const logOutService = async (authToken: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (genBiasBoolean(1)) {
        resolve();
      } else {
        reject(new Error("Server: Fail to log user out"));
      }
    }, 500);
  });
};
