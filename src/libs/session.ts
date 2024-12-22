"use server"

import { NextRequest, NextResponse } from "next/server";

export const getAuthToken = async () => {
  const authRequestConfig = {
    method: 'POST',
    headers: {
      'Authorization': `basic ${Buffer.from(`${process.env.SPOTIFY_BASIC_AUTH}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: "grant_type=client_credentials"
  } as RequestInit;

  const tokenRequest = new Request('https://accounts.spotify.com/api/token', authRequestConfig)

  let res
  const response = await fetch(tokenRequest)

  if (!response.ok) {
    return
  }

  const { access_token, expires_in } = await response.json()

  const expires = new Date(Date.now() + expires_in * 1000);

  // Create the NextResponse and set the cookie
  res = NextResponse.next();
  res.cookies.set('token', access_token, {
    httpOnly: true,
    expires,
  });

  return res
}

export const getAuthorization = async (request: NextRequest) => {
  const token = request.cookies.get("token")?.value
  if (!token) {
    console.log('first site access should get a token')
    return await getAuthToken()
  }

  console.log("Has accessed site before... needs to update token")
  return NextResponse.next()
}
