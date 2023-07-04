function sendTodo(){
    let title=document.getElementById("title").value;
    let description=document.getElementById("description").value;
    let request = {title,description};
    fetch('http://localhost:3002/todos', {
        method: 'post',
        headers: {
        "Content-type": "application/json"
        },
        body: JSON.stringify(request)
        })
        .then(res=>res.json())
        .then(function (data) {
        console.log('Request succeeded with JSON response', data);
        })
        .catch(function (error) {
        console.log('Request failed', error);
    });
}