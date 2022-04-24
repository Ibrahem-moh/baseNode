import express, { Request, Response } from 'express'

import cors from 'cors'

import bodyParser from 'body-parser'
import path from 'path'

const app: express.Application = express()
const port = '3000'
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.json())
app.use(cors())

app.get('/', function (req: Request, res: Response) {
	res.status(200).send('Root Rout')
})
app.listen(port, function () {
	console.log(`local host running on port ${port}`)
})

export default app
