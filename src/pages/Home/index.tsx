import React, { useEffect } from 'react'

import {
  Capacitor,
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core'

const { PushNotifications } = Plugins

const requestNotification = async () => {
  const result = await PushNotifications.requestPermission()

  if (result.granted) {
    PushNotifications.register()
  }

  PushNotifications.addListener('registration', (token: PushNotificationToken) => {
    console.log('token:', token.value)
  })

  PushNotifications.addListener('registrationError', (error) => {
    console.log('error:', error)
  })

  PushNotifications.addListener('pushNotificationReceived', (notifiation: PushNotification) => {
    console.log('recebida!', notifiation)
  })

  PushNotifications.addListener('pushNotificationActionPerformed', (notifiation: PushNotificationActionPerformed) => {
    console.log('quando tocada na notificação!', notifiation)
  })
}

const Home = () => {
  useEffect(() => {
    requestNotification()
  }, [])

  return (
    <>
      <header>
        Notification
      </header>
    </>
  )
}


export default Home
