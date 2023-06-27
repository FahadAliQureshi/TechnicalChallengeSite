import logo from './logo.svg';
import './App.css';
import Header from "../src/components/Header"

import Banner from './screens/Banner';
import UnderBanner from './screens/UnderBanner';
import ThirdPart from './screens/ThirdPart';
import FourthSection from './screens/FourthSection';
import FifthSection from './screens/FifthSection';
import Contact from './screens/Contact';
import Info from './screens/Info';

function App() {
  return (
<div>

  <Banner/>
 
<UnderBanner/>
<ThirdPart/>

<FourthSection/>

<FifthSection/>
<Contact/>
<Info/>
</div>
  );
}

export default App;
