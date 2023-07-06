import React from 'react';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const [t] = useTranslation();

  return (
    <div>
     <div className='privacy'>
      <h2>{t('Welcome to Our Privacy Policy')}</h2>
     </div>
      <div className='description'>
       <div className='c-containers'>
        <div className='c-rectangle'>
         <div>
         <h5>{t('Introduction :')}</h5>
         <p>{t("Our Privacy Policy will help you understand what information we collect at Postgait and how Postgait uses it.Reference to the company in this Privacy Policy is inclusive of 'we', 'our' or 'us', and at all times refers to Postgait, the Company which provides the Services. When we talk about 'Services' in this Privacy Policy, we are referring to our online platform, for providing Secondment Services. Our Services are currently available for use via a web  owser or applications specific to your desktop or mobile device.")}</p>
         </div>
         <div>
          <h5>{t('Information we collect and receive :')}</h5>
          <p>{t('Customer Data :')}
          {t('privacyPolicy.section.InformationWeCollectAndReceive.list1.paragraphText')}
          {t('Other Information :')}
          {t('The Company may also collect and receive the following information :')}   
         <br />{t('●  Account Creation Information :')}
          {t('Users provide information such as an e-mail address and password to create and account.')}
         <br />{t('●  Billing and other Information :')}
          {t('Our Corporate affiliates and our third-party payment processors may collect and store billing address and credit/debit card information, or online/net banking information on our behalf or we may do this ourself.')}
         <br />{t('●  Usage Information :')}
          {t('This is information about how you are accessing and using the Services, which may include administrative and support communications with us and information about people, content, links you interact with and what third party integrations you use (if any).')}
         <br />{t('●  Contact Information :')}
          {t('With your permission contact information is collected, when you use/visit the Mobile App or web  owser.')}
         <br />{t('● Log Data : Our servers automatically record information, including information that your owser sends whenever you visit a website or your mobile app sends whenever you are using it. This log data may include without limitation your internet protocol address, Your owser type and settings, the date and time of your use, information about your  owser configuration and plug- ins, language preferences, and cookie data.')}
         <br />{t('●  Device Information : We may collect information about the device you are using, including what type of device it is, what operating system you are using, device settings, application IDs, unique device identifiers, and crash data. Whether we collect some or all of thisinformation often depends on what type of device you are using and its settings.')}
         <br />{t('●  Geo-location information : Precise GPS location from mobile devices is collected only with your permission. Wi-Fi and IP addresses received from your  owser or device may be used to determine approximate location. Integrations : If you integrate with a third-party service provider, we will integrate that service to ours. The third-party provider may share certain information about your account with the company. However, we do not receive or store your passwords for any of these third-party providers.')}
         <br />{t('●  Third party data : the company may receive information from affiliates in our corporate group, our partners, or others that we use to make our own information better or more useful. This might be aggregate level information, including without limitation assimilation of specific IP addresses with specific zip codes.')}
          </p>
         </div>
         <div>
          <h5>{t('Our Cookie Policy :')}</h5>
          <p>{t('The company used cookies and similar technologies to record log data. We use both session based and persistent cookies. Cookies are small text files sent by us to your computer and from your computer or mobile device to us each time you visit our website or use our application. They are unique to your account or your  owser. Session based cookies last only while your  owser is open and are automatically deleted when you close your  owser. Persistent cookies last until you or your  owser delete them or until they expire. Some cookies are associates with your account and personal information in order to remember that you are logged in. Other cookies are not tied to your account but are unique and allow us to carry our site/application analytics and customization among other similar things.The company sets and accesses our own cookies on the domains operated by the company and its corporate affiliates. We do not currently recognize or respond to  owser initiated do not track signals due to lack of consistence in industry standard compliance.')}</p>
         </div>
         <div>
          <h5>{t('How We Use Your Information :')}</h5>
          <p>{t('Customer Data : the company may access and use Customer Data as reasonably necessary and in accordance with Customer s instructions')}
         <br />{t('●  to prevent or address Services, security, technical issues or at a Customer s request in connection with customer support matters')}
         <br />{t('●  as required by law;')}
         <br />{t('●  as set forth in our contract with the Customer or as expressly permitted in writing by the Customer.')}
          {t('Other information : We use other kinds of information')}
         <br />{t('●  To understand and improve our Services;')}
         <br />{t('●  To communicate with you by Responding to your requests. If you contact us with a problem or question, we will use your information to respond. Sending e-mails and messages. We may send you Services related and administrative e-mails and messages. We may also contact you to inform you about changes in our Services, our Services offerings, and important services related notices, including without limitation security and fraud notices. These e-mails and messages are considered part of the Services you may not opt of them. In addition, we sometimes send e-mails about new Services features, or other news about the company. You may opt out of these at any time.')}
          {('Billing and Account Management : ')} 
          {t('We use account data to administer accounts and keep track of billing and payments.')}
          {t('Communicating and marketing :')}  
          {t('We often need to contact you for invoicing, account management and similar reasons. We may also use your contact information for our own marketing or advertising purposes. You may opt out these at any time.')}
          {t('Investigation and Prevention of abuse and fraud : ')}
          {t('The company is committed to keep the information provided by you secure and also prevent abuse and fraud. This policy is not intended to place any limitation on what we do with data that is aggregated and/or de-identified so it is no longer associated with identifiable user or Customer of the Services.')}
          
          </p>
         </div>
         <div>
          <h5>{t('Sharing & Disclosure :')}</h5>
          <p>{t('There are times when information described in this Privacy Policy may be shared by the company. This section describes only how the company may share such information. the company does not control how Customers, or their third parties choose to share and disclose Customer Data.')}
          {t('Customer Data : ')}  
          {t('the company may share Customer Data:')}
         <br />{t('●  With Third Party Service Providers and Agents. We may engage third party companies and individuals to process Customer Data.')}
         <br />{t('●  With affiliates. We may engage affiliates in our corporate group to process Customer Data.')}
         <br />{t('●  With third party integrations. the company may act on our Customer s behalf share Customer Data with the provider of an integration added by Customer or the company. The company is not responsible for how the provider of an integration may collect use, and share Customer Data.')}
          {t('Other Information :  ')}
          {t('The company may share other information as follows:')}
          {t('About you. There may be times when you contact the company to help resolve an issue specific to a governmental or official or legal process. In order to help resolve the issue we may share your information with the concerned government or official body.')}
         <br />{t('●  With third party service providers and agents. We may engage third party companies or individuals, such as third-party payment processors, to process information on our behalf.')}
         <br />{t('●  With affiliates. We may engage affiliates in our corporate group to process Other Information.')}
          {t('Other Types of Disclosure : ')} 
          {t('The company may share or disclose Customer Data and Other information as follows:')}
         <br />{t('●  During changes to our business structure: If we engage in a merger, acquisition, bankruptcy, dissolution, reorganization, sale of some of the company s assets, financing acquisition or of all or a portion of our business, a similar transaction or proceeding or steps in contemplation of these activities.')}
         <br />{t('●  Statutory Compliance : To comply with legal or regulatory requirements and to respond to lawful requests, court orders or legal processes.')}
         <br />{t('●  To enforce our rights to prevent fraud and for safety : To protect and defend the rights, property, or safety of us or third parties, including enforcing contracts or policies, or in connection with investigating and preventing fraud.')}
          {t('The company may disclose or use aggregate or de-identified information for any purpose, it deems appropriate.')}
          </p>
         </div>
         <div>
          <h5>{t('Security :')}</h5>
          <p>{t('The company is serious about its security, and takes various steps to protect information you provide to us, from loss, misuse and unauthorized access or disclosure. These steps take into account the sensitivity of the information we collect, process and store, and the current state of technology.')}
          {t('No Warranty:')}
          {t('You understand that the company does not provide any warranty, guarantee or representation of any kind concerning our ability to control, collect, correct, access, process, use, store, protect or transfer any personal information or concerning the existence or effectiveness of any security measures undertaken by Us. You agree that the company will not be liable for any claims, losses, or damages of any kind whatsoever which may result from the access, disclosure, use or modification by any party not authorized or authorized by us or the introduction of malware (including without limitation of viruses and worms) or other harmful elements to the system and their possible effects on personal information contained on the website or the Mobile App. By accessing the website or the Mobile App you acknowledge and understand to assume these risks.')}
          </p>
         </div>
         <div>
          <h5>{t('Limitation of Liability :')}</h5>
          <p>
          {t('In no event will the company, its affiliates, partners and their respective employees, officers, directors or insurers be liable to you or to any other person for any costs, damages (including any personal, exemplary, incidental, special, indirect or consequential damages) or liability of any nature, arising or resulting from the collection, use, transfer, processing or storage of personal information obtained by Us and resulting from your access to and use of the Services through a Web  owser or a Mobile App.')}
          </p>
         </div>
         <div>
          <h5>{t('Changes to this Privacy Policy :')}</h5>
          <p>
          {t('We may change this policy from time to time, and which may be updated on our website or application at our discretion. If you continue to use the Services after those changes are in effect, you agree to the revised changes.')}
          </p>
         </div>
         <div>
          <h5>{t('Contact The Company :')}</h5>
          <p>
          {t('Please feel free to contact us, if you have any questions about the companys Privacy Policy or practices. You may contact us at support@postgait.com.')}
          </p>
         </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Privacy;