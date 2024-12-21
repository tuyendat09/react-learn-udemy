import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components//CooreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedContent, setSelectedContent] = useState();

  function handleSelect(components) {
    setSelectedContent(components);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept key={index} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedContent === "components"}
              onSelect={() => {
                handleSelect("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedContent === "jsx"}
              onSelect={() => {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedContent === "props"}
              onSelect={() => {
                handleSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedContent === "state"}
              onSelect={() => {
                handleSelect("state");
              }}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            {!selectedContent ? (
              <p>Please select content</p>
            ) : (
              <>
                <h3>{EXAMPLES[selectedContent].title}</h3>
                <p>{EXAMPLES[selectedContent].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedContent].code}</code>
                </pre>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
