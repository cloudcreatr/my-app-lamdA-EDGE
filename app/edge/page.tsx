
export const dynamic = 'force-dynamic'
export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export default function Home() {
  const date = new Date().toLocaleTimeString();
  return (
    <div>
        i am from edge
      {date}
    </div>
  )
}