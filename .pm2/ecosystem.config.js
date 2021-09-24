module.exports = {
  apps: [
    {
      name: 'social-metrics-api',
      script: `./dist/main.js`,
      max_memory_restart: '4096M',
      log_date_format : "YYYY-MM-DD HH:mm Z"
    },
  ],
};
