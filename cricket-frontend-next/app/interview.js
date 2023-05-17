// function listener1() {
//     setTimeout(() => console.log("#1 Hello from timeout 1"), 0);
//     Promise.resolve().then(() => console.log("#1 Hello from promise 1"));
//     console.log("#1 Hello from main thread");
//     setTimeout(() => console.log("#1 Hello from timeout 2"), 0);
//   }


// function sum(a) {
//     let sum = a ; 
//     return function (b) {
//         if(b) 
//             return a+b;
//         else
//             return a;
//     }
// }






// const answer = sum(3)(4)();
// console.log(answer);


//Amber (Host) says:sum(2)()(3)(2)(2)(1)(2)(4)()()(3)()
console.log("start");
const checkPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        const result = true;
        if(result) 
            resolve("Result is True");
        else
            reject(new Error("Result is False"));
    },2000);
});

function importantAction1(username) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Inside important Action`);
        },2000);
    })
}

function importantAction2(username) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Inside important Action`);
        },2000);
    })
}
function imortantAction3(username) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Inside important Action`);
        },2000);
    })
}


// checkPromise
//     .then((res) => {
//         console.log("res");
//     })
//     .catch((err) => {
//         console.log(err);
//     

importantAction1("Action1").then((res) => {
    console.log(res);
    return importantAction2("Action2");
}).then((res) => {
    console.log(res);
    return importantAction3("Action3");
}).catch((err) => {
    console.log(err);
});

console.log("stop");
