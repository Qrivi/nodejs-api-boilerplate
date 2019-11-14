import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => res.status(200).send({
    message: 'Howdy? 🤠'
}));

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});

export default app;
