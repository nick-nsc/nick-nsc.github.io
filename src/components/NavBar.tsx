const NavBar = () => {
    return (
        <nav className="px-2 sm:px-4 py-2 bg-gray-300">
            <ul className="flex flex-col sm:flex-row sm:space-x-8 justify-center">
                <a href="#">
                    <li className="py-2 px-3 text-white bg-cyan-500 rounded">
                        Home
                    </li>
                </a>
                <a href="#about">
                    <li className="py-2 px-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 sm:border-0 rounded">
                        About
                    </li>
                </a>
                <a href="#projects">
                    <li className="py-2 px-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 sm:border-0 rounded">
                        Projects
                    </li>
                </a>
                <a href="#skills">
                    <li className="py-2 px-3 text-gray-700 hover:bg-gray-50 rounded">
                        Skills
                    </li>
                </a>
            </ul>
        </nav>
    )
}
export default NavBar