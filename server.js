//dependancy
const express = require('express');
//add port designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();
//add middleware
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
  });
  

// //test connection
// app.get('/', (req, res) => {
//     res.json({
//       message: 'Hello World'
//     });
//   });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });