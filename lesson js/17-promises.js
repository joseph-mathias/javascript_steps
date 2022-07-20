// promises

// pending, fulfilled, rejected

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('data back from the server!');
    resolve(["Moses", "Royd", "Sharon", "Mulonda"]);
  }, 3000);

  setTimeout(() => {
    reject("no data back from the server!");
  }, 5000);
});
const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('data back from the server!');
    resolve(["Smith", "Williams", "Jones", "Mohammad"]);
  }, 1000);

  setTimeout(() => {
    reject("no data back from the server!");
  }, 4000);
});

// promise.then(response => {
//     console.log(response);
// }).catch(error => {
//     console.log(error);
// })

Promise.all([promise, newPromise])
  .then((data) => {
    // console.log(data);
    const [names, othernames] = data;
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      const othername = othernames[i];
      console.log(`${name}, ${othername}`);
    }
  })
  .catch((err) => {
    console.log(err);
  });
console.log("Hello, world");

// Real World Example

const getUser = (n) => {
  const fetchRandom = fetch(`https://randomuser.me/api/?results=${n}`);
  console.log(fetchRandom);
  fetchRandom.then((data) => {
    data.json().then((randomUser) => {
      // console.log(randomUser);
      // console.log(randomUser.results.length);
      randomUser.results.forEach((user) => {
        const { gender, email } = user;
        console.log(`${gender} - ${email}`);
      });
    });
  });
};

getUser(19);
