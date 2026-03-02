export default function Header() {

    const menu = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "Sobre",
            url: "/sobre"
        },
        {
            title: "Contato",
            url: "/contato"
        }
    ]

    return (
        <header className="flex justify-center items-center flex-col gap-5">
            <div>
                <img src="/images/Logo.svg" alt="" />
            </div>
            <div>
                <menu>
                    <ul className="flex flex-row items-center gap-28 uppercase">
                        {menu.map((item, index) => (
                            <li key={index}>
                                <a className="text-sm" href={item.url}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </menu>
            </div>
        </header>
    )
}