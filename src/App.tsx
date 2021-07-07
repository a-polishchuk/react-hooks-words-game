import { useCallback } from 'react';
import MainLayout from 'src/components/MainLayout';
import InputBar from 'src/components/InputBar';

function App() {
  const handleWordSubmit = useCallback((newWord: string) => {
    console.log(`new word: ${newWord}`);
  }, []);

  return (
    <MainLayout
      mainArea={<div>Main area</div>}
      bottomArea={<InputBar onWordSubmit={handleWordSubmit} />}
    />
  );
}
export default App;
