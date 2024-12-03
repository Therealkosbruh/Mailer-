import nodemailer from 'nodemailer';

// Конфигурация transporter для отправки письма через Mail.ru
const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',            // SMTP сервер для Mail.ru
  port: 587,                      // Порт для TLS
  secure: false,                  // Используем TLS, а не SSL
  auth: {
    user: 'two.beach@mail.ru',    
    pass: 'QZUh82tpgcdrMTX6QFFD', 
  },
  tls: {
    rejectUnauthorized: false,    
  }
});

// Функция отправки письма
export const sendFeedbackEmail = (f_name, f_phone) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: 'two.beach@mail.ru',     
      to: 'kmi163163@gmail.com',   
      subject: 'Новая заявка с сайта', 
      text: `Имя: ${f_name}\nТелефон: ${f_phone}`, 
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(new Error('Ошибка при отправке письма: ' + error));
      } else {
        resolve('Форма успешно отправлена: ' + info.response);
      }
    });
  });
};

