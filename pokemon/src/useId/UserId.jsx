import { useId } from "react"

// Suppose I have to make 10 input like this so I have to create everytime the userid Thats not a good practisch 
// So for that there is a different thing So we can use that and the id unique

const UserId = () => {
    const id = useId()
    


    return (
        <div className='p-10'>
            <form className='flex flex-col items-center min-h-screen gap-7'>
                <label htmlFor={id + "usernameId"}> Username  </label>
                <input id= {id + "usernameId"} type='text' name="username" className='border border-black p-2 rounded-xl' />

                <label htmlFor={id + "emailId"}> Email </label>
                <input id={id + "emailId"} type='email' name="email" className='border border-black p-2 rounded-xl' />

                <button className='bg-green-700 text-white px-3 py-2 rounded-xl cursor-pointer' > Submit   </button>
            </form>
        </div>
    )
}

export default UserId
