import FetchResults from '../../components/FetchResults';
import Searchbar from '../../components/Searchbar';
import { useClientRouter } from 'use-client-router';

function Results() {
  const router = useClientRouter();
  const pathname = router.pathname;
  return (
    <div>
      {/* <Searchbar /> */}
      <FetchResults option={pathname.slice(12).toLowerCase()} />
    </div>
  );
}

export default Results;
