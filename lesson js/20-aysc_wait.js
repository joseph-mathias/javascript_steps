import fetch from "node-fetch";
// Async Await
// async function logName(name){
//     console.log(name);

//     const transforName = new Promise((resolve, reject) => {
//         setTimeout(() => resolve(name.toUpperCase()), 1000)
//     });

//     const result = await transforName;
//     return result;
// }

// logName('Goerge').then(res => {
//     console.log(`Results: ${res}`);
// })

// Fetch API

const loggingName = async (n) => {
  const fetchRandomUsers = await fetch(
    `https://randomuser.me/api/?results=${n}`
  );
  const data = await fetchRandomUsers.json();
  data.results.forEach((user) => {
    const { gender, email } = user;
    console.log(`${gender} - ${email}`);
  });
  return data;
};

loggingName(7);

// Handling Errors
// const loggingName = async name =>{
//     try {
//         const fetchRandomUsers = await fetch();
//         const data = await fetchRandomUsers.json();
//         data.results.forEach(user => {
//         const {gender, email} = user;
//         console.log(`${gender} - ${email}`);
//     });
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// };

// loggingName(7);
