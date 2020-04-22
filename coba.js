var request = new XMLHttpRequest();

request.open('GET', 'https://private-2ab4f0-profileayu.apiary-mock.com/data');

request.onreadystatechange = function () {
    if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
    }
};

var HttpClient = function () {
    this.get = function (url, callback) {
        var HttpRequest = new XMLHttpRequest();
        HttpRequest.onreadystatechange = function () {
            if (HttpRequest.readyState == 4 && HttpRequest.status == 200)
                callback(HttpRequest.responseText);
        }

        HttpRequest.open("GET", url, true);
        HttpRequest.send(null)
    }
}
var myurl = "https://private-c43b0-profilecard.apiary-mock.com/data";
var client = new HttpClient();
client.get(myurl, function (response) {
    var aResponse = JSON.parse(response);

    document.getElementById("name").innerHTML = aResponse.name;
    document.getElementById("status").innerHTML = aResponse.status;
    document.getElementById("twitter").href = aResponse.twitter;
    document.getElementById("github").href = aResponse.github;
    document.getElementById("linkedin").href = aResponse.linkedin;

});