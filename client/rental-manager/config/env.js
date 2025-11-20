import Constants from "expo-constants";

const ENV = {
  dev: {
    baseApiUrl:
      Constants.expoConfig?.extra?.baseApiUrl || "http://localhost:3000",
    apiTimeout: Constants.expoConfig?.extra?.apiTimeout || 10000,
    apiKey: Constants.expoConfig?.extra?.apiKey || "",
    env: "development",
  },
  staging: {
    baseApiUrl:
      Constants.expoConfig?.extra?.baseApiUrl ||
      "https://staging-api.example.com",
    apiTimeout: Constants.expoConfig?.extra?.apiTimeout || 10000,
    apiKey: Constants.expoConfig?.extra?.apiKey || "",
    env: "staging",
  },
  prod: {
    baseApiUrl:
      Constants.expoConfig?.extra?.baseApiUrl || "https://api.example.com",
    apiTimeout: Constants.expoConfig?.extra?.apiTimeout || 10000,
    apiKey: Constants.expoConfig?.extra?.apiKey || "",
    env: "production",
  },
};

const getEnvVars = (env = Constants.expoConfig?.extra?.env || "dev") => {
  if (env === "production" || env === "prod") return ENV.prod;
  if (env === "staging") return ENV.staging;
  return ENV.dev;
};

export default getEnvVars();
