'use client'
import { useEffect, useState } from 'react'

const ProgressBar = () => {

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const calculateProgress = () => {
            const scrollTop = window.scrollY;

            const height = document.documentElement.scrollHeight - window.innerHeight

            const progress = (scrollTop / height) * 100

            setProgress(progress)
        };
        window.addEventListener('scroll', calculateProgress)

        return () => {
            return window.removeEventListener(
                'scroll',
                calculateProgress
            )
        }
    }, [])

    return (
        <div className="w-full h-1 bg-amber-50">
            <div
                style={{ width: `${progress}%` }}
                className={` h-full bg-amber-300`}></div></div>

    )
}

export default ProgressBar