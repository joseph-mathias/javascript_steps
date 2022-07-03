// generators and promises
import {coruitnie as co} from 'blue-bird'


const getRandomUsers = co(function* (n){
    const fetchRandomUsers = yield fetch();
    const data = yield fetchRandomUsers.json();
    return data;
});

getRandomUsers(10).then(randomUser => {
    randomUser.forEach(users => {
        const {gender, email} = user;
        console.log(`${gender} - ${email}`);
    });
}).catch(err => console.log(err))