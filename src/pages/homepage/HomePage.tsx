import Container from '../../components/Container';
import Page from '../../components/Page';
import LeftBg from './static/left-bg.svg';
import RightBg from './static/right-bg.svg';

export default function HomePage() {
  return (
    <Page className="flex relative md:mt-0 h-screen-real mt-header">
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
          <h1 className="text-7xl sm:text-9xl xs:text-8xl font-accent text-primary-foreground md:text-[200px]">
            ELAIOS
          </h1>
        </main>
      </Container>

      {/* <p className="px-8 font-sans text-7xl md:px-0"> */}
      {/*   Exploring Literary and Archaeological Insights on ancient Oil Studies */}
      {/* </p> */}
    </Page>
  );
}
