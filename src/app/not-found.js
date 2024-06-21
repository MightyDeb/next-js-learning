import Link from "next/link";

export default function NotFound(){
  return(
    <div>
      <h1>This page cannot be found.</h1>
      <Link href={'/'}>Go Home</Link>
    </div>
  )
}