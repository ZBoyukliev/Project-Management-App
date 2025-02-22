module.exports = {
    apps: [
      {
        name: "App-project-management",
        script: "npm",
        args: "run dev",
        env: {
          NODE_ENV: "development",
        },
      },
    ],
  };