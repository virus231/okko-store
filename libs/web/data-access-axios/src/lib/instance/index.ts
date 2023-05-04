import axios, { type AxiosInstance } from 'axios'
import { AxiosConstructorParams } from './types'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://example.com/api',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})

export class MainApi {
  private baseUrl: string
  private request: AxiosInstance

  constructor(options: AxiosConstructorParams) {
    this.baseUrl = options.baseUrl

    this.request = axios.create({
      baseURL: options.baseUrl,
      timeout: 5000,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  public getUsers() {
    return this.request.get('/user')
  }
}
