import ant from 'ant-design-vue'
import { type UserModule } from '~/types'
// import 'ant-design-vue/dist/antd.css'

// Setup ant
export const install: UserModule = ({ app }) => {
  app.use(ant)
}
