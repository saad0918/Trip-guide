import { createConnection } from 'mysql';

function sqlconnect(){
    var cursor = createConnection({
        host: "localhost",
        user: "root",
        password: "Santosh@2001",
        database: "travel"
    });
      
    cursor.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        return cursor;
    });

}