import Accordion from './components/Accordion'
import faqData from './data.json'

function App() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqData.map((item) => {
          return (
            <Accordion.Item key={item.key}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          )
        })}
      </Accordion.Frame>
    </Accordion>
  )
}

export default App;