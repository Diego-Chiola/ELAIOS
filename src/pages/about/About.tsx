import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import Page from '../../components/Page';

const repository = 'https://github.com/Diego-Chiola/ELAIOS';

export default function About() {
  return (
    <Page className="flex relative md:mt-0 mt-header">
      <div
        className="absolute inset-0 bg-[url('./about_bg.svg')] bg-cover bg-center opacity-80 z-0"
        aria-hidden="true"
      ></div>
      <Container className="mt-16 md:mt-24 z-10">
        <main className="flex flex-col justify-center items-center gap-12 md:gap-24 text-justify px-6 xs:px-12 pb-8">
          <div className="bg-card-background p-6 rounded-xl shadow-md">
            <h2 className="text-center text-xl font-medium">
              About the project
            </h2>
            <p className="mt-4">
              ELAIOS is a research-oriented database dedicated to the study of
              olive oil use in antiquity, covering a chronological span from the
              Greek and Roman periods to the Byzantine era. It integrates
              archaeological findings and textual evidence, supported by
              critical scholarship and documented sources, to offer a
              comprehensive and interdisciplinary resource for both scholars and
              enthusiasts alike.
            </p>
            <p className="mt-2">
              The website is hosted by GitHub Pages, the ELAIOS repository can
              be consulted at the following{' '}
              <Link className="text-link hover:underline" to={repository}>
                link
              </Link>
              .
            </p>
          </div>
          <div className="bg-card-background p-6 rounded-xl shadow-md">
            <h2 className="text-center text-xl font-medium">About the team</h2>
            <p className="mt-4">
              ELAIOS is the result of the collaborative work of Martina Biamino,
              whose PhD thesis forms the foundation of the project, and Diego
              Chiola, master's student in computer science at the University of
              Genova. It is also necessary to mention Alex Valle, a master's
              student in computer science who contributed to the creation of the
              ELAIOS website.
            </p>
          </div>
        </main>
      </Container>
    </Page>
  );
}
