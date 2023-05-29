const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // Middleware para analizar el cuerpo de la solicitud en formato JSON

// Datos en formato JSON
const users = [
  {
    "_id": "641e916438db439311ae9682",
    "name": "Juan",
    "lastname": "Pérez",
    "phone": 999999999,
    "email": "juanperez@example.com",
    "password": "contraseña123",
    "__v": 0
  },
  {
    "_id": "64712bb182c414ca55d280fa",
    "name": "Ana",
    "lastname": "Pérez",
    "phone": 89579999,
    "email": "anaperez@example.com",
    "password": "123contraseña123",
    "__v": 0
  },
  {
    "_id": "23423b34b34b34b34b34b34b",
    "name": "Carlos",
    "lastname": "Gómez",
    "phone": 777777777,
    "email": "carlosgomez@example.com",
    "password": "password123",
    "__v": 0
  },
  {
    "_id": "b45b45b45b45b45b45b45b45",
    "name": "María",
    "lastname": "López",
    "phone": 888888888,
    "email": "marialopez@example.com",
    "password": "qwerty123",
    "__v": 0
  },
  // Agrega los demás objetos aquí
  {
    "_id": "b45b45b45b45b45b45b45b46",
    "name": "Luis",
    "lastname": "Hernández",
    "phone": 777777777,
    "email": "luishernandez@example.com",
    "password": "abc123",
    "__v": 0
  },
  {
    "_id": "b45b45b45b45b45b45b45b47",
    "name": "Laura",
    "lastname": "Torres",
    "phone": 666666666,
    "email": "lauratorres@example.com",
    "password": "password456",
    "__v": 0
  },
  {
    "_id": "b45b45b45b45b45b45b45b48",
    "name": "Pedro",
    "lastname": "Martínez",
    "phone": 555555555,
    "email": "pedromartinez@example.com",
    "password": "qwerty456",
    "__v": 0
  },
  {
    "_id": "b45b45b45b45b45b45b45b49",
    "name": "Sofía",
    "lastname": "García",
    "phone": 444444444,
    "email": "sofiagarcia@example.com",
    "password": "abc456",
    "__v": 0
  },
  {
    "_id": "b45b45b45b45b45b45b45b50",
    "name": "Jorge",
    "lastname": "Díaz",
    "phone": 333333333,
    "email": "jorgediaz@example.com",
    "password": "password789",
    "__v": 0
  },
  {
    "_id": "b45b45b45b45b45b45b45b51",
    "name": "Mariana",
    "lastname": "Ramírez",
    "phone": 222222222,
    "email": "marianaramirez@example.com",
    "password": "qwerty789",
    "__v": 0
  },
  {
    "_id": "b45b45b45b45b45b45b45b52",
    "name": "Gabriel",
    "lastname": "Sánchez",
    "phone": 111111111,
    "email": "gabrielsanchez@example.com",
    "password": "abc789",
    "__v": 0
  }
];

// Agrega los objetos restantes aquí

console.log(users);


// Ruta para iniciar sesión
app.post('/api/users/login', (req, res) => {
  // Obtén los datos del formulario de inicio de sesión
  const { email, password } = req.body;

  // Realiza la lógica de autenticación
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Usuario autenticado
    res.json({ message: 'Inicio de sesión exitoso', user });
  } else {
    // Credenciales inválidas
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
});

// Ruta para obtener todos los usuarios
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ficticio iniciado en el puerto 3000');
});
