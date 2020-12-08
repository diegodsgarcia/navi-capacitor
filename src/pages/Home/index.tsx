import React, { useEffect, useState } from 'react'

import requestNotification, { Notification } from '../../utils/notification'

import * as S from './styled'

const Home = () => {
  const [notification, setNotification] = useState<Notification>({
    token: '',
    error: '',
    message: null,
  })

  useEffect(() => {
    requestNotification(setNotification)
  }, [])

  return (
    <S.Container>
      <S.Button>
        Biometria
      </S.Button>
      <S.Text>Token: { notification.token}</S.Text>

    </S.Container>
  )
}


export default Home
