import './App.css';
import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import user from './data/Profile/user.json';
import statisticalData from './data/Statistics/statistical-data.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticalData} />
      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
}

export default App;
