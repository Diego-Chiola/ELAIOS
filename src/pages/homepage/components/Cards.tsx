import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Link } from 'react-router';

export default function Cards() {
  const [openCard, setOpenCard] = useState<'latin' | 'greek' | null>(null);

  const toggleCard = (card: 'latin' | 'greek') => {
    console.log('ciao');
    setOpenCard(prev => (prev === card ? null : card));
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-start my-8 sm:my-16 lg:my-24 gap-8 sm:gap-12 md:gap-24 lg:gap-32">
      {/* Latin Card */}
      <Card className="transition-all duration-300">
        <CardHeader
          className="text-center cursor-pointer border-b border-card-border"
          onClick={() => toggleCard('latin')}
        >
          <CardTitle className="text-2xl font-semibold">
            Latin sources
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 text-lg font-medium p-0">
          <div
            className={`border-b border-card-border px-6 overflow-hidden transition-all duration-500 ease-in-out ${
              openCard === 'latin'
                ? 'max-h-40 opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="list-disc list-inside my-2">
              <li className="my-1">
                <Button className="p-0 text-lg" variant={'link'}>
                  <Link to={'./'}>Geographical display</Link>
                </Button>
              </li>
              <li className="my-1">
                <Button className="p-0 text-lg" variant={'link'}>
                  <Link to={'./'}>Date display</Link>
                </Button>
              </li>
              <li className="my-1">
                <Button className="p-0 text-lg" variant={'link'}>
                  <Link to={'./'}>Advanced research</Link>
                </Button>
              </li>
            </ul>
          </div>
          <div
            className={`flex flex-col gap-4 px-6 pb-6 ${
              openCard === 'latin' ? 'pt-0' : 'pt-2'
            }`}
          >
            <Button className="p-0 text-lg" variant={'link'}>
              <Link to={'./'}>Archeological evidences</Link>
            </Button>
            <Button className="p-0 text-lg" variant={'link'}>
              <Link to={'./'}>Textual Evidences</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Greek Card */}
      <Card className="transition-all duration-300">
        <CardHeader
          className="text-center cursor-pointer border-b border-card-border"
          onClick={() => toggleCard('greek')}
        >
          <CardTitle className="text-2xl font-semibold">
            Greek sources
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 text-lg font-medium p-0">
          <div
            className={`border-b border-card-border px-6 overflow-hidden transition-all duration-500 ease-in-out ${
              openCard === 'greek'
                ? 'max-h-40 opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="list-disc list-inside my-2">
              <li className="my-1">
                <Button className="p-0 text-lg" variant={'link'}>
                  <Link to={'./'}>Geographical display</Link>
                </Button>
              </li>
              <li className="my-1">
                <Button className="p-0 text-lg" variant={'link'}>
                  <Link to={'./'}>Date display</Link>
                </Button>
              </li>
              <li className="my-1">
                <Button className="p-0 text-lg" variant={'link'}>
                  <Link to={'./'}>Advanced research</Link>
                </Button>
              </li>
            </ul>
          </div>
          <div
            className={`flex flex-col gap-4 px-6 pb-6 ${
              openCard === 'greek' ? 'pt-0' : 'pt-2'
            }`}
          >
            <Button className="p-0 text-lg" variant={'link'}>
              <Link to={'./'}>Archeological evidences</Link>
            </Button>
            <Button className="p-0 text-lg" variant={'link'}>
              <Link to={'./'}>Textual Evidences</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
