import Link from "next/link";




export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center text-black h-screen gap-10 bg-base-100">
        <h1 className="text-6xl">Nonogram</h1>
          <Link href="/levels/easy" className="text-3xl btn btn-secondary w-40">levels</Link>
          <button className="text-3xl btn btn-secondary w-40">setting</button>
      </main> 
    </>
  )
}
