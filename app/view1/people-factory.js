'use strict';

angular.module('myApp.view1')
.factory('peopleFactory', function () {

  var service = {
    getAll: function() {
      return _names.map(_nameToObj);
    }
  }

  var _names = [
    'Mrs. White',
    'Mr. Green',
    'Miss Scarlet',
    'Professor Plum',
    'Mrs. Peacock',
    'Colonel Mustard',
    'Agustus',
    'Nero',
    'Caligula',
    'Claudius',
    'Tiberius',
    'Trajan',
    'Commodus',
    'Domitian',
    'Publius Aelius Hadrianus',
    'Marcus Aurelius',
    'Vespasian',
    'Nerva',
    'Titus',
  ];

  var _nameToObj = function(name){
    return {'score' : 0, 'name' : name};
  }

  return service;
});

