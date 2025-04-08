import Footer from "./_components/footer";
import Header from "./_components/header";
import Hero from "./_components/hero";
import Container from "./components/container";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Container className="min-h-screen">Cose greche e latine</Container>
      <Footer />
    </main>
  );
}

export default App;
