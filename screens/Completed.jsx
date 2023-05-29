import { BsCheck2Circle } from 'react-icons/bs'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'tween',
    },
  },
}

const Completed = () => {
  return (
    <motion.main
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className='container flex h-screen px-4 mx-auto '
    >
      <section className='w-11/12 mx-auto my-12 sm:w-4/5'>
        <div className='flex justify-center mt-20'>
          <BsCheck2Circle className='w-20 h-20 text-green-500' />
        </div>
        <h2 className='mt-4 text-3xl text-center'>
          Congratulations on successfully backing up your recovery phrase!
        </h2>
        <p className='mt-4 leading-loose text-center'>
          You have taken an important step towards ensuring the security and
          accessibility of your <strong>digital cryptocurrency</strong>.
        </p>
        <a
          href='/'
          className='flex items-center justify-center mt-4 text-blue-500 underline'
        >
          <span>Back to home</span>
          <svg
            aria-hidden='true'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            className='w-4 h-4'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        </a>
      </section>
    </motion.main>
  )
}

export default Completed
