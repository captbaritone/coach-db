import algoliasearch from "algoliasearch";
import { useEffect, useState } from "react";

const APPLICATION_ID = "BB0SG1L02L";
const SEARCH_API_KEY = "89ef00e6f5aa94924fcb6ec73dce2cd5";

const INDEX_NAME = "Lyric Diction Coaches Database";

const client = algoliasearch(APPLICATION_ID, SEARCH_API_KEY);
const index = client.initIndex(INDEX_NAME);

export function useSearchResults(query) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    let unmounted = false;
    index
      .search(query)
      .then(({ hits }) => {
        if (!unmounted) {
          setResults(hits);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      unmounted = true;
    };
  }, [query]);

  return results;
}
