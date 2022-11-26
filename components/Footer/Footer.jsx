import React, { useEffect, useState } from 'react'
import FooterLogo from '../../assets/navbar-logo.svg';
import Image from 'next/image';
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Images from '../Image/Images';
import Fac from '../../assets/facebook.png';
import Youteb from '../../assets/youTube.png';
import Twwiter from '../../assets/twwiter.png'
import InstataGram from '../../assets/instagram.png'
import { NavbarList } from '../../utils/Constants';
import { FooterList } from "../../utils/Constants"

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

const list = ["facebook", "instagram", "twwitter", "youTube"];
function Footer() {
  const [imageList, setImageList] = useState([Fac, Youteb, Twwiter, InstataGram])

  const { t } = useTranslation("common");


  const [navTextList, setnavTextList] = useState(NavbarList)
  const [footOne, setFooteOne] = useState(FooterList)

  return (
    <footer className='bg-blue bg-opacity-20 pt-4 pb-3'>
      <div className="container mx-auto py-5">
        <span className='w-full flex items-center justify-center'>
          <Image src={FooterLogo} width='151' height='28' alt='navbar logo' />
        </span>

        <div className='flex items-start justify-between flex-wrap mt-10 pl-5'>
          <div className='col-span-6  justify-center items-center    mt-4'>
            <h2 className='font-bold mb-3 md:text-2xl text-base'>{t("About_Us")}</h2>
            <ul className='flex flex-col md:w-96  w-auto '>
              {
                navTextList.map((post, id) => (<li key={id} className='text-blueFix md:text-base text-xs'>
                  <a key={id} href={post.key}>{t(post.text)}</a>
                </li>))
              }
            </ul>

          </div>

          <div className='col-span-6  mt-4'>
            <h2 className='font-bold mb-3 text-sm md:text-2xl '>{t('Services')}</h2>
            <ul className='md:w-96  w-auto'>
              {
                footOne.map((pos, id) => <>
                  <li key={id} className='text-blueFix break-words w-auto md:text-base text-xs '>
                    <a key={id} className='sm:text-base break-words' href={pos.key}>
                      {t(pos.text)}
                    </a>
                  </li>
                </>)
              }

            </ul>
          </div>

          <div className='col-span-6 mt-4'>
            <h2 className='font-bold mb-3 text-sm md:text-2xl'>{t('Portfolio')}</h2>
            <ul>
              <li className='text-blueFix md:text-base text-sm'>
                <a href="">
                  {t('Barber_shop')}
                </a>
              </li>
              <li className='text-blueFix md:text-base text-xs'>
                <a href="">
                  {t('Landing_page')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <span className='flex w-full bg-blueFix  h-0.5 mt-9'></span>
        <div className='flex md:justify-between  md:items-center flex-wrap-reverse items-center justify-center'>
          <div className='col-span-6 mt-3'>
            <h3 className='text-blueFix text-center '>© 2022 “Iqro Agency” LTD. All rights reserved</h3>
          </div>
          <div className='col-span-6 mt-3'>
            <ul className='flex  items-center'>
              {
                imageList.map((img, index) => {
                  return <>
                    <li className='ml-1 cursor-pointer ' key={index}>
                      <Images key={index} url={img} />
                    </li>
                  </>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer;