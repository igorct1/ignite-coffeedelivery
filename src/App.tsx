import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayouts";
import { CartContextStorage } from "./contexts/CartContext";
import { Checkout } from "./pages/Checkout";
import { CheckoutCompleted } from "./pages/CheckoutCompleted";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextStorage>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route
                path="/checkout-completed"
                element={<CheckoutCompleted />}
              />
            </Route>
          </Routes>
        </CartContextStorage>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
};
