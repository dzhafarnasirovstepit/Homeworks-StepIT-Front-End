alert("You need to register");

const regName = (prompt('Email: '));
const regPass = (prompt('Password: '));

while (true) {
    alert("You need to authorizate");

    const authName = (prompt('Email: '));
    const authPass = (prompt('Password: '));

    if (authName !== regName && authPass !== regPass) {
        alert('Failed');
        continue;
    }

    break;
}

alert('Ok');
