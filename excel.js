function cargarArchivo() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, {type: 'array'});
        var sheet_name_list = workbook.SheetNames;
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

        mostrarDatos(xlData);
    };

    reader.readAsArrayBuffer(file);
}

function mostrarDatos(data) {
    var tabla = document.getElementById('tablaDatos');
    tabla.innerHTML = '';

    // Crear encabezados de tabla
    var thead = tabla.createTHead();
    var row = thead.insertRow();
    for (var key in data[0]) {
        var th = document.createElement('th');
        th.innerHTML = key;
        row.appendChild(th);
    }
    var thEliminar = document.createElement('th');
    thEliminar.innerHTML = 'Acciones';
    row.appendChild(thEliminar);

    // Crear filas de datos
    var tbody = document.createElement('tbody');
    data.forEach(function(obj) {
        row = tbody.insertRow();
        for (var key in obj) {
            var cell = row.insertCell();
            cell.innerHTML = obj[key];
        }
        var cellEliminar = row.insertCell();
        var btnEliminar = document.createElement('button');
        btnEliminar.innerHTML = 'Eliminar';
        btnEliminar.classList.add('btn', 'btn-danger', 'btn-sm');
        btnEliminar.addEventListener('click', function() {
            eliminarFila(this);
        });        
        cellEliminar.appendChild(btnEliminar);
    });
    tabla.appendChild(tbody);
}

function eliminarFila(btn) {
    var row = btn.closest('tr');
    row.parentNode.removeChild(row);
}


