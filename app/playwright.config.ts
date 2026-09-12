import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: { baseURL: 'http://127.0.0.1:3107' },
  webServer: {
    command: 'npm run start -- --hostname 127.0.0.1 --port 3107',
    url: 'http://127.0.0.1:3107',
    reuseExistingServer: false,
  },
});
