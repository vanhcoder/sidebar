import "../styles/globals.css";
import { SidbarWrapper } from "../contexts/sidebarContext.tsx";
function MyApp({ Component, pageProps }) {
  return (
    <SidbarWrapper>
      <Component {...pageProps} />
    </SidbarWrapper>
  );
}

export default MyApp;
