const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const { Schema } = mongoose;
autoIncrement.initialize(mongoose.connection);

const postSchema = new Schema({
    id : {type: Number, default: 0},
    title: String,
    contents: String,
    publishedDate: Date,
    createdAt: { // 기본값을 설정할땐 이렇게 객체로 설정해줍니다
        type: Date,
        default: Date.now // 기본값은 현재 날짜로 지정합니다.
    }
});

postSchema.plugin(autoIncrement.plugin, {
    model: 'postSchema',
    field: 'id',
    startAt: 1, //시작
    increment: 1 // 증가
});

module.exports = mongoose.model('Post', postSchema);
