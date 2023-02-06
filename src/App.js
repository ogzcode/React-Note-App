import './App.css';
import NoteApp from "./components/NoteApp.js";
import NoteProvider from './hooks/useNote';

function App() {
  return (
    <>
      <NoteProvider>
        <NoteApp />
      </NoteProvider>
    </>
  );
}

export default App;
