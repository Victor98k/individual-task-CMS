import Header from "@/components/nestable/Header";
import Footer from "../nestable/Footer";
import NotFound from "@/app/not-found";

//Uses config set global components for the layout
export default function Layout({ config, children }) {
  return (
    <>
      <header>
        <Header config={config} />
      </header>
      {/* <section>
        <NotFound config={config} />
      </section> */}

      <main>{children}</main>
      <footer>
        <Footer config={config} />
      </footer>
    </>
  );
}
