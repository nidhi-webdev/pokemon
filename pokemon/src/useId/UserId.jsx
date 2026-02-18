import { useId } from "react"



const UserId = () => {
    const usernameId = useId()
    const emailId = useId()


    return (
        <div className='p-10'>
            <form className='flex flex-col items-center min-h-screen gap-7'>
                <label htmlFor={usernameId}> Username  </label>
                <input id= {usernameId} type='text' name="username" className='border border-black p-2 rounded-xl' />

                <label htmlFor={emailId}> Email </label>
                <input id={emailId} type='email' name="email" className='border border-black p-2 rounded-xl' />

                <button className='bg-green-700 text-white px-3 py-2 rounded-xl cursor-pointer' > Submit   </button>
            </form>
        </div>
    )
}

export default UserId
