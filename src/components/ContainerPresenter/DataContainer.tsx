import { useEffect, useState } from 'react';
import { DataPresenter, DataItem } from './DataPresenter';

export const DataContainer = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch('/data/data.json');
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(`Error fetching data: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data.length > 0 && <DataPresenter data={data}></DataPresenter>}
    </div>
  );
};
