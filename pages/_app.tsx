import "../styles/globals.css";
import { MyAppProps } from "~/pages/components/layout/types";
import { Layouts } from "~/pages/components/layout/Layouts";
function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Layouts[Component.Layout] ?? ((page: any) => page);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
