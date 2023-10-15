import Link from 'next/link'

import { PAGE_SLUGS } from '@constants/pages'
import ErrorSvg from '@public/icons/error.svg'

export default function NotFound() {
    return (
        <section className='p-5 d-flex flex-column gap-2 border-danger bg-opacity-25 bg-danger border rounded'>
            <header className='d-flex align-items-center justify-content-between'>
                <div className='d-flex flex-column gap-2'>
                    <h2 className='text-danger'>Not Found</h2>
                    <strong>Something went wrong</strong>
                </div>
                <ErrorSvg className='img-fluid' />
            </header>
            <div className='d-flex justify-content-center'>
                <Link href={PAGE_SLUGS.home} className='btn btn-danger'>
                    Back to Home
                </Link>
            </div>
        </section>
    )
}