// @ts-nocheck
import * as dotenv from 'dotenv'
import makeApp from './app/index'
import { connectMongo, pathEnv } from 'configs-back'

dotenv.config({ path: pathEnv() })
connectMongo()
const app = makeApp()
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`App listening port ${port}`))
