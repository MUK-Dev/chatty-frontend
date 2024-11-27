import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router";

import { ThemeProvider } from "./providers/theme-provider";
import AppRoutes from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
