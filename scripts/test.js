class Basic {
    constructor (name, value) {
        this.name = name;
        this.value = value;
    };
};

let testObj = new Basic('My Name', 77);

function test (that, theOther) {
    console.log('Check ' + that + ' out!');
    if (that == testObj.name) {
        console.log('This function works correctly.')
    } else {
        console.log('This function is broken.')
    };

    var i;
    for (i=0; i < theOther.length; i++) {
        console.log(theOther[i]);
    };
};

//test(1, Array(testObj.name,'that',testObj.value));

let test2 = 'test' + `another test`;

console.log(test2);