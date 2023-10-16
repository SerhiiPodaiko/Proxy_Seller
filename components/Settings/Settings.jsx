import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import styles from './Settings.module.scss'
import { PAGE_SLUGS } from '@constants/pages'
import DesktopFullImage from '@public/images/desktop-full.png'
import DesktopShortImage from '@public/images/desktop-short.png'
import LaptopFullImage from '@public/images/laptop-full.jpg'
import LaptopShortImage from '@public/images/laptop-short.jpg'
import MobileFullImage from '@public/images/mobile-full.jpg'
import MobileShortImage from '@public/images/mobile-short.jpg'

const Settings = () => (
    <section className={cn('p-2', styles.settings)}>
        <div className='container'>
            <header className='d-flex flex-column gap-2'>
                <Link href={PAGE_SLUGS.home} className='d-flex align-self-start btn btn-outline-primary'>
                    Back
                </Link>
                <h4 className={cn('mb-4', styles.settingsTitle)}>Settings</h4>
            </header>
            <div className='row'>
                <div className='col-12'>
                    <h4 className={styles.settingsHead}>Desktop version</h4>
                    <div className='pt-3 border rounded position-relative'>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <Image className='img-fluid' src={DesktopFullImage} alt='Desktop Full' />
                            </div>
                            <div className='col-12 col-md-6 mt-4 mt-md-0'>
                                <Image className='img-fluid' src={DesktopShortImage} alt='Desktop Short' />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-3 my-4'/>
                <div className='col-12'>
                    <h4 className={styles.settingsHead}>Laptop version</h4>
                    <div className='pt-3 border rounded position-relative'>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <Image className='img-fluid' src={LaptopFullImage} alt='Laptop Full' />
                            </div>
                            <div className='col-12 col-md-6 mt-4 mt-md-0'>
                                <Image className='img-fluid' src={LaptopShortImage} alt='Laptop Short' />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-3 my-4'/>
                <div className='col-12'>
                    <h4 className={styles.settingsHead}>Mobile version</h4>
                    <div className='pt-3 border rounded position-relative'>
                        <div className='row'>
                            <div className='col-12 col-md-6 text-center'>
                                <Image className='img-fluid' src={MobileFullImage} alt='Mobile Full' />
                            </div>
                            <div className='col-12 col-md-6 mt-4 mt-md-0 text-center'>
                                <Image className='img-fluid' src={MobileShortImage} alt='Mobile Short' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Settings