import mysql from 'mysql2/promise';
import { dbConfig } from '../Constant';

export async function POST(request) {
    try {
        const data = await request.json();

        // Validate the incoming data
        const { registrationNumber, password } = data;

        if (!registrationNumber || !password) {
            return new Response(
                JSON.stringify({ error: 'Missing registration number or password' }),
                { status: 400 }
            );
        }

        // Create a connection to the database
        const connection = await mysql.createConnection(dbConfig);

        // Query the database to find the user with the provided registrationNumber and password
        const [rows] = await connection.execute(
            `SELECT * FROM TblRegistration WHERE RegistrationNumber = ? AND Password = ?`,
            [registrationNumber, password]
        );

        // Close the connection
        await connection.end();

        if (rows.length > 0) {
            // Authentication successful
            const user = rows[0];
            // You might want to exclude the password from the response
            delete user.Password;

            return new Response(
                JSON.stringify({ message: 'Login successful', user }),
                { status: 200 }
            );
        } else {
            // Authentication failed
            return new Response(
                JSON.stringify({ error: 'Invalid registration number or password' }),
                { status: 401 }
            );
        }
    } catch (error) {
        console.error('Error:', error);
        return new Response(
            JSON.stringify({ error: 'An error occurred' }),
            { status: 500 }
        );
    }
}
