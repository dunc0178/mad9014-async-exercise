
document.addEventListener('DOMContentLoaded', init);

async function init() {
    document.querySelector('body').addEventListener('click', clickEvent);
};

let hex = 0;

function clickEvent(ev) {
    const num = Math.random(0,1);
    console.log(num);

    // return new Promise(function (zero, one).setTimeout(Math.random(1000,2000)) {
    //     if (Math.round(num) == 0){
    //         console.log(`Winner: Zero`);
    //         zero();
    //     }
    //     else {
    //         console.log(`Winner: One`);
    //         one();
    //     }
    // });

    if (Math.round(num) == 0){
        // console.log(`Winner: Zero`);
        // zero();
        return new Promise(async (resolve) => {
            setTimeout((resolve) => {
                f1();
                console.log(`Hex: ${hex}`);
                return resolve = hex;
            }, Math.random(1000,2000));
        })
        .then(resolve => {
            console.log('Change background colour here'); 
        });
    }
    else {
        // console.log(`Winner: One`);
        // one();
        return new Promise(async (resolve) => {
            setTimeout((resolve) => {
                f2();
            }, Math.random(1000,2000));
        });
    }
    

    // Promise.any(function (resolve))
    //     setTimeout(resolve, Math.floor(Math.random(1000,2000)));
}

function f1() {
    console.log(`Winner: Zero`);
    document.querySelector('body').style.backgroundColor ;
    hex = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    console.log(hex);
}

function f2() {
    console.log(`Winner: One`);
    const p = 'This is a paragraph.';
}