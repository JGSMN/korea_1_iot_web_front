class User {
  const(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}
User.printInfo()

let UI = new User('lks', '28', 'lee49000eh@naver.com');
console.log(UI);



class Product {
  const(name, price) {
    this.name = name;
    this.price = price;
  }
}
Product.printProduct()

class Order {
  const(user, product, quantity) {
    this.user = user;
    this.product = product;
    this.quantity = quantity;
  }
}
Order.printOrderSummary()

let OS = new Order('lks', '바디워시', '2개')
console.log(OS);