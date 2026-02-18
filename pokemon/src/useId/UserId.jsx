
const UserId = () => {
  return (
    <div className='p-10'>
      <form className='flex flex-col items-center min-h-screen gap-7'>
        <label htmlFor='username'> Username  </label>
        <input id='username' type='text' className='border border-black p-2 rounded-xl'/>

        <label htmlFor='email'> Email </label>
        <input id='email' type='email' className='border border-black p-2 rounded-xl' />

        <button className='bg-green-700 text-white px-3 py-2 rounded-xl cursor-pointer' > Submit   </button>
      </form>
    </div>
  )
}

export default UserId
