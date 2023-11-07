const express   = require('express');   
const app       = express();
const port      = 3000;

const mysql2 = require ('mysql2/promise');

async function main () {

    const connection = await mysql2.createConnection({host:'localhost', user: 'root', password: 'LEAHmae185!!!' ,  database: 'consumerdb'});

  
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
    
    app.post('/signup', async (req, res) => {
        const { username, password } = req.body;
      
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
      
        // Save user data to the database
        try {
          const [result] = await db.query(
            'INSERT INTO users (username, password) VALUES (?, ?)',
            [username, hashedPassword]
          );
          res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Registration failed' });
        }
      });
      
};


