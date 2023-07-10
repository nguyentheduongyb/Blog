import React from 'react'
import Link from 'next/link'

import { AiOutlineGlobal } from "react-icons/ai"
import { MdNotifications, MdLanguage } from "react-icons/md"

import Search from '~/pages/components/Search'
import Language from "~/pages/components/popper/Language"


const MENU_ITEMS = [
        {
                icon: <MdLanguage />,
                title: 'Tiếng Việt',
                children: {
                        title: 'Language',
                        data: [
                                {
                                        type: 'language',
                                        code: 'en',
                                        title: 'English',
                                },
                                {
                                        type: 'language',
                                        code: 'vi',
                                        title: 'Tiếng Việt',
                                },
                        ],
                },

        },
];
const Header = () => {
        // Handle logic
        const handleMenuChange = (menuItem: any) => {
                switch (menuItem.type) {
                        case 'language':
                                // Handle change language
                                break;
                        default:
                }
        };
        return (
                <header className="w-full h-[64px] bg-header text-black fixed top-0 z-[40] shadow-sm border-b">
                        <div className="container h-full">
                                <div className="h-full flex items-center container mx-auto justify-between">
                                        <Link href="" passHref>
                                                <img className="h-[32px]" src="/ntd.svg" alt="" />
                                        </Link>
                                        <ul className="flex gap-4">
                                                <li>
                                                        <Link href="/">Home</Link>
                                                </li>
                                                <li>
                                                        <Link href="/about">About Us</Link>
                                                </li>
                                                <li>
                                                        <Link href="/blog/hello-world">Blog Post</Link>
                                                </li>
                                        </ul>
                                        <Search />
                                        <div className="flex gap-4 font-bold">
                                                <button className="text-xs border h-[36px] px-3 rounded bg-black text-white">Đăng nhập</button>
                                                <Language items={MENU_ITEMS} onChange={handleMenuChange}>
                                                        <button className="border h-[36px] px-3 rounded">VI</button>
                                                </Language>

                                        </div>
                                </div>
                        </div>
                </header>
        )
}

export default Header
