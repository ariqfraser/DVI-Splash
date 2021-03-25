import SplashAd from "./components";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <SplashAd />
    </ParallaxProvider>
  );
}

export default App;
