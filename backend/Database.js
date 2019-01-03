// Initialize Firebase
var firebase = require("firebase")
var config = {
    apiKey: "AIzaSyAwvzrWXBm656-Ai-dgoscw1hrVGql6K5M",
    authDomain: "social-tech-a4b81.firebaseapp.com",
    databaseURL: "https://social-tech-a4b81.firebaseio.com",
    projectId: "social-tech-a4b81",
    storageBucket: "social-tech-a4b81.appspot.com",
    messagingSenderId: "1032152025399"
};
firebase.initializeApp(config);

function writeUserData(name, number, email, userId) {
    var d = new Date()
    firebase.database().ref('Users/' + userId).set({
        fullName: name,
        email: email,
        phoneNumber: number,
        dateTime: d.getTime()
    });
}

writeUserData("Leonard", "I dunno", "I dunno either", 3)
