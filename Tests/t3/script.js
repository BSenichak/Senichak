const requestURL = "https://jsonplaceholder.typicode.com/users";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
xhr.responseType = "json"
xhr.onload = () =>{
    console.log(xhr.response);
}

xhr.onerror = () => {

}

xhr.send();