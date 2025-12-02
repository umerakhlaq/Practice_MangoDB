const { log } = require('console');
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const url = `mongodb+srv://umerakhlaq:umer123.@cluster0.sxq7fz8.mongodb.net/`
const client = new MongoClient(url);

const dbName = 'mangoDB';

const connectDB = async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbName);

        const collection = db.collection('students');
        // ======================================= insert data in collection =====================================
        // const result = await collection.insertOne({ name: 'akhlaq', age: 20 });
        // console.log('Inserted documents =>', result);

        // ======================================= find data in collection =====================================
        const findResult = await collection.find({}).toArray();
        console.log('Found documents =>', findResult);
        return findResult;
        
        // ======================================= update data in collection =====================================
        // const updateResult = await collection.updateOne({ name: 'akhlaq',  age: 20 } , { $set: { name: 'owais',  age: 19 } });
        // console.log('Updated documents =>', updateResult);

        // ======================================= delete data in collection =====================================
        // const deleteResult = await collection.deleteOne({ name: 'akhlaq',  age: 20 });
        // console.log('Deleted documents =>', deleteResult);

        // return 'done.';
    } catch (err) {
        console.error('Error connecting to ongoDB:', err);
    }
};

// agar collection find karengay tou connectDB function call karenge
connectDB()
    .then(console.log)
    .catch(console.error)
    // .finally(() => client.close());


app.use(express.json());

app.get('/', async (req, res) => {
    const collection = client.db(dbName).collection('students');

    const findResult = await collection.find({}).toArray();
    console.log('find result', findResult);

    res.send(findResult);
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

