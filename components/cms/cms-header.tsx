'use client';

import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';
import Link from 'next/link';

export function CMSHeader() {
    const { data: session } = useSession();
    const pathname = usePathname();

    // Don't show header on login page
    if (pathname === '/cms/login') {
        return null;
    }

    if (!session) {
        return null;
    }

    const handleLogout = async () => {
        await signOut({ callbackUrl: '/cms/login' });
    };

    return (
        <header className=" border-b  shadow-sm">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Link href="/cms" className="text-xl font-bold ">
                            CMS Dashboard
                        </Link>
                        <nav className="hidden md:flex space-x-4">
                            <Link
                                href="/cms"
                                className={`text-sm px-3 py-2 rounded-md transition-colors ${pathname === '/cms'
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                Posts
                            </Link>
                            <Link
                                href="/cms/posts/new"
                                className={`text-sm px-3 py-2 rounded-md transition-colors ${pathname === '/cms/posts/new'
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                New Post
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <User className="h-4 w-4" />
                            <span>{session.user?.name}</span>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleLogout}
                            className="flex items-center space-x-2"
                        >
                            <LogOut className="h-4 w-4" />
                            <span>Logout</span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
} 