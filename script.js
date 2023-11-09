function convertToFarhenheit() {
    const celsiusInput = document.getElementById("celsius");
    const resultElement = document.getElementById("result");

    if (celsiusInput.value === "") {
        alert("Please enter a temperature in Celsius.");
        return;
    }

    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    resultElement.textContent = fahrenheit.toFixed(2);
}
