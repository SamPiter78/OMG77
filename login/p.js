const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post('/register', (req, res) => {
    const { name, lastname, email, password } = req.body;

    // Aquí valida los datos

    const newUser = {
        name,
        lastname,
        email,
        password // ¡Importante! En un caso real, nunca almacenes contraseñas en texto plano.
    };

    fs.writeFileSync('users.json', JSON.stringify(newUser, null, 4));

    res.send('Usuario registrado con éxito.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
