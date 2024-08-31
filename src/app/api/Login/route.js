import mysql from 'mysql2/promise';
import { dbConfig } from '../Constant';

export async function POST(request) {
    try {
        const data = await request.json();

      
        const { registrationNumber, password } = data;

        if (!registrationNumber || !password) {
            return new Response(
                JSON.stringify({ error: 'Missing registration number or password' }),
                { status: 400 }
            );
        }

    
        const connection = await mysql.createConnection(dbConfig);

       
        const [rows] = await connection.execute(
            `SELECT * FROM TblRegistration WHERE RegistrationNumber = ? AND Password = ?`,
            [registrationNumber, password]
        );

       
        await connection.end();

        if (rows.length > 0) {
          
            const user = rows[0];
          
            delete user.Password;

            return new Response(
                JSON.stringify({ message: 'Login successful', user }),
                { status: 200 }
            );
        } else {
           
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
