const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const response = require('./middlewares/response')
const config = require('./config')
var cors = require('koa2-cors');

// error handler
onerror(app)

// 中间件
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(response)
app.use(cors());

// 路由
const router = require('./routes')
app.use(router.routes())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.listen(config.server.port, () => `listening on port ${config.server.port}`)

