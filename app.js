/* eslint-disable import/order */
const express = require('express')
const app = express()
const path = require('path')

// Router
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

// Swagger
const swaggerPath = path.resolve(__dirname, './swagger.yml')
const swaggerDocument = YAML.load(swaggerPath)
const cssOptions = require('./utils/swagger.js')

// API Document
app.use(
  '/apidoc',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, cssOptions),
)

app.use(express.json())

module.exports = app
