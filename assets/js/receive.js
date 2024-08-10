
// Initialize Firebase with your configuration
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
  
  // Reference to the Firebase database
  const receiveFoodDB = firebase.database().ref("ReceiveFood");
  
  function submitReceiveForm() {
    // Get form values
    const receiverName = getElementVal("receiverName");
    const description = getElementVal("description");
    const mobile = getElementVal("mobnumber");

    // Save form data to Firebase
    saveReceivedFood(receiverName, description,mobile);
  
    // Display alert for form submission
    alert("Form submitted successfully!");
  
    // Reset the form
    resetReceiveForm();
  }
  
  function saveReceivedFood(receiverName, description,mobile) {
    // Create a new entry in the database
    const newReceivedFood = receiveFoodDB.push();
  
    // Set data for the new entry
    newReceivedFood.set({
      ReceiverName: receiverName,
      Description: description,
      Mobnumber: mobile,
      Timestamp: firebase.database.ServerValue.TIMESTAMP
    });
  }
  
  function getElementVal(id) {
    return document.getElementById(id).value;
  }
  
  function resetReceiveForm() {
    // Reset form fields
    document.getElementById("receiverName").value = "";
    document.getElementById("description").value = "";
  }
  
  function SelectAllData() {
    firebase.database().ref("DonateFood").on('value', function (AllRecords) {
      // Clear existing table rows
      document.getElementById("tbody1").innerHTML = "";
  
      AllRecords.forEach(function (CurrentRecord) {
        var name = CurrentRecord.val().Donarname;
        var Description = CurrentRecord.val().description;
        var foodItem = CurrentRecord.val().foodItem;
        var phoneNumber = CurrentRecord.val().phoneNumber;
        AddItemsToTable(name, Description, foodItem, phoneNumber);
      });
    });
  }
  
  function AddItemsToTable(name, Description, foodItem, phoneNumber) {
    var tbody = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
  
    td1.innerHTML = ++std;
    td2.innerHTML = name;
    td3.innerHTML = Description;
    td4.innerHTML = foodItem;
    td5.innerHTML = phoneNumber;
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
  
    tbody.appendChild(trow);
  }
  
  var std = 0; // Initializing std
  
  // Load data on window load
  window.onload = function () {
    SelectAllData();
  };
  