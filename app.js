const button = document.querySelector('button');
const url = 'https://api.adviceslip.com/advice'

const getQuote = async()=>{
    const result = await fetch(url);
    const data = await result.json();

    let id = document.querySelector('.id');
    let msg = document.querySelector('.advice');
    id.innerHTML = "advice #" + data.slip.id;
    msg.innerHTML = `&#8220${data.slip.advice}&#8221`;    
}
getQuote();

button.addEventListener('click', getQuote)