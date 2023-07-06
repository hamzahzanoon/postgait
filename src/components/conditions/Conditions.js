import React from 'react';
import { useTranslation } from 'react-i18next';

const Conditions = () => {
  const [t] = useTranslation();

  return (
    <div>
     <div className='rectangle'>
      <h2>{t('Welcome to Our Terms and Conditions')} </h2>
     </div>
      <div className='description'>
       <div className='c-containers'>
        <div className='c-rectangle'>
         <div>
         <h5>{t('Introduction :')}</h5>
         <p>{t('Welcome to Postgait website, these terms and conditions shall be applicable on the website including all it s sections. By using our website, you agree to be bound by these terms and conditions. If you do not agree to the terms and conditions, you must not use the website. It is worth noting that Postgait website reserves the right to amend, change or update the terms and conditions of the website at any time we deem fit, and these changes become effective when posted on the website without prior notice. Therefore, kindly review these terms and conditions regularly to monitor their change. Your continued visit and use of the Website after these terms and conditions have been posted means that you agree to the changes. You are entitled to use and benefit from Postgait website, after accepting the terms and conditions governing your access and use of the content and services offered to you on this website. The visitor shall observe and abide by the terms and conditions of our services. You shall be deemed to have agreed to be bound by the Terms and Conditions once you have clicked and used Postgait website. This introduction is an integral part of these terms and conditions. As part of our commitment to making Postgait a place you will want to visit frequently, we welcome all of your comments on any of the policies or rules we list below.')}</p>
         </div>
         <div>
          <h5>{t('Definitions :')}</h5>
          <p>{t('Postgait website that provides information and services')}</p>
         </div>
         <div>
          <h5>{t('Our Services :')}</h5>
          <p>{t('All services and transactions that we provide through our website.')}</p>
         </div>
         <div>
          <h5>{t('Store :')}</h5>
          <p>{t('All the products we offer through our website.')}</p>
         </div>
         <div>
          <h5>{t('Terms and Conditions Applicable by Postgait :')}</h5>
          <p>{t('It means the terms and conditions for any service or product, which may be subject to modification or change from time to time.')}</p>
         </div>
         <div>
          <h5>{t('User information :')}</h5>
          <p>{t('It means the personal details you provide to us through the Postgait website')}</p>
         </div>
         <div>
          <h5>{t('Users:')}</h5>
          <p>{t('It means the users of the Postgait website in general.')}</p>
         </div>
         <div>
          <h5>{t('Content :')}</h5>
          <p>{t('It means any reviews, comments, messages, data, information, text, image, code or other material posted or displayed on Postgait website directly.')}</p>
         </div>
         <div>
          <h5>{t('Website use :')}</h5>
          <p>{t('Anyone can enter the site and use the site, but only those who have reached the age of 18 are entitled to purchase any of the services or purchase from the store, and those under 18 can purchase under the supervision of a parent or legal guardian. We grant you a non-transferable and revocable license from the Site in accordance with the said terms and conditions. Commercial use and use of the Site on behalf of third parties is prohibited, except for uses that we expressly and previously license. Any breach of these Terms and Conditions will result in the immediate termination of the above-mentioned license without notice.')}</p>
         
          <p>{t('You must acknowledge that you use the site as stipulated in the following conditions : ')}<br />
           {t('●  You will not copy, download, reproduce, republish, in any way whatsoever, any of the materials provided by Postgait except for your personal, non-commercial home use only.')} <br />
           {t('●  You will abide by the specific rules that apply to any promotion you participate in, in any way through Postgait website.')} <br />
           {t('●  You undertake not to do anything that would affect the operation or security of Postgait website or cause undue annoyance, abuse or disruption to any other users or our employees.')} <br />
           {t('●  Use an automated process to process, monitor, copy or extract any pages on Postgait, or any information, content or data contained therein, without our prior written consent.')} <br />
           {t('●  Use an automated process to aggregate or combine information, content or data contained in or accessible by Postgait with information, material or data accessed from a third party.')}<br />
           {t('●  Take any action that imposes an unreasonable or disproportionately large load on the available infrastructure or the bandwidth of Postgait website.')} <br />
           {t('●  Not to copy, reproduce, alter, modify, derive works from, or publicly display, any portion of Postgait Content without our prior written consent.')} <br />
           {t('●  Use our website in any way that is unlawful, fraudulent, or harmful or in connection with any unlawful or fraudulent purpose or activity.')}<br />
           {t('●  It is strictly forbidden to use bots, spiders, crawlers, and other programs or to access the rules through other unauthorized programs, and the use of programs to collect and harvest mail addresses or e-mail addresses from the site is strictly prohibited.')}</p>
         </div>
         <div>
          <h5>{t("WTermination :")}</h5>
          <p>{t('We may, without prior notice, immediately terminate the Terms and Conditions or cancel any or all of the rights granted to you under the Terms and Conditions. Upon any termination of this Agreement, you must cease accessing and using the Site. We can also immediately cancel all passwords and account identity granted to you and may prevent you from accessing and using the Site in whole or in part. The termination of this Agreement shall not affect the rights and obligations (such as payment obligations) of either party that were made prior to the date of termination. You also agree that the site shall not be liable to you or to any other person as a result of any termination or discontinuance. If you are dissatisfied with the Site or with any of the terms, conditions, rules, policies and guidelines, your sole and exclusive remedy is to discontinue using it.')}</p>
         </div>
         <div>
          <h5>{t('Notes :')}</h5>
          <p>{t('● Anything you post on the Site, such as questions, comments and suggestions, will become our exclusive property and you will not take it back.')}<br />
             {t('● When you comment or give your opinion on the Site you also give us the right to use the name you provide in connection with the comments or other content. You should not use a false e-mail address, impersonate someone other than yourself, or mislead us.When you purchase services or purchase from the store on the step-by-step website, you agree to all the previous terms in this agreement, as well as you are considered to agree to the terms of purchase and retrieval from our website, and you also agree to the terms and conditions of each service or product that you purchase.')}<br />
             {t('● In the event that you decide to purchase any product or service from our services, you must read the purchase and return agreement on our website in detail before completing the purchase process.These terms are subject to constant change and development, and subscribers should review these policies periodically. If you notice any vague part or an error in the details of this policy, please alert us, and we thank all those who alerted us to previous errors.')}</p>
         </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Conditions