import useSWR from 'swr';
import MainHeader from '../../components/MainHeader'

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

export default function serverError() {
  const { data } = useSWR('/api/api2', fetcher);

  return (
    <div>
      <MainHeader />
      <h1>Internal Server Error</h1>
    </div>
  );
}