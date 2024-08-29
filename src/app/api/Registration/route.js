import mysql from 'mysql2/promise';

// Database connection configuration
const dbConfig = {
    host: 'p3plzcpnl504899.prod.phx3.secureserver.net',
    user: 'hariharan',
    password: 'myself@12345', // Leave empty if no password is set
    database: 'vpower',
    port: 3306, // Default MySQL port
};


export async function GET(req,res) {
    try {
     
        // Validate the incoming data
       

        // Create a connection to the database
        const connection = await mysql.createConnection(dbConfig);

        // Insert data into the database
        const [result] = await connection.execute(
            `SELECT * FROM TblRegistration` );

        // Close the connection
        await connection.end();

        return new Response(
            JSON.stringify({ message: 'Registration Info', result }),
            { status: 200 }
        );
    } catch (error) {
        console.log('Error:', error);
        return new Response(
            JSON.stringify({ error: 'An error occurred' }),
            { status: 500 }
        );
    }
}



export async function POST(request) {
    try {
        const data = await request.json();
     
        // Validate the incoming data
        const {
            registrationNumber,
            firstName,
            middleName,
            lastName,
            emailId,
            phoneNumber,
            aadharNumber,
            panNumber,
            address1,
            address2,
            state,
            country,
            pinCode,
        } = data;

        if (!registrationNumber || !firstName || !lastName || !emailId || !phoneNumber) {
            return new Response(
                JSON.stringify({ error: 'Missing required fields' }),
                { status: 400 }
            );
        }

        // Create a connection to the database
        const connection = await mysql.createConnection(dbConfig);

        // Insert data into the database
        const [result] = await connection.execute(
            `INSERT INTO TblRegistration  (
                registrationNumber, FirstName, MiddleName, LastName, EmailId,
                PhoneNumber, AadharNumber, PanNumber, Address1, Address2, State,
                Country, PinCode, CreatedDate
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
            [
                12, firstName, middleName, lastName, emailId,
                phoneNumber, aadharNumber, panNumber, address1, address2, state,
                country, pinCode
            ]
        );

        // Close the connection
        await connection.end();

        return new Response(
            JSON.stringify({ message: 'Registration successful', result }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error:', error);
        return new Response(
            JSON.stringify({ error: 'An error occurred' }),
            { status: 500 }
        );
    }
}
