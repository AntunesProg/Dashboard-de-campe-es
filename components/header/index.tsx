export default function Header(){
    return(
        <header className="flex px-2 py-4 bg-blue-600 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xL">
            <div>
            Titulo Provisório
            </div>
            <nav>

                <ul className="flex gap-4">
                    <li>
                        Home
                    </li>
                    <li>
                        Sobre
                    </li>
                    <li>
                        Contato
                    </li>
                </ul>
            </nav>

            </div>

        </header>
    )
}