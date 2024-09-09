import "./App.css";
import FetchCSVData from "./services/api";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import { useState } from "react";
import QueryListTable from "./components/QueryListTable";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExamePage from "./components/ExamePage";

function App() {
  const csvResults = FetchCSVData();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(csvResults);
  }, [csvResults]);

  return (
    <Router>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="bar">
                {<SearchBar query={query} setQuery={setQuery} />}
                {
                  <QueryListTable
                    results={results}
                    query={query}
                    setQuery={setQuery}
                  />
                }
              </div>
            }
          />
          <Route
            path="/exame/:exameId"
            element={<ExamePage results={results} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
