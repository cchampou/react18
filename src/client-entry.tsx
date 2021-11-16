import React from "react";
import { hydrateRoot } from "react-dom";
import Application from "./Application";

hydrateRoot(document, <Application script="src/client-entry.tsx" />);