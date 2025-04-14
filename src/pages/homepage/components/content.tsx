import Container from '../../../components/container';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';

export default function Content() {
  return (
    <Container className="self-center mx-0 pt-32 px-8 md:px-0">
      <div className="flex justify-around flex-wrap gap-16">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold">
              Latin sources
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 text-lg font-medium">
            <h3>Archeological evidences</h3>
            <h3>Textual Evidences</h3>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold">
              Greek sources
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 text-lg font-medium">
            <h3>Archeological evidences</h3>
            <h3>Textual Evidences</h3>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
