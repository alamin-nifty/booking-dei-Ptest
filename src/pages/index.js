import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center  justify-center mt-10">
      <Link
        href="/blogs"
        className="bg-black text-white text-xl font-bold p-1 rounded-md"
      >
        {" "}
        See Blogs
      </Link>
    </div>
  );
}
