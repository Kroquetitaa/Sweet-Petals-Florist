import { handleHttpError } from '@/helpers/HandleHttpErrors'
import type { Product } from '@/interfaces'

const API_URL = import.meta.env.VITE_API_URL

export class ApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/api/v1/product`)

  if (!response.ok) {
    handleHttpError(response)
  }

  return response.json()
}

export const getProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${API_URL}/api/v1/product/${id}`)

  if (!response.ok) {
    handleHttpError(response)
  }

  return response.json()
}
