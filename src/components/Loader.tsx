
const Loader = () => {
    return (
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white bg-teal-500">
          <div>
              <h2 className='pb-4 text-xl'>Loading...</h2>
              <div className='flex justify-center'>
                  <div className='w-16 h-16 rounded-full border-4 border-solid border-teal-100 border-t-transparent animate-spin'></div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Loader