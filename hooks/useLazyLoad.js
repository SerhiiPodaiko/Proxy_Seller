import { useInView } from 'react-intersection-observer'

const useLazyLoad = () => {
    const { ref, inView } = useInView()

    return {
        ref,
        inView
    }
}

export default useLazyLoad