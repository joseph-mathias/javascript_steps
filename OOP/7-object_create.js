const BookCreate = {
  getSurmmary: () => {
    return `${this.title} waswritten by ${this.author} in ${this.year}`;
  },
  getAge: () => {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

// const obj = Object.create(BookCreate);
// obj.title = "Science";
// obj.author = "John Doe";
// obj.yaer = "2017";

const obj2 = Object.create(BookCreate, {
  title: { value: "Book one" },
  author: { value: "John Doe" },
  year: { value: "2018" },
});

console.log(obj2);
