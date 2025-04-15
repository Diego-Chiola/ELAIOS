import Container from '../../components/Container';
import Page from '../../components/Page';
import Cards from './components/Cards';
import Hero from './components/Hero';
import LeftBg from './static/left-bg.svg';
import RightBg from './static/right-bg.svg';

export default function HomePage() {
  return (
    <Page className="flex relative md:mt-0 mt-header">
      {/* Background images */}
      <div className="absolute inset-0 pointer-events-none z-[-100]">
        <img
          src={LeftBg}
          alt="left background"
          className="object-contain object-left-top absolute top-0 left-0 w-full h-full"
        />
        <img
          src={RightBg}
          alt="right background"
          className="hidden object-cover absolute top-0 right-0 h-full lg:block"
        />
      </div>

      <Container className="mt-12">
        <main className="flex flex-col justify-center items-center">
          <Hero />
          <Cards />
        </main>
      </Container>
    </Page>
  );
}
