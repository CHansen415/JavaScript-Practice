class calc{
    constructor(){
        this.result = 0;
    }

    addition(first, second){
        this.result = first + second;
        return this.result;
    }

    subtraction(first, second){
        this.result = first - second;
        return this.result;
    }

    multiplication(first,second){
        this.result = first * second;
        return this.result;
    }

    division(first, second){
        this.result = first / second;
        return this.result;
    }
}
const calculator = new calc();

const addButton = document.querySelector('.js-add');
addButton.addEventListener('click', ()=>{
    const firstInput = document.querySelector('.js-input-one');
    const firstIn = Number(firstInput.value);
    
    const secondInput = document.querySelector('.js-input-two');
    const secIn = Number(secondInput.value);

    calculator.result = calculator.addition(firstIn, secIn);
    document.querySelector('.js-result').innerHTML = `Result is: ${calculator.result}`;
});

const subButton = document.querySelector('.js-sub');
subButton.addEventListener('click', ()=>{
    const firstInput = document.querySelector('.js-input-one');
    const firstIn = Number(firstInput.value);
    
    const secondInput = document.querySelector('.js-input-two');
    const secIn = Number(secondInput.value);

    calculator.result = calculator.subtraction(firstIn, secIn);
    document.querySelector('.js-result').innerHTML = `Result is: ${calculator.result}`;
});


const multButton = document.querySelector('.js-multiply');
multButton.addEventListener('click', ()=>{
    const firstInput = document.querySelector('.js-input-one');
    const firstIn = Number(firstInput.value);
    
    const secondInput = document.querySelector('.js-input-two');
    const secIn = Number(secondInput.value);

    calculator.result = calculator.multiplication(firstIn, secIn);
    document.querySelector('.js-result').innerHTML = `Result is: ${calculator.result}`;
});

const divButton = document.querySelector('.js-divide');
divButton.addEventListener('click', ()=>{
    const firstInput = document.querySelector('.js-input-one');
    const firstIn = Number(firstInput.value);
    
    const secondInput = document.querySelector('.js-input-two');
    const secIn = Number(secondInput.value);

    calculator.result = calculator.division(firstIn, secIn);
    document.querySelector('.js-result').innerHTML = `Result is: ${calculator.result}`;
});