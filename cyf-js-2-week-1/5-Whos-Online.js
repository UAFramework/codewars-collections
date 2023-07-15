const whosOnline = (friends) => {
  let friendsStatus = {};
for (let values of friends) {
    if (values.status === 'online' && values.lastActivity <= 10) {
      if (!friendsStatus.online) {
        friendsStatus.online = [];
      }
      friendsStatus.online.push(values.username);
    } else if (values.status === 'offline') {
      if (!friendsStatus.offline) {
        friendsStatus.offline = [];
      }
      friendsStatus.offline.push(values.username);
    } else {
      if (!friendsStatus.away) {
        friendsStatus.away = [];
      }
      friendsStatus.away.push(values.username);
    }
  }

  return friendsStatus;
};

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
})

