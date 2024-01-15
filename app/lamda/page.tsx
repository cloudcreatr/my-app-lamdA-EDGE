
import { unstable_noStore as noStore } from 'next/cache';
import { cookies } from 'next/headers'
export const dynamic = 'force-dynamic'


export default function Home() {
    const cookieStore = cookies();
    noStore();
  const date = new Date().toLocaleTimeString();
  return (
    <div>
      {date}
    </div>
  )
}