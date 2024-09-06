'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Pagination({ currentPage }) {
    const router = useRouter();

    return (
        <div className="flex justify-center items-center space-x-4 my-8">
            {currentPage > 1 && (
                <Link href={`/?page=${currentPage - 1 }`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Previous</Link>
            )}
            <span>Page {currentPage}</span>
            <Link href={`/?page=${currentPage +1 }`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Next</Link>
        </div>
    );
}