import { NextRequest } from 'next/server'
import { getAuthorization } from '@lib/session'

export const middleware = async (request: NextRequest) => {
  return getAuthorization(request)
}
