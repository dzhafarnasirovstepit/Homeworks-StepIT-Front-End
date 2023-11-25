outerLoop: while (true) {

    alert("You need to register");

    const regName = (prompt('Email: '));
    const regPass = (prompt('Password: '));

    let maxAttempts = 3;

    alert("You need to authorizate");

    for (let attempts = 1; attempts <= maxAttempts; ++attempts) {

        let authName = (prompt('Email: '));
        let authPass = (prompt('Password: '));

        if (authName === regName && authPass === regPass) {
            alert('Ok');
            break outerLoop;
        }

        alert(`Failed! Attempt ${attempts}/${maxAttempts}.`);

        if (attempts === maxAttempts) {
            alert('All attempts failed. Starting over...');

            const offer = confirm('Do you want to create a new user?');

            if (offer) {
                continue outerLoop;
            } else {
                attempts = 0;
                alert("You need to authorizate");
            }
        }

    }

}
