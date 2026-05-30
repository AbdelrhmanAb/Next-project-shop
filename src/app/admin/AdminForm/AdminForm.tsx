'use client'

import React, { useState } from 'react'

const AdminForm = () => {

    const [formData, setFormData] = useState({
        title: '',
        price: '',
        category: '',
        stock: '',
        image: '',
      
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })

    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log(formData)
    }

    return (
        <section className="w-full min-h-screen bg-base-100 p-6">

            <div className="max-w-4xl mx-auto bg-base-200 shadow-2xl rounded-3xl p-8">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-black text-primary">
                        Add Product
                    </h1>

                    <p className="text-base-content/60 mt-2">
                        Create and manage products
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >

                    {/* Product Title */}
                    <div className="md:col-span-2">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Product Title
                            </span>
                        </label>

                        <input
                            type="text"
                            name="title"
                            placeholder="Enter product title"
                            className=" outline-none input input-bordered w-full"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">
                                Price
                            </span>
                        </label>

                        <input
                            type="number"
                            name="price"
                            placeholder="Enter price"
                            className=" outline-none input input-bordered w-full"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Stock */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">
                                Stock
                            </span>
                        </label>

                        <input
                            type="number"
                            name="stock"
                            placeholder="Available quantity"
                            className=" outline-none input input-bordered w-full"
                            value={formData.stock}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Category */}
                    <div className="md:col-span-2">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Category
                            </span>
                        </label>

                        <select
                            name="category"
                            className="select select-bordered w-full"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="">Select category</option>
                            <option value="fashion">Fashion</option>
                            <option value="electronics">Electronics</option>
                            <option value="shoes">Shoes</option>
                            <option value="beauty">Beauty</option>
                        </select>
                    </div>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Product Image URL
                            </span>
                        </label>

                        <input
                            type="text"
                            name="image"
                            placeholder="https://example.com/image.png"
                            className=" outline-none input input-bordered w-full"
                            value={formData.image}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2 flex justify-end">

                        <button
                            type="submit"
                            className="btn btn-primary btn-lg px-10"
                        >
                            Add Product
                        </button>

                    </div>

                </form>

            </div>

        </section>
    )
}

export default AdminForm