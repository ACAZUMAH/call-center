import { Provider } from "react-redux";
import { MantineThemeProvider } from "../providers";
import { AppRouter } from "../router/router";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryProvider } from "../services/tanStack-client";
import { StyledThemeProvider } from "../providers/StyledThemeProvider";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <QueryProvider>
            <MantineThemeProvider>
              <StyledThemeProvider>
                <AppRouter />
              </StyledThemeProvider>
            </MantineThemeProvider>
          </QueryProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
