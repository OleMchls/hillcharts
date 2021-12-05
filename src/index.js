import express from 'express'
import cors from 'cors'
import canvas from 'canvas'
import respondWithImage from './respond-with-image.js'
import drawLine from './draw-line.js'
import drawLabels from './draw-labels.js'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  const width = 1024
  const height = 350
  const padding = 50
  const color = '#666'
  const img = canvas.createCanvas(width, height)
  const ctx = img.getContext('2d')

  drawLine(ctx, padding, width, height)
  drawLabels()

  respondWithImage(res, img)
})

app.listen(process.env.PORT || 3000)
