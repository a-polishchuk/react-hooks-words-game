import { GameContextProvider } from 'src/components/GameContext';
import MenuDialog from 'src/components/MenuDialog';
import MainLayout from 'src/components/MainLayout';
import SpawnPool from 'src/components/SpawnPool';
import InputBar from 'src/components/InputBar';
import TopBar from 'src/components/TopBar';

function App() {
  return (
    <GameContextProvider>
      <MenuDialog />
      <MainLayout
        topArea={<TopBar />}
        mainArea={<SpawnPool />}
        bottomArea={<InputBar />}
      />
    </GameContextProvider>
  );
}

export default App;
