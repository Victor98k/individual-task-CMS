import Header from "@/components/nestable/Header";

//Uses config set global components for the layout
export default function Layout({ config, children }) {
  console.log(config);
  return (
    <>
      <header>
        <Header config={config} />
      </header>

      <main>{children}</main>
      <footer></footer>
    </>
  );
}
