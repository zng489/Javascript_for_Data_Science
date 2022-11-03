console.log("Start");

function loginUser(email, callback) {
    setTimeout(() => {
        console.log("Now we have the data");
        callback(["video1","video2","video3"]);
        //return {userEmail: email};
        callback({userEmail: email});
    }, 1500);
}


//function getUserVideos(email, callback) {
//    setTimeout( () => {
//        return (["video__1","video__2","video__3"]);
//    }, 1000);
//}


//function videoDetails(video, callback) {
//    setTimeout( () => {
//        callback ('title of th video');
//    }, 1000);
//}

// user = callback
const user = loginUser("zhang@teste.com", user => {
    console.log(user);
});



//console.log(user);
console.log("End")