angular
    .module('ace-admins')
    .service('SharedService', function () {
        var isLoaded = false;
        var subject = {};
        var collection = {};
        this.setSubject = function (subj) {
            subject = subj;
            isLoaded = true;
        };
        this.getSubject = function () {
            return subject;
        };
        this.getExercises = function (collection) {
            var exercises = [];
            angular.forEach(subject.collections, function(coll){
                if(coll.name == collection){
                    console.log(coll);
                    exercises = coll.exercises;
                }
            });
            return exercises;
        };
        this.setCollection = function (coll) {
            if(!coll in subject.collections){
                console.log('not in')
                subject.collections[coll] = [];
            }
            collection = coll;
        }
        this.getCollection = function () {
            return collection;
        }
        this.isLoaded = function () {
            return isLoaded;
        }
    });