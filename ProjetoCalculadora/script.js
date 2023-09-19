const data = {
    numOp: null,
    numDisplay: '0',
    op: null,
    result: null
}

const dom = {
    display: document.querySelector('#display'),
    operation: document.querySelector('#display-preview-op'),
}

const ops = {
    sqrt: '√x',
    pwr: 'x²',
    plus: '+',
    minus: '–',
    x: '×',
    div: '÷',
}

const btnHandlers = {
    'char': (btn) => addCharToDisplay(btn),
    'operation': (op) => handleOperation(op),
    'clear': () => resetCalculator(),
    'equal': () => calculateResult(),
    'backspace': () => eraseLastChar(),
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        const btn = event.target.textContent;
        const btnGroup = event.target.getAttribute('data-group');

        btnHandlers[btnGroup](btn);

        console.log(data);
        printNumbers();
    });
});

const addCharToDisplay = (char) => {
    if(data.result) resetCalculator();
    
    if(char === '.'){
        const pointAlreadyExists = data.numDisplay.includes('.');
        if (pointAlreadyExists) return;
        data.numDisplay += '.';
        return;
    }

    if (data.numDisplay === '0') data.numDisplay = char;
    else data.numDisplay += char;
}

const handleOperation = (op) => {
    if(data.result) {
        const res = data.result;
        resetCalculator();
        data.numDisplay = '' + res;
    }

    data.op = op;

    if(op === ops.sqrt || op === ops.pwr) {
        data.numOp = null;
        return;
    }

    if (!data.numOp) {
        data.numOp = data.numDisplay;
        data.numDisplay = '0';
    }
}

const calculateResult = () => {
    if(data.result) return;

    if (!data.numDisplay) return;

    dom.operation.innerText = `${data.numOp} ${data.op} ${data.numDisplay} =`;

    let result;

    switch (data.op) {
        case ops.plus:
            result = +data.numOp + +data.numDisplay;
            break;
        case ops.minus:
            console.log(+data.numOp)
            console.log(+data.numDisplay)
            result = +data.numOp - data.numDisplay;
            break;
        case ops.x:
            result = +data.numOp * data.numDisplay;
            break;
        case ops.div:
            result = +data.numOp / data.numDisplay;
            break;
        case ops.pwr:
            result = Math.pow(+data.numDisplay, 2);
            break;
        case ops.sqrt:
            result = Math.sqrt(+data.numDisplay);
            break;

        default:
            result = 'Error'
            break;
    }
    data.result = parseFloat(result.toFixed(5));

    if(data.result > 20) {
        dom.display.classList.add('green');
        setTimeout(() => dom.display.classList.remove('green'), 1000);
    } else {
        dom.display.classList.add('orange');
        setTimeout(() => dom.display.classList.remove('orange'), 1000);
    }
}

const eraseLastChar = () => {
    if(data.result) {
        resetCalculator();
        return;
    }

    const lastIndex = data.numDisplay.length - 1;
    data.numDisplay = lastIndex === 0 ? '0' : data.numDisplay.slice(0, lastIndex);
}

const resetCalculator = () => {
    dom.display.value = 0;
    dom.operation.innerText = '';
    data.numOp = null;
    data.numDisplay = '0';
    data.op = null;
    data.result = null;
}

const printNumbers = () => {
    dom.operation.innerText = '';
    let operation = "";
    let display;

    if (data.op === ops.sqrt) {
        if (data.result) {
            operation = `√${data.numDisplay} = `;
            display = data.result;
        } else {
            display = `√${data.numDisplay}`
        }
    } else if (data.op === ops.pwr) {
        if (data.result) {
            operation = `${data.numDisplay}² = `;
            display = data.result;
        } else {
            display = `${data.numDisplay}²`
        }
    } else {
        if (data.result) {
            operation = `${data.numOp} ${data.op} ${data.numDisplay} = `
            display = data.result;
        } else {
            display = data.numDisplay;
            if (data.numOp !== null && data.op !== null) operation = `${data.numOp} ${data.op}`;
        }
    }
    dom.display.value = display;
    dom.operation.innerText = operation;
}
