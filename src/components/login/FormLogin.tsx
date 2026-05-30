'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from "react-toastify"





export const FormLogin = () => {
    const router = useRouter()

    const [info, setInfo] = React.useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(info);

        if (info.email === '' || info.password === '') {
            toast.error('you must complete the form', { position: 'bottom-right', theme: 'dark' })

        }

        toast.success('login success', { position: 'bottom-right', theme: 'dark' })
        router.replace('/')


    }


    return (

        <form onSubmit={handleSubmit} className="space-y-6">

            <div>
                <label className="label">
                    <span className="label-text">
                        Email Address
                    </span>
                </label>

                <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full outline-none"
                    value={info.email}
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            email: e.target.value
                        })
                    }
                />
            </div>

            <div>
                <label className="label">
                    <span className="label-text">
                        Password
                    </span>
                </label>

                <input
                    type="password"
                    placeholder="Enter your password"
                    className="input input-bordered w-full outline-none"
                    value={info.password}
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            password: e.target.value
                        })
                    }
                />
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                    />
                    <span>Remember me</span>
                </label>

                <a
                    href="#"
                    className="text-accent hover:underline"
                >
                    Forgot password?
                </a>

            </div>

            {/* Login Button */}
            <button
                type="submit"
                className="btn btn-accent btn-lg w-full"
            >
                Login
            </button>

        </form>
    )
}
