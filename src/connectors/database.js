import { connect } from "mongoose";

(async () => {
    const  db = await connect('mongodb://db/crud-mongo')
                .then(bd => console.log('DB is connected to', bd.connection.name))
                .catch(error => console.error(err));    
})();
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://db/mydatabase')
//     .then(db => console.log('DB is connected to ', db.connection.host))
//     .catch(err => console.error(err));