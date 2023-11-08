const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const mysql2 = require('mysql2');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.json('From backend');
});

const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'consumerdb',
  password: 'LEAHmae185!!!'
});
// simple query
connection.query(
  'SELECT * FROM `locations` ',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

app.get('/locations', (req, res) => {
  connection.query('SELECT * FROM `locations`', (err, results, fields) => {
    if (err) {
      console.error('Error executing the query:', err);
      return res.status(500).json({ error: 'An error occurred while fetching data from the database' });
    }
    res.json(results);
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


/*async function main () {

    const connection = await mysql2.createConnection({
      host:'localhost', 
      user: 'root', 
      password: 'LEAHmae185!!!' ,  
      database: 'consumerdb'
    });

    app.get('/locations', async (req,res) => {
      const [rows, field] = await connection.execute ('SELECT  FROM `locations`');
      res.send(rows)
    });
    
    app.post('/signup', async (req, res) => {
        const { username, password } = req.body;
      
        // Hash the password
        //const hashedPassword = await bcrypt.hash(password, 10);
      
        // Save user data to the database
        try {
          const [result] = await connection.query(
            'INSERT INTO user (username, password) VALUES (?, ?)',
            [username, hashedPassword]
          );
          res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Registration failed' });
        }
      });
      
};
*/

