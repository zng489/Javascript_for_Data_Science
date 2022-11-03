console.log("Start");

function loginUser(email, password) {
    setTimeout(() => {
        console.log("Now we have the data")
        return {userEmail: email};
    }, 1500);
};

const user = loginUser("zhang@teste.com", 1234);
console.log(user);

console.log("End")