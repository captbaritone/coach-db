import "./styles.css";
import { useSearchResults } from "./search";
import { useState } from "react";
import More from "./More";
import LanguageList from "./LanguageList";
import ResultName from "./ResultName";
import Experience from "./Experience";
import Options from "./Options";

// to create new file, create file, export in file and import here. If using another function, make sure to import on the new file as well.
// This component is the entire application. Every time one of our values
// (`query`, or `results`) changes, this function will run again and generate
// new HTML.
export default function App() {
  const [query, setQuery] = useState("");
  // Pass our current search query to our search function and get results.
  const results = useSearchResults(query);

  return (
    <div className="App">
      <h2>Lyric Diction Coach Database</h2>
      <label>
        Search:{" "}
        <input
          // The search input should always show the search query
          value={query}
          // When the user types, update our `query` variable.
          onChange={(e) => setQuery(e.target.value)}
          placeHolder="ie. French, Arabic, etc."
          type="search"
          style={{ width: "200px" }}
        />
      </label>
      {/* Render our results using our special <Results /> component */}
      <Results setQuery={setQuery} results={results} />
    </div>
  );
}

// Given an array (list) of results render the table of results
function Results({ setQuery, results }) {
  // If there are no results, show a special message
  if (results.length === 0) {
    return <strong>No results</strong>;
  }

  // Render a list of results
  return results.map((result, i) => {
    // Render each result using our special <Result /> component.
    return <Result result={result} setQuery={setQuery} key={i} />;
  });
}

// A custom component for redering a single result in the results table
function Result({ setQuery, result }) {
  return (
    <div
      // Give some style to this individual result
      style={{
        fontFamily: "Helvetica",
        backgroundColor: "white",
        paddingBottom: 20,
        paddingLeft: 8,
        paddingTop: 8,
        marginBottom: 20,
        marginTop: 20,
        border: "3px solid lightgrey",
        borderRadius: 15,
        maxWidth: 450
      }}
    >
      <strong>
        {result.lastname}, {result.firstname}
      </strong>
      <LanguageList
        title="Native Language(s)"
        setQuery={setQuery}
        languages={result.native}
        addColor={true}
      />
      <LanguageList
        title="Fluent Language(s)"
        setQuery={setQuery}
        languages={result.fluent}
      />
      <LanguageList
        title="Conversational Language(s)"
        setQuery={setQuery}
        languages={result.conversational}
      />
      <LanguageList
        title="Familiar Language(s)"
        setQuery={setQuery}
        languages={result.familiar}
      />
      <div
        style={{
          paddingTop: 15
        }}
      >
        <ResultName>Location</ResultName>
      </div>
      <div>{result.location || "Available upon request."}</div>
      <div
        style={{
          paddingTop: 15
        }}
      ></div>

      <More
        more={
          <>
            <ResultName>Professional Experience</ResultName>
            <div>
              {result.professionalexperience
                .split(", ")
                .map((professionalexperience) => (
                  <Experience professionalexperience={professionalexperience} />
                ))}
            </div>
            <div>
              <ResultName>Coaching Options</ResultName>{" "}
              {result.coachingoptions.split(", ").map((coachingoptions) => (
                <Options coachingoptions={coachingoptions} />
              ))}
            </div>
            {!result.rate || (
              <div>
                <ResultName>Rate</ResultName>
                {result.rate}
              </div>
            )}
            {!result.email || (
              <div>
                <ResultName>Email</ResultName>
                <a href={"mailto:" + result.email}>{result.email}</a>
              </div>
            )}
            {!result.site || (
              <div>
                <ResultName>Website</ResultName>
                <a href={result.site}>{result.site}</a>
              </div>
            )}
            {!result.linkedin || (
              <div>
                <ResultName>LinkedIn</ResultName>
                <a href={result.linkedin}>{result.linkedin}</a>
              </div>
            )}
          </>
        }
        less={
          <>
            <ResultName>Professional Experience</ResultName>
            <div>
              {result.professionalexperience
                .split(", ")
                .slice(0, 1)
                .map((professionalexperience) => (
                  <Experience professionalexperience={professionalexperience} />
                ))}
            </div>
          </>
        }
      />
    </div>
  );
}

// This is my list of coaching options
