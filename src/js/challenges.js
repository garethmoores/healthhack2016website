window.stampChallenges = function(year) {
  current = (new Date).getFullYear() == year;
  var version = current ? "current" : "archive";
  if(current) {
    fetchstring = 'https://sheetsu.com/apis/v1.0/533772eb0bba';
  } else {
    fetchstring = 'data/challenges-archive.json';
  }
  fetch(fetchstring)
  .then( function(resp) { return resp.json() })
  .then(function(challenges) {
    current = (new Date).getFullYear() == year;
    if(current) {
      challenges.forEach(function(challenge) {
        challenge.year = year;
        challenge.img = 'images/sponsors/'+challenge.image;
      })
    }
    document.querySelector('hh-challenges').challenges = challenges;
  }.bind(this));
}
