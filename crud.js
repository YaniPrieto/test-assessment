// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);
import { getDatabase, ref, get, set, child, update, remove }
    from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js"
const db = getDatabase();
// Reference Variables
// var namebox = document.getElementById("Namebox");
// var genbox = document.getElementById("Genbox");
var firstbox = document.getElementById("Firstbox");
var lastbox = document.getElementById("Lastbox");
var telbox = document.getElementById("Telbox");
var tinbox = document.getElementById("Tinbox");
var natbox = document.getElementById("Natbox");
var genbox = document.getElementById("Genbox");
var birthbox = document.getElementById("Birthbox");
var heightbox = document.getElementById("Heightbox");
var weightbox = document.getElementById("Weightbox");
var civilbox = document.getElementById("Civilbox");
var educbox = document.getElementById("Educbox");
var bloodbox = document.getElementById("Bloodbox");



var instBtn = document.getElementById("Insbtn");
var selBtn = document.getElementById("Selbtn");
var updBtn = document.getElementById("Updbtn");
var delBtn = document.getElementById("Delbtn");

// <!-- CREATING DATA -->
function InsertData() {
    set(ref(db, "LTO-FORM/" + rollbox.value), {
        NameOfStd: namebox.value,
        RollNo: rollbox.value,
        Section: secbox.value,
        Gender: genbox.value

    })
        .then(() => {
            alert("data stored successfully");
        })
        .catch((error) => {
            alert("failed, chuchu u suck " + error);
        });
}
//Select Data Function
function SelectData() {
    const dbref = ref(db);
    get(child(dbref, "LTO-FORM/" + rollbox.value)).then((snapshot) => {
        if (snapshot.exists()) {
            namebox.value = snapshot.val().NameOfStd;
            secbox.value = snapshot.val().Section;
            genbox.value = snapshot.val().Gender;
        } else {
            alert("No data found");
        }
    })
        .catch((error) => {
            alert("boo you suck error" + error);
        })
        ;
}

//Update Data
function UpdateData() {
    update(ref(db, "LTO-FORM/" + rollbox.value), {
        NameOfStd: namebox.value,
        Section: secbox.value,
        Gender: genbox.value

    })
        .then(() => {
            alert("data updated successfully");
        })
        .catch((error) => {
            alert("failed, chuchu u suck " + error);
        });
}

//Delete Function
function DeleteData() {
    remove(ref(db, "LTO-FORM/" + rollbox.value))
        .then(() => {
            alert("data removed successfully");
        })
        .catch((error) => {
            alert("failed, chuchu u suck " + error);
        });
}
// Assign Events of Button
instBtn.addEventListener('click', InsertData);
selBtn.addEventListener('click', SelectData);
updBtn.addEventListener('click', UpdateData);
delBtn.addEventListener('click', DeleteData);