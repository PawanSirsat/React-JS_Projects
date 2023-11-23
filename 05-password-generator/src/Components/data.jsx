// util.js
let commonData = {
  password: '',
}

export const setGeneratedPassword = (newPassword) => {
  commonData.password = newPassword
}

export const getGeneratedPassword = () => {
  return commonData.password
}
