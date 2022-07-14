class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  static topBookStore() {
    return "Barnes & Noble";
  }
}

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year, month);
    this.month = month;
  }
}

const mag1 = new Magazine("mag one", "John Doe", "2018", "Jan");
console.log(mag1.getSummary());
