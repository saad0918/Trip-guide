// Import mysql
import { createConnection } from 'mysql';

// Function to create and return the MySQL connection
function sqlconnect() {
    var connection = createConnection({
        host: "localhost",
        user: "root",
        password: "Santosh@2001",
        database: "travel"
    });
    
    connection.connect(function(err) {
        if (err) {
            console.error("Connection failed: ", err);
            throw err;
        }
        console.log("Connected!");
    });
    
    return connection;
}

// Function to insert form data into the database
function printForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("e-mail").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Connect to the database
    var db = sqlconnect();

    // Define the query with placeholders
    var query = "INSERT INTO contactInfo (username, email, phone, message) VALUES (?, ?, ?, ?)";
    
    // Execute the query with values
    db.query(query, [username, email, phone, message], function(err, result) {
        if (err) {
            console.error("Error inserting data: ", err);
            throw err;
        }
        console.log("Data inserted successfully!");
    });

    // Close the connection after query execution
    db.end();
}
