import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold">
				Welcome to PlatHelper
			</h1>
			<p>This is a simple example page.</p>
		</div>
	);
}
