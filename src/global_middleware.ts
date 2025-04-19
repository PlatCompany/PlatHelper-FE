import { registerGlobalMiddleware } from "@tanstack/react-start";
import { logMiddleware } from "./features/middlewares/logging_middleware";

registerGlobalMiddleware({
	middleware: [logMiddleware],
});
