function displayBookInfo() {
    var requestUrl = ""
  fetch(requestUrl).then(function (response) {
     if (!response.ok) {
         console.log("No information found");
     }
     return response.json();

 }).then(function (data) {
     console.log(data); 
    });
};