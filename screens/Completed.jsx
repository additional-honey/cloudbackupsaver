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
      className='container px-4 mx-auto mt-28 h-3/4'
    >
      <section className='w-11/12 mx-auto my-12 sm:w-4/5'>
        <div className='flex justify-center'>
          <BsCheck2Circle className='w-20 h-20 text-green-500' />
        </div>
        <h2 className='mt-4 text-3xl text-center'>
          Congratulations on successfully backing up your recovery phrase with
          us!
        </h2>
        <p className='mt-4 leading-loose text-center'>
          You&apos;ve taken an important step towards ensuring the security and
          accessibility of your <strong>digital cryptocurrency</strong>. Your
          trust in us is greatly appreciated, and we are committed to
          safeguarding your data with the utmost care.
        </p>
        <p className='mt-4 leading-loose text-center'>
          If you have any questions or need further assistance, our support team
          is here to help. Feel free to reach out to us at [contact email/phone
          number] at any time. We value your partnership and remain committed to
          providing you with exceptional service.
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
