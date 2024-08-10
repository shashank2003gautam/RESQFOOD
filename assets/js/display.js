// Corrected Firebase initialization script
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
  
  function SelectAllData() {
    firebase.database().ref("DonateFood").on('value', function (AllRecords) {
      AllRecords.forEach(
        function (CurrentRecord) {
          var name = CurrentRecord.val().Donarname;
          var Description = CurrentRecord.val().description;
          var foodItem = CurrentRecord.val().foodItem;
          var phoneNumber = CurrentRecord.val().phoneNumber;
          AddItemsToTable(name, Description, foodItem, phoneNumber);
        }
      );
    });
  }
  
  window.onload = SelectAllData;
  
  var std = 0;
  
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
  