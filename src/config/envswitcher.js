const EnvSwitcher = require("../utils/EnvSwitcher");

const options = {
  environments: [
    {
      name: "production",
    },
    {
      name: "development",
      prefix: "DEV",
    },
  ],
  default: "development",
};

module.exports = EnvSwitcher.config(options);
