import React from "react";
import { hydrateRoot } from "react-dom";
import Application from "./main";

hydrateRoot(document, <Application script="src/client-entry.jsx" />);