function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = () => {
  return `${this.title} waswritten by ${this.author} in ${this.year}`;
};

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);

const mg = new Magazine("A", "G H", "2018", "Jan");

Magazine.prototype.constructor = Magazine;
console.log(mg);
