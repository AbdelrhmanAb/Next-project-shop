import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="hidden lg:flex gap-5 text-primary">
        <Link
          href="/posts"
          className="text-2xl  transition duration-300"
        >
          Posts
        </Link>

             <Link
          href="/contact"
          className="text-2xl   transition duration-300"
        >
          Contact
        </Link>

             <Link
          href="/about"
          className="text-2xl  transition duration-300"
        >
          About
        </Link>
      </nav>
  )
}

export default Navbar