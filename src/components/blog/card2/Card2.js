import React from 'react';
import './Card2.css';
import { useTranslation } from 'react-i18next';

const Cards2 = () => {
  const [t] = useTranslation();

  return (
    <div className='container'>
     <div>
      <div>
       <div className='c-cards-img'>
        <p>{t('Why Do Traders Sell Their Products Through Online Stores?')}</p>
       </div>
       <div className='cards-Path'>
        <p>{t('Why Do Traders Sell Their Products Through Online Stores?')}</p>
        <div>
         <span><i class="fa-regular fa-eye"></i> 1745 </span>
         <span><i class="fa-solid fa-thumbs-up"></i> 4 </span>
         <span><i class="fa-solid fa-thumbs-down"></i> 0 </span>
        </div>
       </div>
      </div>
      <div className='Everyone'>
       <div>
        <p>{t('Everyone Knows The Importance Of Trade As A Primary Source Of Income, As It Has A Large And Important Role In Achieving Growth, Economic Progress, And Development, In Addition To Providing Job Opportunities For Manpower And Reducing The Unemployment Rate In Countries. If The Technological Development Increases, Industrialization Increases In The Industrial And Agricultural Fields And Commercial Operations Increase And Thus This Positively Affects The Increase In The Size Of The Economy Of The State And Its Opening To All Global Regions.')}</p>
       </div>
       <div>
        <h6>{t('Why Do Traders Sell Their Products Through Online Stores?')}</h6>
        <p>{t('Recently, After The Spread Of The Internet All Over The World And The Emergence Of Smart Devices, Many Business Owners And Merchants Relied On Marketing Their Products And Services Via The Internet, Due To The Availability Of A Large Base Of Buyers That Can Be Targeted And Reached Faster Through It.As For Buyers, Buying Online Is Better For Them, Because It Gives Them More Opportunities To Search For Various Products, Compare Prices, See The Opinions Of Other Buyers And Then Choose The Most Suitable For Their Needs. The Process Of Selling, Buying And Marketing Products Takes Place Online Through Electronic Stores, So What Are Electronic Stores, And What Is Their Importance To You As A Trader Who Owns A Business Or A Beginner In The World Of Commerce?<br />The Online Store Is A Site Used To Display The Various Services And Products Of All Kinds Offered By The Merchant And The Buyer Can Browse And Order Them Directly From The Site To His Door Through The Shipping Company Provided By The Store. The Store Provides You With The Ability To Pay Online Or Upon Receipt.')} </p>
        <div className="Products">
         <h6>{t('As For The Importance Of Stores To You As A Beginner In The World Of Commerce, Or You Want To Expand Your Business, They Offer You Many Advantages Such As:')}</h6>
          <p>{t('● Marketing Products And Services Faster With The Best Results.')}</p>
          <p>{t('● Saving The Costs Of Rents And Workers And Greater Independence.')}</p>
          <p>{t('● Obtaining Customer Opinions And Communicating With Them Easily.')}</p>
          <p>{t('● The Ability To Add A Variety Of Services And Products.')}</p>
          <p>{t('● Get Additional Income By Achieving More Sales.')}</p>
          <p>{t('● Permanent Presence In Front Of Your Customers.')}</p>
          <p>{t('● Faster Spread Of Your Business And Access To The Largest Number Of Customers From All Over The World.')}</p>
        </div> 
        <div>
         <p>{t('If You Are A Merchant And You Seek To Compete With The Big Traders, You Should Give Up The Hesitation And Start Building Your Online Store Now, Because The Number Of Online Buyers Is Increasing Tremendously, So You Can Imagine How Prosperous The Future Of Your Business Will Be.The Question That Comes To Mind Now Is How Can You Own An Online Store? Do Not Worry, The MYCN Platform Will Help You To Build And Fully Equip Your Online Store, And It Also Offers You A Store With Professional Features, A Distinctive And Simple Design For Ease Of Use, And To Make Dealing With Your Store Attractive To Customers.To Get The Store, Visit The Website Link, Then Register And Subscribe To The Merchant Package, Or Directly Contact The Technical Support Team, Who In Turn Will Provide You With All Assistance In Answering All Your Inquiries.')}</p>
        </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Cards2
