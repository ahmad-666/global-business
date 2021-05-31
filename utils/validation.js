export const validateEmail = val => {
  if (!val.trim().length || !val.includes('@')) return false
  return true
}
export const validateFirstName = val => {
  if (!val.trim().length) return false
  return true
}
export const validateLastName = val => {
  if (!val.trim().length) return false
  return true
}
