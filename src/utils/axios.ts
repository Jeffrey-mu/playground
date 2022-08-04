import axios from 'axios'
export class Request {
  get(url: string, params?: {}): Promise<any> {
    return axios.get(url, { params }).then(res => res.data)
  }

  post(url: string, data?: {}): Promise<any> {
    return axios.post(url, data).then(res => res.data)
  }
}
export const F = new Request()
