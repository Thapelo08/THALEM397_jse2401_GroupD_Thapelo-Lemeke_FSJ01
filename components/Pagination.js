'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Pagination({ currentPage }) {
    const router = useRouter();

    return (
        <div className="flex justify-center items-center space-x-4 my-12">
            {currentPage > 1 && (
                <Link href={`/?page=${currentPage - 1 }`} className="btn- btn-secondary">
                    Previous</Link>
            )}
            <span className="text-lg font-medium">Page {currentPage}</span>
            <Link href={`/?page=${currentPage +1 }`} className="btn btn-secondary">
            Next</Link>
        </div>
    );
}