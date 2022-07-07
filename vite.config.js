import { sveltekit } from "@sveltejs/kit/vite";
import intlPrecompile from "svelte-intl-precompile/sveltekit-plugin";
import path from "path";

const aliasList = [
	{ name: "@data", path: "./src/data" },
	{ name: "@components", path: "./src/lib/components" },
	{ name: "@layout", path: "./src/lib/layout" },
	{ name: "@lib", path: "./src/lib" },
	{ name: "@styles", path: "./src/lib/styles" },
	{ name: "@stores", path: "./src/lib/stores" },
	{ name: "@utils", path: "./src/lib/utils" },
	{ name: "@views", path: "./src/lib/views" },
	{ name: "@types", path: "./src/types" },
	{ name: "@paths", path: "./src/core/paths.ts" },
	{ name: "@core", path: "./src/core" },
	{ name: "$locales", path: "./src/locales" }
];

const config = {
	plugins: [
		sveltekit(),
		intlPrecompile("/src/locales")
	],
	resolve: {
		alias: Object.fromEntries(aliasList.map(alias => (
			[ alias.name, path.resolve(alias.path) ]
		)))
	},
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			allow: [ ".." ]
		}
	}
};

export default config;