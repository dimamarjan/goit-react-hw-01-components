import './App.css';
import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/Friends/FriendList';

import user from './data/Profile/user.json';
import statisticalData from './data/Statistics/statistical-data.json';
import friends from './data/Friends/friends.json';

function App() {
  return (
    <div className="App">
      {/* task 1 */}
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* task 2 */}
      <Statistics stats={statisticalData} />
      <Statistics title="Upload stats" stats={statisticalData} />

      {/* task 3 */}
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
