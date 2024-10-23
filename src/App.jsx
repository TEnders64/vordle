import './App.css'

function App() {

    fetch('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=fz5q52ue7kq3awvrdwkjajd80tn7b2g9182feitdwfturixex')
    .then(response => {
      if (!response.ok){
        throw new Error('Network response not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.word);
    })
    .catch(error => {
        console.error('There was a problem when fetching:', error);
    })



  return (
    <>
        <h1>Vordle</h1>
    </>
  )
}

export default App
