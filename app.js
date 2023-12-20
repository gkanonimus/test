const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

// Подключение к базе данных
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'vuedb',
    password: '1',
    port: 5432
});

const app = express();

app.use(express.json());
app.use(cors());

// Функция для обработки ошибок
const handleError = (err, res) => {
    console.error(err.message);
    res.status(500).send('Server Error');
};

// CRUD операции для 'Manufacturers'
app.get('/manufacturers', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Manufacturers');
        res.json(result.rows);
    } catch (err) {
        handleError(err, res);
    }
});

app.post('/manufacturers', async (req, res) => {
    try {
        const { ManufacturerName, Country } = req.body;
        const result = await pool.query('INSERT INTO Manufacturers (ManufacturerName, Country) VALUES ($1, $2) RETURNING *', [ManufacturerName, Country]);
        res.json(result.rows[0]);
    } catch (err) {
        handleError(err, res);
    }
});

app.put('/manufacturers/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { ManufacturerName, Country } = req.body;
        const result = await pool.query('UPDATE Manufacturers SET ManufacturerName = $1, Country = $2 WHERE ManufacturerID = $3 RETURNING *', [ManufacturerName, Country, id]);
        res.json(result.rows[0]);
    } catch (err) {
        handleError(err, res);
    }
});

app.delete('/manufacturers/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM Manufacturers WHERE ManufacturerID = $1', [id]);
        res.json({ message: 'Manufacturer deleted successfully' });
    } catch (err) {
        handleError(err, res);
    }
});

// Получить все категории
app.get('/categories', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Categories');
        res.json(result.rows);
    } catch (err) {
        handleError(err, res);
    }
});

// Добавить категорию
app.post('/categories', async (req, res) => {
    try {
        const { CategoryName } = req.body;
        const result = await pool.query('INSERT INTO Categories (CategoryName) VALUES ($1) RETURNING *', [CategoryName]);
        res.json(result.rows[0]);
    } catch (err) {
        handleError(err, res);
    }
});

// Обновить категорию
app.put('/categories/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { CategoryName } = req.body;
        const result = await pool.query('UPDATE Categories SET CategoryName = $1 WHERE CategoryID = $2 RETURNING *', [CategoryName, id]);
        res.json(result.rows[0]);
    } catch (err) {
        handleError(err, res);
    }
});

// Удалить категорию
app.delete('/categories/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM Categories WHERE CategoryID = $1', [id]);
        res.json({ message: 'Category deleted successfully' });
    } catch (err) {
        handleError(err, res);
    }
});

// Получить все продукты
app.get('/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Products');
        res.json(result.rows);
    } catch (err) {
        handleError(err, res);
    }
});

// Добавить продукт
app.post('/products', async (req, res) => {
    try {
        const { ProductName, CategoryID, ManufacturerID, Price, Quantity } = req.body;
        const result = await pool.query('INSERT INTO Products (ProductName, CategoryID, ManufacturerID, Price, Quantity) VALUES ($1, $2, $3, $4, $5) RETURNING *', [ProductName, CategoryID, ManufacturerID, Price, Quantity]);
        res.json(result.rows[0]);
    } catch (err) {
        handleError(err, res);
    }
});

// Обновить продукт
app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { ProductName, CategoryID, ManufacturerID, Price, Quantity } = req.body;
        const result = await pool.query('UPDATE Products SET ProductName = $1, CategoryID = $2, ManufacturerID = $3, Price = $4, Quantity = $5 WHERE ProductID = $6 RETURNING *', [ProductName, CategoryID, ManufacturerID, Price, Quantity, id]);
        res.json(result.rows[0]);
    } catch (err) {
        handleError(err, res);
    }
});

// Удалить продукт
app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM Products WHERE ProductID = $1', [id]);
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        handleError(err, res);
    }
});

// Получить все записи склада
app.get('/warehouses', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Warehouses');
        res.json(result.rows);
    } catch (err) {
        handleError(err, res);
    }
});

// Добавить запись на складе
app.post('/warehouses', async (req, res) => {
    try {
        const { ProductID, Quantity, LastStockUpdate } = req.body;
        const result = await pool.query('INSERT INTO Warehouses (ProductID, Quantity, LastStockUpdate) VALUES ($1, $2, $3) RETURNING *', [ProductID, Quantity, LastStockUpdate]);
        res.json(result.rows[0]);
    } catch (err) {
        handleError(err, res);
    }
});

// Обновить запись на складе
app.put('/warehouses/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { Quantity, LastStockUpdate } = req.body;
        const result = await pool.query('UPDATE Warehouses SET Quantity = $1, LastStockUpdate = $2 WHERE ProductID = $3 RETURNING *', [Quantity, LastStockUpdate, id]);
        res.json(result.rows[0]);
    } catch (err) {
        handleError(err, res);
    }
});

// Удалить запись со склада
app.delete('/warehouses/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM Warehouses WHERE ProductID = $1', [id]);
        res.json({ message: 'Warehouses entry deleted successfully' });
    } catch (err) {
        handleError(err, res);
    }
});

// Получить все заказы
app.get('/orders', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Orders');
        res.json(result.rows);
    } catch (err) {
        handleError(err, res);
    }
});

// Добавить заказ
app.post('/orders', async (req, res) => {
    try {
        const { ProductID, Quantity, OrderDate } = req.body;
        const result = await pool.query('INSERT INTO Orders (ProductID, Quantity, OrderDate) VALUES ($1, $2, $3) RETURNING *', [ProductID, Quantity, OrderDate]);
        res.json(result.rows[0]);
    } catch (err) {
        handleError(err, res);
    }
});

// Обновить заказ
app.put('/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { ProductID, Quantity, OrderDate } = req.body;
        const result = await pool.query('UPDATE Orders SET ProductID = $1, Quantity = $2, OrderDate = $3 WHERE OrderID = $4 RETURNING *', [ProductID, Quantity, OrderDate, id]);
        res.json(result.rows[0]);
    } catch (err) {
        handleError(err, res);
    }
});

// Удалить заказ
app.delete('/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM Orders WHERE OrderID = $1', [id]);
        res.json({ message: 'Order deleted successfully' });
    } catch (err) {
        handleError(err, res);
    }
});


// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порте ${PORT}`);
});
