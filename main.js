var request = new XMLHttpRequest();

request.open('GET', 'https://private-2ab4f0-profileayu.apiary-mock.com/api/profile');

request.onreadystatechange = function () {
    if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
    }

};

request.send();