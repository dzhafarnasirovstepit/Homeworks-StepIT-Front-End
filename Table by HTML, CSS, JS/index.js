const table = document.createElement('table');

document.body.append(table);

function addtr() {
    return document.createElement('tr');
}


function addtd() {
    return document.createElement('td');
}


let n = 4;
let m = 3;

for (let a = 0; a < n; ++n) {
    const tr = addtr();
    table.appendChild(tr);

    for (let b = 0; b < m; ++m) {
        const td = addtd();
        tr.appendChild(td);
    }
}
