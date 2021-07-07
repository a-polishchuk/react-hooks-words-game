import { useCallback } from 'react';
import InputBar from 'src/components/InputBar';

function App() {
  const handleWordSubmit = useCallback((newWord: string) => {
    console.log(`new word: ${newWord}`);
  }, []);

  return <InputBar onWordSubmit={handleWordSubmit} />;
}

export default App;
