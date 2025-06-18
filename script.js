function loadData(){
    // create a new request
    const xhr = new XMLHttpRequest ();
    // what to do when response arrives
    xhr.onload = function (){
        const container = document.getElementById("demo");
        container.innerHTML = this.responseText;
        //console.log(this.getAllResponseHeaders());
        console.log(this.getResponseHeaders("etag"));
    };

// prepare request - methods: GGET, POST, PUT, PATCH, DELETE, OPTIONS

xhr.open("GET", "./data/data.txt");
}