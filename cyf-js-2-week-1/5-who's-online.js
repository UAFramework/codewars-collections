const whosOnline = (friends) => {
  let friendList = {
    online: [],
    offline: [],
    away: []
  };
  for (let friend of friends) {
    if (friend.status === 'offline') {
      friendList.offline.push(friend.username);
    } else if (friend.status === 'online' && friend.lastActivity <= 10) {
      friendList.online.push(friend.username);
    } else if (friend.status === 'online' && friend.lastActivity > 10) {
      friendList.away.push(friend.username);
    } 
  }
    
  if (friendList.online.length === 0) {
    delete friendList.online;
    };
  if (friendList.offline.length === 0) {
      delete friendList.offline
    };
  if (friendList.away.length === 0) { 
      delete friendList.away;
    };
    
  if (friends.length === 0) {
    return {};
  }




const Test = require('@codewars/test-compat');

describe('Given examples', function () {
  var friends

  it('Example test one of each', function () {
    friends = [{
      username: 'David',
      status: 'online',
      lastActivity: 10
    }, {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }]
    Test.assertDeepEquals(whosOnline(friends), {
      online: ['David'],
      offline: ['Lucy'],
      away: ['Bob']
    }, 'Wrong result for example one of each')
  })
  
  it('Example test no one online', function () {
    friends = [{
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }]

    Test.assertDeepEquals(whosOnline(friends), {
      offline: ['Lucy'],
      away: ['Bob']
    }, 'Wrong result for example no one online')
  })
})}