import SplashAd from "./components";
import { ParallaxProvider } from 'react-scroll-parallax';
import Sticky from "./sticky";

function App() {
  return (
    <ParallaxProvider>
      <SplashAd />
      {/* <Sticky/> */}
    </ParallaxProvider>
  );
}

export default App;
