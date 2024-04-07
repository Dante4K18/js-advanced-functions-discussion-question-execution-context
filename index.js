// Example I
var telephone = {
    origin: "home phone",
    answer: function () {
        console.log(`Hi, ${this.origin} called the function`);
    }
};

telephone.answer();


// Example II
var telephone = {
    answer: function () {
        console.log(`Hello, ${this.origin} called the function`);
    }
};

var cellphone = {
    origin: "cell phone"
};

cellphone.answer = telephone.answer;
cellphone.answer();

// Example III
var telephone = {
    origin: "home phone",
    answer: () => {
        console.log(`Hello, ${this.origin} called the function`);
    }
};

telephone.answer();