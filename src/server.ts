import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('🗄️ database connection established')
    app.listen(config.port, () => {
      console.log(`🚀 Our app listening on port ${config.port}`)
    })
  } catch (e) {
    console.log('Failed to connect with server')
  }
}

main()
