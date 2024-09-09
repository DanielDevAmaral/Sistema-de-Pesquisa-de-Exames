import { useState } from "react";
import OneQuery from "../OneQuery";
import { useEffect } from "react";
import "./QueryListTable.css";

const QueryListTable = ({ results, query, setQuery }) => {
  const [shownResults, setShownResults] = useState([]);

  useEffect(() => {
    let newShownResults = [];
    results.forEach((result) => {
      const fullQuery = `${result.EXAME}`;
      const queryWithoutSpaces = query;
      const indexOfQuery = fullQuery
        .toLocaleLowerCase()
        .indexOf(queryWithoutSpaces);
      const beforeQuery = fullQuery.slice(0, indexOfQuery);
      const afterQuery = fullQuery.slice(
        indexOfQuery + queryWithoutSpaces.length
      );

      if (indexOfQuery >= 0) {
        newShownResults.push({
          boldedPartBefore: beforeQuery,
          normalText: queryWithoutSpaces,
          boldedPartAfter: afterQuery,
          popularity: result.popularity,
          id: result.id,
        });
      }
    });

    newShownResults.sort((a, b) => b.popularity - a.popularity);
    setShownResults(newShownResults);
  }, [query, results]);

  return (
    <>
      {shownResults.length > 0 && query && (
        <div className="table-container-scroll">
          <table className="table-container">
            <tbody>
              {shownResults.map((shownQuery, key) => {
                return (
                  <OneQuery
                    key={key}
                    boldedPartBefore={shownQuery.boldedPartBefore}
                    normalText={shownQuery.normalText}
                    boldedPartAfter={shownQuery.boldedPartAfter}
                    query={query}
                    setQuery={setQuery}
                    result={shownQuery.id}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default QueryListTable;
