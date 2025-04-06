import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    const tabs = [
        { name: "Dashboard", key: "" },
        { name: "Work", key: "work" },
        { name: "Services", key: "services" },
        { name: "Connect", key: "connect" }
    ];

    useEffect(() => {
        const currentPath = location.pathname.replace("/", "");
        setActiveTab(currentPath || "");
    }, [location.pathname]);

    return (
        <nav className="w-full bg-transparent z-50 sticky top-0 py-6 sm:py-8 backdrop-blur-md sm:backdrop-blur-none border-b border-green-800/30 sm:border-none">

            {/* Top row for hamburger and mobile logo */}
            <div className="flex items-center justify-between px-4 py-3 sm:px-8 sm:hidden">
                <div className="flex items-center gap-3">
                    <button
                        className="text-amber-400 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>

                    <span className="font-bold text-2xl font-acron space-x-2 text-amber-400">Rohit Kushwaha</span>
                </div>
            </div>

            {/* Desktop Centered Navbar */}
            <div className="hidden sm:flex justify-center w-full">
                <div className="backdrop-blur-md bg-green-900/30 border border-green-800 text-white flex items-center gap-4 sm:gap-6 px-6 py-3 rounded-full shadow-lg max-w-fit">
                    {tabs.map((tab) => (
                        <Link to={`/${tab.key}`} key={tab.key}>
                            <button
                                className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition-all duration-300 text-sm sm:text-base
                                    ${activeTab === tab.key
                                        ? "bg-green-800/60 text-white shadow-inner"
                                        : "hover:bg-green-700/30 text-green-100"
                                    }`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                <span className="font-medium">{tab.name}</span>
                                {activeTab === tab.key && (
                                    <span className="px-1.5 py-0.5 text-xs bg-green-700/40 rounded-md text-green-200">
                                        /
                                    </span>
                                )}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="flex flex-col items-start gap-4 px-6 pb-4 sm:hidden">
                    {tabs.map((tab) => (
                        <Link to={`/${tab.key}`} key={tab.key} className="w-full">
                            <button
                                className={`w-full text-left flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200
                                    ${activeTab === tab.key
                                        ? "bg-green-800/60 text-white"
                                        : "hover:bg-green-700/30 text-green-100"
                                    }`}
                                onClick={() => {
                                    setActiveTab(tab.key);
                                    setMenuOpen(false);
                                }}
                            >
                                <span className="font-medium">{tab.name}</span>
                                {activeTab === tab.key && (
                                    <span className="px-1.5 py-0.5 text-xs bg-green-700/40 rounded-md text-green-200">
                                        /
                                    </span>
                                )}
                            </button>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
