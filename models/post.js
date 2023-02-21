const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    contents: String,
    publishedDate: Date,
    createdAt: { // 기본값을 설정할땐 이렇게 객체로 설정해줍니다
        type: Date,
        default: Date.now // 기본값은 현재 날짜로 지정합니다.
    }
});

var Post = mongoose.model('Post', postSchema);

postSchema.statics.save = function(data) {
    Post.save(function (err, data) {
        if (err) return handleError(err);
        console.log( data )
    })
}

postSchema.statics.find = async function(filter) {
    return await Post.find(filter)(function (err, data) {
        if (err) return handleError(err);
        console.log( data )
    })
}

module.exports = mongoose.model('Post', postSchema);
