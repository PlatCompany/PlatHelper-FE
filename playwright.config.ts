import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	testDir: "./src/test/e2e",
	timeout: 30000,
	retries: 1,
	use: {
		baseURL: "http://localhost:3000",
		trace: "on-first-retry",
		screenshot: "only-on-failure",
	},
	projects: [
		{
			name: "chromium",
			use: { browserName: "chromium" },
		},
		{
			name: "firefox",
			use: { browserName: "firefox" },
		},
		{
			name: "webkit",
			use: { browserName: "webkit" },
		},
	],
	webServer: {
		command: "pnpm dev",
		port: 3000,
		reuseExistingServer: !process.env.CI,
	},
};

export default config;
