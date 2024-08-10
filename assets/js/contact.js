// Your Firebase configuration (replace with your own config)
const firebaseConfig = {
    apiKey: "AIzaSyDJlGl7zGNF91fzssCyeSip0ihcILz2Hg8",
    authDomain: "resqfood-32712.firebaseapp.com",
    databaseURL: "https://resqfood-32712-default-rtdb.firebaseio.com",
    projectId: "resqfood-32712",
    storageBucket: "resqfood-32712.appspot.com",
    messagingSenderId: "5525829704",
    appId: "1:5525829704:web:742986df2074c1ead6007d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the Firestore database
  const db = firebase.database().ref("ContactUs");
  
  // Function to handle form submission
  function submitForm() {
    // Get form data
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mobileNumber = document.querySelector('input[name="mobileNumber"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
  
    saveReceivedFood(firstName, lastName, email, mobileNumber, message);
  
    // Display alert for form submission
    alert("Thank you for showing interest. Your message has been submitted!");
  
    // Reset the form
    resetReceiveForm();
  }
  
  function saveReceivedFood(firstName, lastName, email, mobileNumber, message) {
    // Create a new entry in the database
    const newReceivedFood = db.push();
  
    // Set data for the new entry
    newReceivedFood.set({
      FirstName: firstName,
      lastName: lastName,
      email: email,
      mob: mobileNumber,
      Description: message,
      Timestamp: firebase.database.ServerValue.TIMESTAMP
    });
  }
  
  function resetReceiveForm() {
    // Reset form fields
    document.querySelector('input[name="firstName"]').value = "";
    document.querySelector('input[name="lastName"]').value = "";
    document.querySelector('input[name="email"]').value = "";
    document.querySelector('input[name="mobileNumber"]').value = "";
    document.querySelector('textarea[name="message"]').value = "";
  }
  
  // Event listener for form submission
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    submitForm();
  });

  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    submitForm();
  });