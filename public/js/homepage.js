function displayBookInfo() {
    var requestUrl = "http://http://covers.openlibrary.org/b/olid/OL7440033M-S.jpg"
  fetch(requestUrl).then(function (response) {
     if (!response.ok) {
         console.log("No information found");
     }
     return response.json();

 }).then(function (data) {
     console.log(data); 
    });
};