function arrayContains(array, object) {
  return array.some( val => Object.keys(val)[0] );
}

function isEmpty(obj) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  if ( obj === null || obj.length === 0 ) {
    return true;
  }

  if ( obj.length > 0 ) {
    return false;
  }

  for ( var key in obj ) {
    if ( hasOwnProperty.call(obj, key) ) {
      return false;
    }
  }

  return true;
}

exports.arrayContains = arrayContains;
exports.isEmpty = isEmpty;
