import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { DefaultCatchBoundary } from "./features/core/default_catch_boundary";
import { NotFound } from "./features/routing/pages/not_found";
import { routeTree } from "./routeTree.gen";

export const router = createTanStackRouter({
	routeTree,
	defaultPreload: "intent",
	defaultErrorComponent: DefaultCatchBoundary,
	defaultNotFoundComponent: () => <NotFound />,
	scrollRestoration: true,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
