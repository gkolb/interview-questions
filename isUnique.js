var isUnique = function(string) {
  var charObject = {}
  for (var i = 0; i < string.length; i++) {
      if (charObject[string[i]]) {
          return false;
      }
      charObject[string[i]] = true;
  }
  return true;
}

console.log(isUnique('hey'))
console.log(isUnique('heyy'))
console.log(isUnique('greg'))