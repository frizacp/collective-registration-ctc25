import Image from 'next/image';

export default function Header() {
  return (
    <div>
      <div className='bg-red-600 text-white text-center py-2 text-sm font-semibold'>
        PENDAFTARAN DI BUKA 10 NOVEMBER 2025 | 19.30 WIB
      </div>

      <div
        className='bg-cover bg-center text-white'
        style={{
          backgroundImage: "url('/images/long_banner2.jpg')",
        }}
      >
        <div className='text-white'>
          <div className='container mx-auto items-center justify-between py-4 px-6 grid grid-cols-3 gap-4 '>
            <div className='flex items-center space-x-4 '>
              <a href='https://ctcultra.com/'>
                <Image
                  src='/images/CTC_LOGO.webp'
                  alt='Coast to Coast Ultra Logo'
                  width={120}
                  height={50}
                />
              </a>
            </div>

            <div className='flex space-x-6 text-sm font-medium  justify-center'>
              <a href='https://ctcultra.com/' className='hover:text-red-500'>
                HOME
              </a>
              <a
                href='https://pickmyrace.id/events/coast-to-coast-ultra-2024/'
                className='hover:text-red-500'
              >
                RESULT
              </a>
              <a href='https://ctcultra.com/' className='hover:text-red-500'>
                CTC ULTRA 2025
              </a>
              <a href='https://ctcultra.com/' className='hover:text-red-500'>
                CATEGORY
              </a>
            </div>

            <div className='flex items-center justify-end space-x-7'>
              <a
                href='https://tias.co.id/event/coast-to-coast-night-trail-ultra-2025'
                className='bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition'
              >
                REGISTRATION
              </a>
              <a href='https://www.instagram.com/ctc.ultra'>
                <Image
                  src='/images/icon_ig.png'
                  alt='Instagram'
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>

        <div
          className='relative h-[100px] bg-cover bg-center'
          style={{
            backgroundImage: "url('/images/header.jpg')",
          }}
        >
          <div className='absolute inset-0  flex items-center justify-center'>
            <h1 className='text-white text-4xl md:text-3xl font-bold'>
              Collective Registration
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
