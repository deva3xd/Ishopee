import { Link } from "@inertiajs/react"

function Home() {
  return (
    <div className="text-red-800">
      <Link href={route('test')}>test</Link>
      <button class="btn">Default</button>
<button class="btn btn-primary">Primary</button>
    </div>
  )
}

export default Home