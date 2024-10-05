console.log('Привет, мир!')

function getValues() {
    const valueOne = parseFloat(document.getElementById('valueOne').value);
    const valueTwo = parseFloat(document.getElementById('valueTwo').value);
    return {valueOne, valueTwo};
}

function addition() {
    const {valueOne, valueTwo} = getValues();
    const result = valueOne + valueTwo;
    document.getElementById('result').innerText = result;
}

function substraction() {
    const {valueOne, valueTwo} = getValues();
    const result = valueOne - valueTwo;
    document.getElementById('result').innerText = result;
}

function multiplication() {
    const {valueOne, valueTwo} = getValues();
    const result = valueOne * valueTwo;
    document.getElementById('result').innerText = result;
}

function division() {
    const {valueOne, valueTwo} = getValues();
    const result = valueOne / valueTwo;
    document.getElementById('result').innerText = result;
}
