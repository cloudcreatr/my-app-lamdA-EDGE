import Image from 'next/image'
export const dynamic = 'force-dynamic'

export default function Home() {
  const date = new Date().toLocaleTimeString();
  return (
    <div>
      {date}
    </div>
  )
}