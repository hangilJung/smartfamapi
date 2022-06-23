module.exports = {
  apps: [
    {
      name: "API",
      script: "./bin/www.js",
      instances: 2,
      exec_mode: "cluster",
    },
  ],
};
