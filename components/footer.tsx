import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full py-6 bg-[#F0FFF4]">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Product</h4>
            <ul className="space-y-1">
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900" href="#">
                  Features
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900" href="#">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900" href="#">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="space-y-1">
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900" href="#">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900" href="#">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-1">
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900" href="#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900" href="#">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900" href="#">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Connect</h4>
            <ul className="space-y-1">
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900" href="#">
                  Twitter
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900" href="#">
                  Facebook
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-700 hover:text-gray-900" href="#">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">© 2023 SparkCard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

