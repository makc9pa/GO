function submitForm(e) {
    e.preventDefault();
    let checkedHall = document.querySelectorAll('.booking__item-cinema-hall');
    console.log(checkedHall);

    // e.preventDefault() 
    // var userid = document.getElementById("new_userId").value;
    // var new_title = document.getElementById("new_title").value;
    // var new_body = document.getElementById("new_body").value;

    // console.log("Input Data: " + userid + " " + new_title + " " + new_body);

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         title: new_title,
    //         body: new_body,
    //         userId: userid
    //     }),
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //     }
    //     })
    //     .then(response => response.json())
    //     .then(json => {
    //     console.log('response: ' + JSON.stringify(json));
    //     })
}

let checkboxHalls = document.querySelectorAll('.booking__item-cinema-hall');

checkboxHalls.forEach()


