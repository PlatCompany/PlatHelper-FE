/// <reference types="vinxi/types/client" />
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start";
import { router } from "./router";

hydrateRoot(document, <StartClient router={router} />);
