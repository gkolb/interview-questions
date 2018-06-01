/* first guess
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
*/

export function isUnique(string) {
  var char = new Set();
  for (var i = 0; i < string.length; i++) {
    if (char.has(string[i])) {
      return false;
    }
    char.add(string[i]);
  }
  return true;
}
