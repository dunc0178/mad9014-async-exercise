
document.addEventListener('DOMContentLoaded', init);

async function init() {
    document.querySelector('body').addEventListener('click', clickEvent);
};

//let h = 0;

function clickEvent(ev) {
    const num = Math.random(0,1);
    console.log(num);

    if (Math.round(num) == 0){

        console.log(`Winner: Zero`);

        zero();
        
    }
    else {

        console.log(`Winner: One`);

        one();

    }

}

function zero(){
    //Change Background colour
    let hex = '';
    return new Promise(f1 => {
        setTimeout(() => {
            console.log(`Getting colour...`);
            f1();
        }, Math.floor(Math.random() * (2000 - 1000)) + 1000 + 1);
    })
    .then((color) => {
        let h = f1();
        console.log(h);
        document.querySelector('body').style.backgroundColor = h;
    });
}

function one(){
    //Add new paragraph
    return new Promise(f2 => {
        setTimeout(() => {
            console.log(`Getting string...`);
            f2();
        }, Math.floor(Math.random() * (2000 - 1000)) + 1000 + 1);
    })
    .then((str) => {
        // let h = f1();
        let p = `<p>${f2()}</p>`;
        // console.log(h);
        console.log(p);
        // document.querySelector('body').style.backgroundColor = h;
        document.querySelector('main').innerHTML += p;
    });
}

function f1() {
    let hex = Math.random().toString(16); //generate a random decimal and covert to hexadecimal as a string
    let extracted = hex.substring(2, 8); //skip the first characters "0." and return 6 characters
    let color = `#${extracted}`; //add the hashtag to make it a color for css.
    console.log(color);
    return color;
}

function f2() {
    // const p = 'This is a paragraph.';
    let str = 'This is a paragraph.' 
    return str;
}