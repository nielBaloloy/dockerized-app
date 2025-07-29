import express from 'express';
import userRoutes from './modules/user.routes';

const app = express();
app.use(express.json());
app.use('/api', userRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
