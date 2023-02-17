import Link from "next/link";
import { useRouter } from "next/router";

export default function Bnav() {
    const router = useRouter()
    
  return (
    <div className="btm-nav bg-neutral">
      <Link href="/levels/easy" className={router.query.id === "easy"?"active bg-neutral":""}>
        easy
      </Link>
      <Link href="/levels/medium" className={router.query.id === "medium"?"active bg-neutral":""}>
        medium
      </Link>
      <Link href="/levels/hard" className={router.query.id === "hard"?"active bg-neutral":""}>
        hard
      </Link>
    </div>
  );
}
