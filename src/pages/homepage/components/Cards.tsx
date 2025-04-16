import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '../../../components/ui/card';
import SearchOptions from './SearchOptions';

export default function Cards() {
  const [openCard, setOpenCard] = useState<
    | 'latinArcheological'
    | 'latinTextual'
    | 'greekArcheological'
    | 'greekTextual'
    | null
  >(null);

  const toggleCard = (
    card:
      | 'latinArcheological'
      | 'latinTextual'
      | 'greekArcheological'
      | 'greekTextual',
  ) => {
    setOpenCard(prev => (prev === card ? null : card));
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-start my-8 sm:my-16 lg:my-24 gap-8 sm:gap-12 md:gap-24 lg:gap-32">
      {/* Latin Card */}
      <Card className="transition-all duration-300">
        <CardHeader className="text-center border-b border-card-border px-16">
          <CardTitle className="text-2xl font-semibold">
            Latin sources
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div className="flex flex-col text-lg font-medium">
            <h3
              className="cursor-pointer text-center border-b border-card-border py-4"
              onClick={() => toggleCard('greekArcheological')}
            >
              Archeological evidences
            </h3>
            <div
              className={`border-b border-card-border px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                openCard === 'greekArcheological'
                  ? 'max-h-40 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <SearchOptions />
            </div>
            <h3
              className="cursor-pointer text-center py-4"
              onClick={() => toggleCard('greekTextual')}
            >
              Textual Evidences
            </h3>
            <div
              className={`border-t border-card-border px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                openCard === 'greekTextual'
                  ? 'max-h-40 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <SearchOptions />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Greek Card */}
      <Card className="transition-all duration-300">
        <CardHeader className="text-center border-b border-card-border px-16">
          <CardTitle className="text-2xl font-semibold">
            Greek sources
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div className="flex flex-col text-lg font-medium">
            <h3
              className="cursor-pointer text-center border-b border-card-border py-4"
              onClick={() => toggleCard('latinArcheological')}
            >
              Archeological evidences
            </h3>
            <div
              className={`border-b border-card-border px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                openCard === 'latinArcheological'
                  ? 'max-h-40 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <SearchOptions />
            </div>
            <h3
              className="cursor-pointer text-center py-4"
              onClick={() => toggleCard('latinTextual')}
            >
              Textual Evidences
            </h3>
            <div
              className={`border-t border-card-border px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                openCard === 'latinTextual'
                  ? 'max-h-40 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <SearchOptions />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
