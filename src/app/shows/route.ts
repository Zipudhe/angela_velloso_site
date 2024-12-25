import { NextRequest, NextResponse } from "next/server"

type Album = {
  total_tracks: number,
  external_urls: string[],
  images: object[],
  name: string,
}

type AlbunsData = {
  total: number,
  items: Album[]
}


export const GET = async (request: NextRequest) => {

  const artistId = "42GPYWdoneNvorglZQDPzo"
  const token = request.cookies.get("token")!.value

  if (!token) {
    return NextResponse.json({ error: "No token provide" }, { status: 401 })
  }

  const headers = new Headers()
  headers.append("Authorization", `Bearer ${token}`)

  const apiRequestConfig = {
    method: 'GET',
    headers
  } as RequestInit;

  const res = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?offset=0&limit=5`, apiRequestConfig)
  const responseData: AlbunsData[] = await res.json()
  return Response.json({ data: responseData })
}
