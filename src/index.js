const express = require('express');
const authController = require('./controllers/auth');
const userController = require('./controllers/user');

const app = express();
app.use(express.json());

app.post('/login', authController.handleLogin);
app.get('/api/users/:id', userController.getProfile);

app.get('/dashboard/analytics', (req, res) => {
  const { DashboardComponent } = require('./components/Dashboard');
  const dashboard = new DashboardComponent();
  const html = dashboard.render();
  res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
