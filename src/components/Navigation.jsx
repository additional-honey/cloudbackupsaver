// /* eslint-disable no-undef */
/* eslint-disable react/prop-types */

const Navigation = ({ screen, prevScreen }) => {
  return (
    <header className='text-white shadow-xl'>
      <nav className='flex justify-between px-8 py-6'>
        <a href='/'>Cloud Wallet Backup</a>
        {screen > 0 && (
          <button
            onClick={() => prevScreen()}
            className='flex transition-colors hover:text-slate-300 place-items-center'
          >
            <svg
              aria-hidden='true'
              fill='none'
              className='w-4 h-4 mr-2'
              stroke='currentColor'
              strokeWidth='1.5'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </svg>
            <span className='text-sm'>Go Back</span>
          </button>
        )}
      </nav>
    </header>
  )
}

export default Navigation
