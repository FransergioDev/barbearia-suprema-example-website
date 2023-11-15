"use client"

import Link from "next/link";
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import './navbar.css';

export default function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);

    return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">Barbearia Suprema</Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavDropdown" 
                        aria-controls="navbarNavDropdown" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        onClick={() => setIsOpen(!isOpen)}
                        >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse${isOpen ? ' show':''}`} id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link href="/" className={`nav-link${pathname == "/" ? " active" : ""}`}>Home</Link>
                            <Link href="/servicos" className={`nav-link${pathname == "/servicos" ? " active" : ""}`}>Serviços</Link>
                            <Link href="/quem-somos" className={`nav-link${pathname == "/quem-somos" ? " active" : ""}`}>Quem Somos</Link>
                            <Link href="/contato" className={`nav-link${pathname == "/contato" ? " active" : ""}`}>Contato</Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
}