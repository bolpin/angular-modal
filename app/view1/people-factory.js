'use strict';

angular.module('myApp.view1')
.factory('peopleFactory', function () {

  var service = {
    getAll: function() {
      return _names.map(_nameToObj);
    }
  }

  var _names = [
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
    'Septimius Severus',
    'Commodus',
    'Publius Aelius Hadrianus',
    'Elagabalus',
    'Titus',
    'Nerva',
    'Vitellius',
    'Otho',
    'Galba',
    'Caracalla',
  ];

  var _nameToObj = function(name){
    return {'score' : 0, 'name' : name};
  }

  return service;
});

