import './App.css'


const App: React.FC = () => {
  return (
    <>
      <div className='background fixed border-[1px] border-black'>
      </div>
      <header className='main header fixed m-8 flex flex-col justify-between'>
        <div>
          <h1 className='text-7xl text-gray-800 mb-8 ml-2'>
            Jii Eu
          </h1>
          <h2 className='text-2xl sm:w-7/12 max-w-[35rem] text-gray-700 pr-4'>
            I'm a frontend developer currently residing in Kentucky, passionate about crafting minimalist and simple digital experiences.
          </h2>
        </div>
        <nav className='header-nav text-2xl w-5/12 text-gray-700'>
          <div>
            <a href='#' className='hover:bg-black text-black hover:text-white'>
              Work
            </a>
          </div>
          <div>
            <a href='#' className='hover:bg-black text-black hover:text-white'>
              About
            </a>
          </div>
          <div>
            <a href='#' className='hover:bg-black text-black hover:text-white'>
              Contact
            </a>
          </div>
        </nav>
      </header>
    </>
  )
}

export default App
