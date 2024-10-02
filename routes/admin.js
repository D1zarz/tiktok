const express = require('express');
const router = express.Router();

// Маршрут для страницы admin
router.get('/admin', (req, res) => {
    const verificationWord = ''; // Здесь можно установить начальное значение
    res.render('admin', { verificationWord });  // Передаем переменную verificationWord в шаблон
});

router.post('/admin', (req, res) => {
    const newVerificationWord = req.body.newVerificationWord; // Получаем новое значение из формы
    // Логика для сохранения нового verificationWord (например, в базе данных или конфигурации)
    
    res.render('admin', { verificationWord: newVerificationWord }); // Передаем обновленное значение обратно в шаблон
});

module.exports = router;
