import axios from 'axios';
import express  from 'express';

const app = express()
app.use(express.json());
const PORT = process.env.PORT || 3000

app.get('/', async (_req: express.Request, res: express.Response) => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
		res.json(response.data);
	} catch (e) {
		res.status(500).json({ error: 'Failed to fetch external data' });
		console.log(e)
	}
})

app.listen(PORT, () => {
  	console.log(`server listened on port ${PORT}`)
})
