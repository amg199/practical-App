import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>forvern was born in passion to delbhcjbs b v  habhdvax avhba bxagvxv xvag axv ahgxvavx hagv  xgac xvaxga xhagc xgag v ha cgav a x a vcxaxbva xhgvc sc agvcab chavcg ashcbvahgc ab chagvcga chvchgnb cascva cvahb cyagvca ch ah cac havca ch vchg va chava chahcvah chgavchgav cacha cha vc gavxha cgavc acv a chavca vchavhc vac havcavchgavca xhvac a vcha vchav</p>
        <p>hbhgsdv hsvd hvshvdhsv dgvs hv sgc schgsacxvsbvs hx sbc hzvc hs chschsv cgs vch sgcv shcvhsg cbsvchgsvchvs ch scn scvbsc bs cjbzs nz nb chsvcnb jchg scbs sncshbcs cbsbc sn jsbcjhsbc zsbnc svc cjsc scjsbnsb cjhbc vaschbjcbjascb asbcjhs chsvchvacvah vcvcv jhxab b xvHAvcbsc n cgha  hagvahvhab sc n cghas nc anchg ahvsc hacb ashc vacvabshc hagc hgacva scv ashc va cahcvhacv avcja</p>
        <b className='text-gray-800'>OUR MISSION</b>
        <p>Our mission is t make vevery customer to puschase the product and get nay develirty status accotnn bsb dn s nbs dsb n bdhsb bvsh nbcvhd cbs vhcgsv  bcs vc cbsvcs c bsv bs chsvcb dhv shvb jxdb jhdbv sdbv jb sdhvb sjdbv hjsdbvb dbv sd shbdvhjbsd jvhsdhbv jhsdbvjsdb jv djhbvhdbvdb vjdbvb dvhb dhbv jhdbvhjdb vjbdv kj djvbdkjv jdbvjsdbv jbsd vhbsd vhbs dvbsd vb sdjbv jsb jszb cjsb c bs cs </p>


        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>We d sdnsdn bsbd jsdbsjdh bjhb dbjh db dh bc vhj vhjsc bbchs cvh vc s cgvs cg svgc vsg vsgv bs cvs hcs chgs vc vshc bs cvs csv chvs bcsvc sch scbs c s cs chs cjs c sjbc sbchjsb bs cbs cshc scsbc sc snbc bs cbsjhcjvsd jhv s hvbshvb sdhbvshd vb sdjvjh sdhv hsbv jhs jhschs c jshc shc jsvc shs</p>


        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convience</b>
          <p className='text-gray-600'>We d sdnsdn bsbd jsdbsjdh bjhb dbjh db dh bc vhj vhjsc bbchs cvh vc s cgvs cg svgc vsg vsgv bs cvs hcs chgs vc vshc bs cvs csv chvs bcsvc sch scbs c s cs chs cjs c sjbc sbchjsb bs cbs cshc scsbc sc snbc bs cbsjhcjvsd jhv s hvbshvb sdhbvshd vb sdjvjh sdhv hsbv jhs jhschs c jshc shc jsvc shs</p>


        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>We d sdnsdn bsbd jsdbsjdh bjhb dbjh db dh bc vhj vhjsc bbchs cvh vc s cgvs cg svgc vsg vsgv bs cvs hcs chgs vc vshc bs cvs csv chvs bcsvc sch scbs c s cs chs cjs c sjbc sbchjsb bs cbs cshc scsbc sc snbc bs cbsjhcjvsd jhv s hvbshvb sdhbvshd vb sdjvjh sdhv hsbv jhs jhschs c jshc shc jsvc shs</p>


        </div>

      </div>
      <NewsletterBox/>
      
      
    </div>
  )
}

export default About
