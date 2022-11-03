function notification() {
    const title = body = "minoxidil!"
    const options = {
        body,
        tag: "minoxidil",
    };
    return new Not(title, options);
    //return options.tag
    //return title
}
  
const car1 = new Car('Eagle', 'Talon TSi', 1993);
  
console.log(car1.make);
  // expected output: "Eagle"
//console.log(notification())
console.log(Not.options.tag)