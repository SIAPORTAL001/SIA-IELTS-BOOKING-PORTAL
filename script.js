alert("JavaScript working");
let id = "SIA-" + Math.floor(Math.random()*10000);
alert(id);
import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.querySelector("form").addEventListener("submit", async function(e){
  e.preventDefault();

  let data = {
    name: document.querySelector("input[placeholder='Full Name']").value,
    email: document.querySelector("input[placeholder='Email']").value,
    test: document.querySelector("select").value,
    date: document.querySelector("input[type='date']").value,
    time: document.querySelector("input[type='time']").value,
    candidateID: "SIA-" + Math.floor(Math.random()*100000),
    examCode: "EX-" + Math.floor(Math.random()*100000)
  };

  await addDoc(collection(db, "bookings"), data);
  alert("Booking saved successfully");
});
