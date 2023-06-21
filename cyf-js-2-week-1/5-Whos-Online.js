const whosOnline = (friends) => {
  var result = {};
  friends.forEach((friend) => {
    var status = friend.status === "online" && friend.lastActivity > 10 ? "away": friend.status;
    result[status] ? result[status].push(friend.username) : result[status] = [friend.username];
  });
  return result;
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
