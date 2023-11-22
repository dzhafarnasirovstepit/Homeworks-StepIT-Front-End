const table = document.createElement('table');

document.body.append(table);

function addtr() {
    return document.createElement('tr');
}


function addtd() {
    return document.createElement('td');
}

for (let n = 0; n < 3; ++n) {
    const tr = addtr();
    table.appendChild(tr);

    for (let m = 0; m < 4; ++m) {
        const td = addtd();
        tr.appendChild(td);
    }
}
