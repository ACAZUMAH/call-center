import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import '@mantine/dates/styles.css';
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import App from "./app/App.tsx";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
