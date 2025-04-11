import Footer from "./_components/footer";
import Header from "./_components/header";
import Container from "./components/container";

function App() {
  return (
    <main className="flex flex-col min-h-dvh bg-background">
      <Header />
      <Container className="pt-8 text-2xl font-medium text-center">
        <p className="px-8 md:px-0">
          Exploring Literary and Archaeological Insights on ancient Oil Studies
        </p>
      </Container>
      <Footer />
    </main>
  );
}

export default App;
