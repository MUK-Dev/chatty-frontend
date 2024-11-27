import { BrowserRouter } from "react-router";

import { ThemeProvider } from "./providers/theme-provider";
import AppRoutes from "./routes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
