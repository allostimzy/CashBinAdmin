const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const express = require('express')
const mongoose = require('mongoose');
const options = require('./admin.options');
// const buildAdminRouter = require('./admin.router');
const PORT = 3000


const app = express()


const start = async () => {
  main().catch(err => console.log(err));

  async function main() {
    await mongoose.connect('mongodb+srv://timzylinux:hamm2016@cashbin.cil7upy.mongodb.net/CashBin', {
      useNewUrlParser : true,
      useUnifiedTopology : true,
    })
    const admin = new AdminJS(options);


  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
  } 
}

start()