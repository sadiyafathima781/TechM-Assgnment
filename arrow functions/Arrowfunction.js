// longhand
function sayHello(name) {
    console.log("Hello", name);
}
sayHello('sadiya')
setTimeout(function () {
    console.log("Loading!!!")
}, 2000);

var list = ['social', 'science', 'maths', 'English'];
list.forEach(function (item) {
    console.log(item)
})



// Arrow functions
sayHello = (name) => console.log("hello", name);
sayHello('sadiya');

setTimeout(() => console.log('loading!!!'), 2000);

var list = ['social', 'science', 'maths', 'English'];
list.forEach((item) => console.log(item));

