function displayBookInfo() {
    var requestUrl = "http://covers.openlibrary.org/b/$key/$value-$size.jpg"
  fetch(requestUrl).then(function (response) {
     if (!response.ok) {
         console.log("No information found");
     }
     return response.json();

 }).then(function (data) {
     console.log(data); 
    });
};