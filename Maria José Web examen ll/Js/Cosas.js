const datosEmisiones = JSON.parse(localStorage.getItem('datosEmisiones'));


function generarMatrizResultados(datos) {
    const matriz = []; 

    datos.forEach(pais => {
        const fila = []; 
        
        fila.push(parseFloat(pais.año2003));
        fila.push(parseFloat(pais.año2004));
        
        const diferenciaPorcentual = ((fila[1] - fila[0]) / fila[0]) * 100;
        fila.push(diferenciaPorcentual);
        
        for (let i = 2020; i <= 2023; i++) {
            const valorProyeccion = fila[1] * (1 + (diferenciaPorcentual / 100));
            fila.push(valorProyeccion.toFixed(2));
        }

        matriz.push(fila);
    });

    return matriz;
}

function visualizarMatriz(matriz) {
    matriz.forEach((fila, index) => {
        console.log(`País ${index + 1}:`);
        console.log(`- Año de Referencia 1: ${fila[0]}`);
        console.log(`- Año de Referencia 2: ${fila[1]}`);
        console.log(`- Diferencia Porcentual: ${fila[2].toFixed(2)}%`);

        for (let i = 3; i < fila.length; i++) {
            console.log(`- Proyección ${i - 2}: ${fila[i]}`);
        }
        console.log('\n'); 
    });
}

visualizarMatriz(matrizResultados);


const matrizResultados = generarMatrizResultados(datosEmisiones);

<script>
        // Código JavaScript para insertar las filas de la matriz en la tabla
        const matrizResultados = document.getElementById('matriz-resultados');

        // Suponiendo que tienes una matriz de resultados llamada 'matrizResultados'
        // Recorre la matriz y crea una fila <tr> para cada país
        matrizResultados.innerHTML = '';
        matrizResultadosArray.forEach(fila => {
            const nuevaFila = document.createElement('tr');
            nuevaFila.innerHTML = `
                <td>${fila[0]}</td>
                <td>${fila[1]}</td>
                <td>${fila[2]}</td>
                <td>${fila[3]}</td>
                <td>${fila[4]}</td>
                <td>${fila[5]}</td>
                <td>${fila[6]}</td>
                <td>${fila[7]}</td>
            `;
            matrizResultados.appendChild(nuevaFila);
        });
    </script>
