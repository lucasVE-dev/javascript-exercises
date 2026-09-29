        const findTheOldest = function(people) {
            
            const peopleAges = people.map(function(person){
            
            let yearOfDeath = new Date().getFullYear();

            if (Object.hasOwn(person, 'yearOfDeath')){
                yearOfDeath = person.yearOfDeath;
            };

            return (yearOfDeath - person.yearOfBirth);

            }); 

            let oldestAge = 0;
            let index = 0;
            for (let i = 0; i < peopleAges.length; i++){
                console.log(peopleAges[i]);
                if (peopleAges[i]>oldestAge){
                    oldestAge = peopleAges[i];
                    index = i;
                }
            }

            return (people[index]);
        };



// Do not edit below this line
module.exports = findTheOldest;
