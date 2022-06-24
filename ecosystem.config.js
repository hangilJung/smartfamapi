module.exports = {
  apps: [
    {
      name: "API",
      script: "./bin/www.js",
      instances: 1,
      exec_mode: "cluster",
    },
  ],
};
