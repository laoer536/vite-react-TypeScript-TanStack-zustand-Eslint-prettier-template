import { useQuery } from '@tanstack/react-query'
import { useNavigate, createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useState } from 'react'

import { button } from '@/assets/motion'
import { TestTanStackApi } from '@/network/api/test.TanStack.api'
import { useUserStore } from '@/store/user'

export const Route = createFileRoute('/about/')({
  component: About,
})

function About() {
  const navigate = useNavigate()
  const [pageTitle] = useState('laoer536-About Page')
  const { num, changeNum } = useUserStore()
  const { data: testData, isSuccess } = useQuery({ queryKey: ['test'], queryFn: TestTanStackApi })

  if (!isSuccess) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{pageTitle}</h1>
      <h2>userSore.num:{num}</h2>
      <h2>test-name:{testData.name}</h2>
      <motion.button {...button} onClick={changeNum}>
        click on the store provided by zustand to change the number
      </motion.button>
      <br />
      <br />
      <motion.button {...button} onClick={() => navigate({ to: '/' })}>
        back
      </motion.button>
    </div>
  )
}
