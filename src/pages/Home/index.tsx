import React, { useEffect, useState } from 'react'
import { FingerprintAIO } from '@ionic-native/fingerprint-aio'
import { Capacitor } from '@capacitor/core'

import requestNotification, { Notification } from '../../utils/notification'

import * as S from './styled'

const Home = () => {
  const [notification, setNotification] = useState<Notification>({
    token: '',
    error: '',
    message: null,
  })

  useEffect(() => {
    if (Capacitor.isNative) {
      requestNotification(setNotification)
    }
  }, [])

  const showFingerPrint = async () => {
    const isAvaible = await FingerprintAIO.isAvailable()

    if (isAvaible) {
      await FingerprintAIO.show({
        description: 'Biometria!'
      })
    }
  }

  return (
    <S.Container>
      <S.Button onClick={showFingerPrint}>
        Biometria
      </S.Button>
      <S.Text>Token: { notification.token}</S.Text>
    </S.Container>
  )
}


export default Home
