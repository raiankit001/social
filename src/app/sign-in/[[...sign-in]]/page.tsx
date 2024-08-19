import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='h-[92vh] flex items-center justify-center'>
      <SignIn />
    </div>
  )
}