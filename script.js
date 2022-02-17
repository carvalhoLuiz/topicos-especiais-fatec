let weightInput;
let heightInput;

window.onload = () => {
    weightInput = document.getElementById('weight');
    heightInput = document.getElementById('height');
    const button = document.getElementById('botao');
    button.addEventListener('click', calculateMMC);
}

const calculateMMC = () => {
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);
    const resultado = weight / (height ** 2);

    window.alert(`valor do seu IMC = ${resultado.toFixed(2)}`);
}