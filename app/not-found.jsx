import Link from 'next/link'
import { PAGE_SLUGS } from '@constants/pages'

export default function NotFound() {
    return (
        <section>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href={PAGE_SLUGS.home}>Back to Home</Link>
        </section>
    )
}