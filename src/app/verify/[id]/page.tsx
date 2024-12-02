import Verify from '@/components/verifyClaim/verify'
import React from 'react'

const Page = ({ params }: { params: { id: string } }) => {
  return (
<>
<Verify uid={params.id}/>
</>
  )
}

export default Page