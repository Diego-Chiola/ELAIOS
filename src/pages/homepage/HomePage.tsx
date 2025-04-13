import Container from '../../components/Container';
import Page from '../../components/Page';
import LeftBg from './static/left-bg.svg';

export default function HomePage() {
  return (
    <Page className="flex relative md:mt-0 h-screen-real mt-header">
      {/* Background images */}
      <div className="absolute inset-0 pointer-events-none z-[-100]">
        <img
          src={LeftBg}
          alt="left background"
          className="object-contain object-left-top absolute top-0 left-0 h-[90%] w-[100%]"
        />
      </div>

      <Container className="mt-12">
        <main className="flex flex-col justify-center items-center">
          <h1 className="text-7xl font-medium sm:text-9xl xs:text-8xl font-accent md:text-[200px]">
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
