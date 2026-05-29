const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = 5000 || process.env.PORT
dotenv.config()

app.use(cors())
app.use(express.json())

const uri = process.env.MY

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const run = async() => {
    try {
        await client.connect();

        const db = client.db('hello')
        const userCollection = db.collection('myAllData')

        app.get('/user', async (req,res) => {
            const cursor = await userCollection.find()
            const result = await cursor.toArray()
            return res.send(result)
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } 
    finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Umayer Ahmad')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})