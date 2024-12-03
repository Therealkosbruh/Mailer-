// server.mjs
// import express from 'express';
// import bodyParser from 'body-parser';
// import { sendFeedbackEmail } from './function.mjs';
// import cors from 'cors';

// const app = express();

// app.use(cors());

// // Используем body-parser для обработки данных формы
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Маршрут для обработки POST-запроса
// app.post('/send-email', async (req, res) => {
//   const { f_name, f_phone } = req.body;

//   try {
//     const result = await sendFeedbackEmail(f_name, f_phone);
//     res.status(200).json({ status: 'success', message: result });
//   } catch (error) {
//     res.status(500).json({ status: 'error', message: error.message });
//   }
// });

// app.post('/send-email', async (req, res) => {
//     console.log('Received POST request on /send-email');
//     console.log('Request body:', req.body);
  
//     const { f_name, f_phone } = req.body;
  
//     try {
//       const result = await sendFeedbackEmail(f_name, f_phone);
//       res.status(200).json({ status: 'success', message: result });
//     } catch (error) {
//       console.error('Error:', error.message);
//       res.status(500).json({ status: 'error', message: error.message });
//     }
//   });
  

// // Запускаем сервер на порту 3000
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

// server.mjs
// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';

// const app = express();

// app.use(cors());

// // Используем body-parser для обработки данных формы
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Маршрут для обработки POST-запроса
// app.post('/send-email', async (req, res) => {
//   console.log('Received POST request on /send-email');
//   console.log('Request body:', req.body);

//   // Здесь просто возвращаем сообщение, чтобы проверить, что сервер работает
//   res.status(200).json({ status: 'success', message: 'Email отправлен' });
// });

// // Запускаем сервер на порту 3000
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });



// server.mjs
import express from 'express';
import bodyParser from 'body-parser';
import { sendFeedbackEmail } from './function.mjs'; // Подключаем функцию для отправки email
import cors from 'cors';

const app = express();

app.use(cors());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { f_name, f_phone } = req.body;

  try {
    const result = await sendFeedbackEmail(f_name, f_phone);
    res.status(200).json({ status: 'success', message: result });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

