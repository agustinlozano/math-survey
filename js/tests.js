function probarValidarNombre() {
    console.assert(
        validarNombre('Nathaly025') === false,
        'La funcion validar nombre no funciono cuando se ingreso un nombre incorrecto',
    );

    console.assert(
        validarNombre('Agustín') === '',
        'La funcion validar nombre no funciono con un nombre valido',
    );
}

function probarValidarEmail() {
    console.assert(
        validarEmail('agustinlozano@@domain.com') === false,
        'La funcion validar email no funciono cuando se ingreso un correo electronico incorrecto',
    );

    console.assert(
        validarEmail('agustinlozano@domain.com') === '',
        'La funcion validar email no funciono con un correo electronico valido',
    );
}

function probarValidarEdad() {
    console.assert(
        validarEdad(127) === false,
        'La funcion validar edad no funciono con cuando se ingreso una edad incorrecta',
    );

    console.assert(
        validarEdad(8) === '',
        'La funcion validar edad no funciono con una edad valida',
    );
}

probarValidarNombre();
probarValidarEmail();
probarValidarEdad();