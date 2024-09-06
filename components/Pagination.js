'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Pagination({ currentPage }) {
    const router = useRouter();

    return (
        <div>
            {currentPage > 1 && (
                <Link href={`/?page=${currentPage - 1 }`}>Previous</Link>
            )}
            <span>Page {currentPage}</span>
            <Link href={`/?page=${currentPage +1 }`}>Next</Link>
        </div>
    );
}