// function submitForm() {
//     const donorName = document.getElementById('donorName').value;
//     const foodItem = document.getElementById('foodItem').value;
//     const phoneNumber = document.getElementById('phoneNumber').value;
//     const description = document.getElementById('description').value;

//     // You can perform further actions with the collected data, such as sending it to a server or displaying it on the page
//     console.log("Donor Name: " + donorName);
//     console.log("Food Item: " + foodItem);
//     console.log("Phone Number: " + phoneNumber);
//     console.log("Description: " + description);

//     // Display thank you message
//     document.getElementById('thankYouMessage').classList.remove('hidden');

//     // Optionally, you can reset the form after submission
//     resetForm();
// }

// function resetForm() {
//     document.getElementById('donationForm').reset();
// }


// function showThankYouAlert() {
//     // You can customize the alert message or perform additional actions here
//     alert("Thank you for your donation!");
    
//     // Optional: Show the thank you message
//     document.getElementById("thankYouMessage").classList.remove("hidden");
// }


const firebaseConfig = {
    apiKey: "AIzaSyDJlGl7zGNF91fzssCyeSip0ihcILz2Hg8",
    authDomain: "resqfood-32712.firebaseapp.com",
    databaseURL: "https://resqfood-32712-default-rtdb.firebaseio.com",
    projectId: "resqfood-32712",
    storageBucket: "resqfood-32712.appspot.com",
    messagingSenderId: "5525829704",
    appId: "1:5525829704:web:742986df2074c1ead6007d"
  };

  firebase.initializeApp(firebaseConfig);

var ResQFoodDB=firebase.database().ref("DonateFood");

document.getElementById('donationForm').addEventListener("submit",submitForm)



    function submitForm(e) {
        e.preventDefault();
      
        var donorName = getElementVal("donorName");
        var foodItem = getElementVal("name");
        var phoneNumber = getElementVal("phoneNumber");
        var description = getElementVal("description");
        console.log(donorName, foodItem, phoneNumber,description)
        saveMessages(donorName, foodItem, phoneNumber,description);
      
        document.querySelector(".alert").style.display = "block";
        alert("Thanks for your donation!");
        //   remove the alert
        setTimeout(() => {
          document.querySelector(".alert").style.display = "none";
        }, 3000);

        
        //   reset the form
        document.getElementById("donationForm").reset();
      }
      const saveMessages = (donorName, foodItem, phoneNumber,description) => {
        var newContactForm = ResQFoodDB.push();
      
        newContactForm.set({
          Donarname: donorName,
          foodItem: foodItem,
          phoneNumber: phoneNumber,
          description: description,
        });
      };

      
    const getElementVal = (id) => {
        return document.getElementById(id).value;
      };