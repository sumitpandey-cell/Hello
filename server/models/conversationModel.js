import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        default: ''
    },
    imageUrl: {
        type: String,
        default: ''
    },
    videoUrl: {
        type: String,
        default: ''
    },
    seen: {
        type: Boolean,
        default: false
    },

}, {timestamps: true});


const conversationSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    message: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'message'
        }
    ]

}, {timestamps: true});

const Message = mongoose.model('message', messageSchema);
const Conversation = mongoose.model('conversation', conversationSchema);
export{
    Message,
    Conversation
}