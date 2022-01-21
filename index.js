const firebaseConfig = {
    apiKey: "AIzaSyCf5OoxpF-pY_FJgFMUJQt0r_pdk1a5t7I",
    authDomain: "crudtut-caeec.firebaseapp.com",
    projectId: "crudtut-caeec",
    storageBucket: "crudtut-caeec.appspot.com",
    messagingSenderId: "287791850747",
    appId: "1:287791850747:web:aaae527f6990f83e33fc5e",
    databaseURL: "https://crudtut-caeec-default-rtdb.asia-southeast1.firebasedatabase.app/"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()
// Set up our register function
function register() {
    // Get all our input fields
    emailRegister = document.getElementById('emailRegister').value
    passwordRegister = document.getElementById('passwordRegister').value
    first_nameRegister = document.getElementById('first_nameRegister').value
    last_nameRegister = document.getElementById('last_nameRegister').value
    if (validate_email(emailRegister) == false || validate_password(passwordRegister) == false) {
        alert('Email or Password Error!')
        return
        // Don't continue running the code
    }
    if (validate_field(first_nameRegister) == false || validate_field(last_nameRegister) == false) {
        alert('Missing Field Error')
        return
    }
    auth.createUserWithEmailAndPassword(emailRegister, passwordRegister)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser
            // Add this user to Firebase Database
            var database_ref = database.ref()
            // Create User data
            var user_data = {
                email: emailRegister,
                first_name: first_nameRegister,
                last_name: last_nameRegister,
                last_login: Date.now()
            }
            database_ref.child('users/' + user.uid).set(user_data)
            // Done
            alert('User Created!!')
        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}
function login() {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('No username or password in the field!')
        return
        // Don't continue running the code
    }
    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser
            // Add this user to Firebase Database
            var database_ref = database.ref()
            // Create User data
            var user_data = {
                last_login: Date.now()
            }
            // Push to Firebase Database
            database_ref.child('users/' + user.uid).update(user_data)
            alert('User Login!')
            window.location.href = "lto.html";
        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message
            alert("error:" + error_message)
        })
}
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        // Email is good
        return true
    } else {
        // Email is not good
        return false
    }
}
function validate_password(password) {
    if (password < 6) {
        return false
    } else {
        return true
    }
}
function validate_field(field) {
    if (field == null) {
        return false
    }
    if (field.length <= 0) {
        return false
    } else {
        return true
    }

    // function userInfoGet() {
    //     var email = document.getElementById('email');
    //     var full_name = document.getElementById('full_name');
    //     var gender = document.getElementById('Genbox');

    //     import { getAuth } from "firebase/auth";
    //     const auth = getAuth();
    //     const user = auth.currentUser;
    //     if (user !== null) {
    //         // The user object has basic properties such as display name, email, etc.
    //         const displayName = user.displayName;
    //         const email = user.email;
    //         const photoURL = user.photoURL;
    //         const emailVerified = user.emailVerified;

    //         // The user's ID, unique to the Firebase project. Do NOT use
    //         // this value to authenticate with your backend server, if
    //         // you have one. Use User.getToken() instead.
    //         const uid = user.uid;

    //         import { getAuth } from "firebase/auth";
    //         const auth = getAuth();
    //         const user = auth.currentUser;
    //         if (user !== null) {
    //             email.setAttribute('email', user.email);
    //             full_name.setAttribute('full_name', user.)


    //             const uid = user.uid;
    //         }
    //     }

    // }
}