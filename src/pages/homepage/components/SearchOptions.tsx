import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';

export default function SearchOptions() {
  return (
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
  );
}
