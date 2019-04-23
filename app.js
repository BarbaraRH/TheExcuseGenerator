let who = ['The dog', 'My granma', 'His turtle', 'My bird'];
let what = ['ate', 'pissed', 'crushed', 'broked'];
let what2 = ['my homework', 'my car', 'my computer', 'my sandwich'];
let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying'];

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

excuse.innerHTML = `${randomItem(who)} ${randomItem(what)} ${randomItem(what2)} ${randomItem(when)}.`;