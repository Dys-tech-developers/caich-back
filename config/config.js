import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();  // Cargar las variables de entorno desde el archivo .env

const sequelize = new Sequelize(
  process.env.DB_NAME,     // Nombre de la base de datos
  process.env.DB_USER,     // Usuario de la base de datos
  process.env.DB_PASSWORD, // Contraseña del usuario de la base de datos
  {
    host: process.env.DB_HOST, // Host de la base de datos
    dialect: 'mysql',       // Dialecto de la base de datos
    port: process.env.DB_PORT,  // Puerto de la base de datos
    logging: console.log,
    dialectOptions: {
      ssl: {
        require: true, // Opcional, según el proveedor de la base de datos
        rejectUnauthorized: false // Configura según tu necesidad de seguridad
      }
    }
  }
);

export default sequelize;



// import mysql from "mysql2/promise"
// import dotenv from 'dotenv';

// dotenv.config();

// const connection = await mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE
//   });

//   export async function connectToDatabase() {
//     try {
//       connection.connect();
//       console.log('Conexión a MariaDB exitosa');
//       return connection;
//     } catch (err) {
//       console.error('Error al conectar a la base de datos:', err);
//       throw err;
//     }
//   }