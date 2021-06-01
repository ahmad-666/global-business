export const validateEmail = val => {
  if (!val || !val.trim().length || !val.includes('@')) return false
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
export const validateRequired = val => {
  if (!val || !val.trim().length) return false
  return true
}
