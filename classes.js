class User {
  constructor(mail, password) {
    this.mail = mail;
    this.password = password;
    this.admin = false;
  }
  isAdmin() {
    return this.admin;
  }
}

class Admin extends User {
  constructor(mail, password) {
    super(mail, password);
    this.admin = true;
  }
}

const user = new User('mail@fabebook.com', '123');
const admin = new Admin('mail@fabebook.com', '123');

user.isAdmin(); // false
admin.isAdmin(); // true