import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { Product } from '@/interfaces'
import { fetchProducts, getProductById } from './products.api'

const mockFetch = vi.fn()
vi.stubGlobal('fetch', mockFetch)

describe('products.api – error handling', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('fetchProducts returns products when response is ok', async () => {
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Rosa',
        binomialName: 'Rosa rubiginosa',
        price: 12.5,
        imgUrl: '/rosa.jpg',
        wateringsPerWeek: 2,
        fertilizerType: 'nitrogen',
        heightInCm: 45,
      },
    ]

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    })

    const result = await fetchProducts()

    expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/v1/product'))
    expect(result).toEqual(mockProducts)
  })

  it('fetchProducts throws ApiError 500 when server fails', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    })

    await expect(fetchProducts()).rejects.toEqual(
      expect.objectContaining({
        status: 500,
        message: 'Error interno del servidor.',
      })
    )
  })

  it('fetchProducts throws ApiError 401 when unauthorized', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 401,
    })

    await expect(fetchProducts()).rejects.toEqual(
      expect.objectContaining({
        status: 401,
        message: 'No autorizado. Inicia sesión.',
      })
    )
  })

  it('getProductById returns product when response is ok', async () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Rosa',
      binomialName: 'Rosa rubiginosa',
      price: 12.5,
      imgUrl: '/rosa.jpg',
      wateringsPerWeek: 2,
      fertilizerType: 'nitrogen',
      heightInCm: 45,
    }

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    })

    const result = await getProductById('1')

    expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/v1/product/1'))
    expect(result).toEqual(mockProduct)
  })

  it('getProductById throws ApiError 404 when product not found', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    })

    await expect(getProductById('1')).rejects.toEqual(
      expect.objectContaining({
        status: 404,
        message: 'Producto no encontrado.',
      })
    )
  })
})
