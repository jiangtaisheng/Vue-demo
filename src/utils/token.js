const key = " h5_token"

// set token

export function setToken(user){

  localStorage.setItem(key,user)
}

// read token
export function  getToken(){
  return localStorage.getItem(key)
}

// delete token
export function removeToken(){
  localStorage.removeItem(key)
}

// export default {
//   setToken,
//   getToken,
//   removeToken
// }
