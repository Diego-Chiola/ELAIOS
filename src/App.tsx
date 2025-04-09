import Footer from "./_components/footer";
import Header from "./_components/header";
import Container from "./components/container";

function App() {
  return (
    <main>
      <Header />
      <Container className="bg-background min-h-screen text-2xl font-medium text-center pt-8">
        <p className="px-8 md:px-0">
          Exploring Literary and Archaeological Insights On ancient oil Studies
        </p>
      </Container>
      <Footer />
    </main>
  );
}

export default App;
