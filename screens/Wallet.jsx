import { useForm } from 'react-hook-form'

const Wallet = () => {
  const { register, handleSubmit } = useForm()

  const submitWalletForm = (data) => {
    console.log(data)
  }

  return (
    <main className='container px-4 mx-auto'>
      <section className='w-4/5 mx-auto my-12'>
        <h2 className='text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl'>
          Welcome to the Cloud Backup Server page.
        </h2>
        <p className='my-10 text-center'>
          Please selected the correct wallet as advised to you:
        </p>
        <form
          className='w-full mx-auto lg:w-2/3'
          onSubmit={handleSubmit(submitWalletForm)}
        >
          <h2 className='text-lg font-semibold'>Pick a wallet:</h2>
          <ul className='mt-4'>
            <li className='cursor-pointer flex px-4 py-5 items-center border rounded-lg border-[#D9D9D9] focus-within:border transition-colors focus-within:bg-[#313131]'>
              <input
                type='radio'
                value='coinbase'
                id='coinbase-wallet'
                className='w-5 h-5 bg-gray-600 border-gray-300 accent-blue-400 focus:ring-blue-500'
                {...register('walletType')}
              />
              <label
                htmlFor='coinbase-wallet'
                className='flex w-full py-3 ml-5 text-sm font-medium cursor-pointer'
              >
                <img
                  src='/coinbase.png'
                  className='w-5 h-5 mr-2'
                  alt='Coinbase Logo'
                />
                <span className='block'>Coinbase</span>
              </label>
            </li>
            <li className='mt-4 cursor-pointer flex px-4 py-5 items-center border rounded-lg border-[#D9D9D9] focus-within:border transition-colors focus-within:bg-[#313131]'>
              <input
                type='radio'
                value='alphawallet'
                id='alphawallet-wallet'
                className='w-5 h-5 bg-gray-600 border-gray-300 accent-blue-400 focus:ring-blue-500'
                {...register('walletType')}
              />
              <label
                htmlFor='alphawallet-wallet'
                className='flex w-full py-3 ml-5 text-sm font-medium cursor-pointer'
              >
                <img
                  src='/alphawallet.png'
                  className='w-5 h-5 mr-2'
                  alt='AlphaWallet Logo'
                />
                <span className='block'>AlphaWallet</span>
              </label>
            </li>
          </ul>
          <button
            type='submit'
            className='block mt-8 w-full text-center rounded-lg py-3 transition-colors hover:bg-[#0046df] bg-[#0051FF]'
          >
            Continue
          </button>
        </form>
      </section>
    </main>
  )
}

export default Wallet