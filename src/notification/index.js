export const success = (app, message) => {
  app.$notification({
    type: 'suceess',
    contents: message,
  })
}

export const error = (app, message) => {
  app.$notification({
    type: 'error',
    contents: message,
  })
}

export const info = (app, message) => {
  app.$notification({
    type: 'info',
    contents: message,
  })
}
