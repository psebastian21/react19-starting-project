import { useState } from "react"
import { EXAMPLES } from "../data"
import TabButton from "./TabButton"
import Section from "./Section"
import Tabs from "./Tabs"
export default function Examples() {
    const [selectedTopic, updateSelectedTopic] = useState()
    function handleClick(selectedButton) {
        updateSelectedTopic(selectedButton)
    }

    const tabContent = selectedTopic ? <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
    </div> : <p>Please select a topic</p>
    const buttons = <>
        <TabButton isSelected={selectedTopic === "components"} onClick={() => handleClick("components")}>Components</TabButton>
        <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleClick("jsx")}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === "props"} onClick={() => handleClick("props")}>Props</TabButton>
        <TabButton isSelected={selectedTopic === "state"} onClick={() => handleClick("state")}>State</TabButton>
    </>
    return <Section id="examples" title="Examples">
        <Tabs buttons={buttons} buttonsContainer="menu">
            {tabContent}
        </Tabs>

    </Section>
}