const express = require('express')
const app = express()
const port = 3000
var ffmpeg = require('fluent-ffmpeg');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const videoFile = './ab.mp4'

ffmpeg.ffprobe(videoFile, (err, metaData) => {
  const {duration} = metaData.format;
  console.log(parseInt({duration}) *60);
  ffmpeg()
    .input(videoFile)
    .inputOption(`-ss 00:05:10`)
    .outputOption('-t 60')

    .output('./success.mp4')
    .run();
});