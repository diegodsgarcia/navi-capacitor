import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core'

const { PushNotifications } = Plugins

export type Notification = {
  token: string,
  error: string,
  message: any
}

const requestNotification = async (setNotification: (notification: Notification) => void) => {
  let notification: Notification = {
    token: '',
    error: '',
    message: null,
  }

  const result = await PushNotifications.requestPermission()

  if (result.granted) {
    PushNotifications.register()
  }

  PushNotifications.addListener('registration', (token: PushNotificationToken) => {
    setNotification({ ...notification, token: token.value })
  })

  PushNotifications.addListener('registrationError', (error) => {
    setNotification({ ...notification, error})
  })

  PushNotifications.addListener('pushNotificationReceived', (message: PushNotification) => {
    setNotification({ ...notification, message})
  })

  PushNotifications.addListener('pushNotificationActionPerformed', (message: PushNotificationActionPerformed) => {
    setNotification({ ...notification, message})
  })

  return notification
}

export default requestNotification
