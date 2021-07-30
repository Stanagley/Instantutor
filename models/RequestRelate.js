const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestRelateSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },

    posted_requests: [ 
        {
            request_id: {
                type: String
            }
        }
    ],

    received_requests: [
        {
            request_id: {
                type: String
            }
        }
    ]
});

module.exports = mongoose.model("requestRelate", RequestRelateSchema);
