import {
	createRootRoute,
	Outlet,
} from "@tanstack/react-router";

export const Route = createRootRoute({
	component: Root,
});

function Root() {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<title>PlatHelper</title>
			</head>
			<body>
				<Outlet />
			</body>
		</html>
	);
}
