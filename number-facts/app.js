// Number Facts (app.js) -> Trivia 

// #1 
function favNumber(num) {
    axios.get(`http://numbersapi.com/${num}/trivia?json`)
    .then(response => {
        console.log(response.data.text)
    })
    .catch(err => console.log(err)) 
}
favNumber(17)

// #2
let favNumbers = [];
for(let i = 0; i < 4; i++) {
    favNumbers.push(
        axios.get(`http://numbersapi.com/${i}/trivia?json`)
    )
}
Promise.all(favNumbers)
.then(response => {
    for(res of response) {
        console.log(res.data.text)
    }
})
.catch(err => console.log(err))

// #3
const facts = document.getElementById('container')
function get4Facts() {
    const response1 = axios.get('http://numbersapi.com/17/trivia?json')
    const response2 = axios.get('http://numbersapi.com/27/trivia?json')
    const response3 = axios.get('http://numbersapi.com/30/trivia?json')
    const response4 = axios.get('http://numbersapi.com/39/trivia?json')

    Promise.all([response1, response2, response3, response4])
        .then(resps => {
            resps.forEach(resp => {
                facts.insertAdjacentHTML("beforeend", `<p>${resp.data['text']}</p>`);
            });
        });
}
get4Facts();