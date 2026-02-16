import React from 'react'

const UserefExample = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='bg-blue-950 min-h-screen p-8 text-center'>
            <h1 className='text-white text-5xl font-bold'>Hello Use Effect</h1>

            <form onSubmit={handleFormSubmit}
                className='flex flex-col gap-5 w-80'>
                <input className='bg-white'
                    type='text' placeholder='' />

                <input className='bg-white '
                    type='text' placeholder='' />
                <button className='bg-amber-50 px-4 py-3 cursor-pointer' > Submit </button>
            </form>
        </div>
    )
}

export default UserefExample
