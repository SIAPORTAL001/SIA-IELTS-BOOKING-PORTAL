import { db } from "./firebase.js";
import { collection, addDoc } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.showDate = () => {
  document.getElementById("dateDiv").style.display="block";
};

window.showTime = () => {
  document.getElementById("timeDiv").style.display="block";
};

window.book = async () => {
  await addDoc(collection(db,"bookings"),{
    test: test.value,
    date: date.value,
    time: time.value,
    candidateID: "SIA-" + Date.now(),
    examCode: "EX-" + Math.floor(10000+Math.random()*90000)
  });
  window.location="success.html";
};
