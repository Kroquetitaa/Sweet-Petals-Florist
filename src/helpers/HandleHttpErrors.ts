import { ApiError } from '@/api/HandleApiError'

export const handleHttpError = (response: Response): never => {
  switch (response.status) {
    case 400:
      throw new ApiError(400, 'Bad request')
    case 401:
      throw new ApiError(401, 'No autorizado. Inicia sesión.')
    case 403:
      throw new ApiError(403, 'No tienes permisos para esta acción.')
    case 404:
      throw new ApiError(404, 'Producto no encontrado.')
    case 500:
      throw new ApiError(500, 'Error interno del servidor.')
    default:
      throw new ApiError(response.status, 'Error inesperado. Inténtalo más tarde.')
  }
}
