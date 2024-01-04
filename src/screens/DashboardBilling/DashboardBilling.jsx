import React from "react";
import { ButtonSmall } from "../../components/ButtonSmall";
import { ButtonTallFlexible } from "../../components/ButtonTallFlexible";
import { CardBilling } from "../../components/CardBilling";
import { Date } from "../../components/Date";
import { FooterPrimary } from "../../components/FooterPrimary";
import { IconApps } from "../../components/IconApps";
import { IconArrowDown } from "../../components/IconArrowDown";
import { IconBasket } from "../../components/IconBasket";
import { IconCircleWrapper } from "../../components/IconCircleWrapper";
import { IconClipboard } from "../../components/IconClipboard";
import { IconCubeScan } from "../../components/IconCubeScan";
import { IconDashboard } from "../../components/IconDashboard";
import { IconPxCircle } from "../../components/IconPxCircle";
import { IconReceipt } from "../../components/IconReceipt";
import { IconSettings } from "../../components/IconSettings";
import { IconTextBox } from "../../components/IconTextBox";
import { Logo } from "../../components/Logo";
import { MenuButton } from "../../components/MenuButton";
import { MenuButtonPrimary } from "../../components/MenuButtonPrimary";
import { MenuSearch } from "../../components/MenuSearch";
import { ProfilePicture } from "../../components/ProfilePicture";
import { RowBillingInfo } from "../../components/RowBillingInfo";
import { RowInvoice } from "../../components/RowInvoice";
import { RowPaymentMethod } from "../../components/RowPaymentMethod";
import { RowTransaction } from "../../components/RowTransaction";
import { SectionCreditcard } from "../../components/SectionCreditcard";
import { TabSettings } from "../../components/TabSettings";
import { Icon16PxAccount } from "../../icons/Icon16PxAccount";
import { Icon16PxDelete3 } from "../../icons/Icon16PxDelete3";
import { Icon16PxHomeBreadcrumbs } from "../../icons/Icon16PxHomeBreadcrumbs";
import { Icon16PxMenu1 } from "../../icons/Icon16PxMenu1";
import { Icon16PxNotification1 } from "../../icons/Icon16PxNotification1";
import { Icon16PxPanoramaVariant } from "../../icons/Icon16PxPanoramaVariant";
import { Icon16PxPencil } from "../../icons/Icon16PxPencil";
import { Icon24PxWallet1 } from "../../icons/Icon24PxWallet1";
import { Icon8PxArrowDown13 } from "../../icons/Icon8PxArrowDown13";
import { Icon8PxArrowDown17 } from "../../icons/Icon8PxArrowDown17";
import { LogoMastercard1 } from "../../icons/LogoMastercard1";
import { LogoVisa } from "../../icons/LogoVisa";

export const DashboardBilling = () => {
  return (
    <div className="bg-[#f0f2f5] flex flex-row justify-center w-full">
      <div className="bg-linearbackground overflow-hidden w-[1600px] h-[1283px] relative">
        <SectionCreditcard
          className="!absolute !left-[298px] !top-[205px]"
          icon={<LogoMastercard1 className="!absolute !w-[42px] !h-[33px] !top-[177px] !left-[357px]" />}
          overlapGroupClassName="bg-[url(https://c.animaapp.com/1ri1sOFK/img/mask-group@2x.png)]"
        />
        <FooterPrimary
          className="!absolute !left-[322px] !w-[1230px] !top-[3365px]"
          sideLinksClassName="!left-[923px]"
        />
        <div className="absolute w-[1255px] h-[42px] top-[40px] left-[311px]">
          <div className="absolute w-[205px] h-[41px] top-0 left-0">
            <div className="top-[19px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[16px] tracking-[0] leading-[22.4px] whitespace-nowrap absolute left-0">
              Billing
            </div>
            <div className="inline-flex items-start gap-[7px] absolute top-0 left-0">
              <Icon16PxHomeBreadcrumbs className="!relative !w-[16px] !h-[16px]" color="#7B809A" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-lineargrey text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
                /&nbsp;&nbsp;Pages&nbsp;&nbsp;/
              </div>
              <p className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
                <span className="text-[#7b809a]">Account&nbsp;&nbsp; /</span>
                <span className="text-[#344767]">&nbsp;&nbsp;Blling</span>
              </p>
            </div>
          </div>
          <Icon16PxMenu1 className="!absolute !w-[16px] !h-[16px] !top-[17px] !left-[252px]" />
          <div className="absolute w-[173px] h-[42px] top-0 left-[957px] rounded-[8px] border border-solid border-lineargrey">
            <div className="absolute top-[9px] left-[14px] [font-family:'Roboto',Helvetica] font-normal text-lineargrey text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
              Search here
            </div>
            <MenuSearch className="!absolute !-left-px !-top-px" status="default" />
          </div>
          <Icon16PxAccount className="!absolute !w-[16px] !h-[16px] !top-[13px] !left-[1147px]" />
          <IconSettings className="!absolute !left-[1187px] !top-[13px]" />
          <div className="absolute w-[36px] h-[23px] top-[6px] left-[1219px]">
            <Icon16PxNotification1 className="!absolute !w-[16px] !h-[16px] !top-[7px] !left-0" />
            <div className="inline-flex flex-col items-start gap-[10px] px-[8px] py-[2px] absolute top-0 left-[8px] bg-linearred rounded-[19px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-linearwhite text-[10px] tracking-[0] leading-[14.0px] whitespace-nowrap">
                11
              </div>
            </div>
          </div>
        </div>
        <TabSettings className="!absolute !left-[295px] !top-[131px]" />
        <CardBilling className="!absolute !left-[732px] !top-[205px]" lineClassName="!top-[164px]" />
        <CardBilling
          className="!absolute !left-[951px] !top-[205px]"
          icon={<Icon24PxWallet1 className="!absolute !w-[24px] !h-[24px] !top-[20px] !left-[20px]" color="white" />}
          lineClassName="!top-[164px]"
          text="Freelance Payment"
          text1="PayPal"
          text2="$455"
        />
        <div className="absolute w-[412px] h-[412px] top-[205px] left-[1166px]">
          <div className="relative w-[410px] h-[412px] bg-linearwhite rounded-[12px] shadow-drop-shadow-black">
            <ButtonSmall
              className="!border-linearred !absolute !left-[309px] !top-[16px]"
              divClassName="!text-linearred"
              status="default"
              text="VIEW ALL"
            />
            <div className="absolute top-[22px] left-[16px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[16px] text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
              Invoices
            </div>
            <RowInvoice className="!absolute !left-[16px] !top-[74px]" />
            <RowInvoice
              className="!absolute !left-[16px] !top-[139px]"
              text="February, 10, 2021"
              text1="#RV-126749"
              text2="$250"
            />
            <RowInvoice
              className="!absolute !left-[16px] !top-[204px]"
              text="April, 05, 2020"
              text1="#FB-212562"
              text2="$560"
            />
            <RowInvoice
              className="!absolute !left-[16px] !top-[269px]"
              text="June, 25, 2019"
              text1="#QW-103578"
              text2="$120"
            />
            <RowInvoice
              className="!absolute !left-[16px] !top-[334px]"
              text="March, 01, 2020"
              text1="#AR-803481"
              text2="$300"
            />
          </div>
        </div>
        <div className="absolute w-[846px] h-[164px] top-[453px] left-[298px]">
          <div className="relative w-[844px] h-[164px] bg-linearwhite rounded-[12px] shadow-drop-shadow-black">
            <div className="absolute top-[25px] left-[16px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[16px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Payment Method
            </div>
            <RowPaymentMethod
              className="!absolute !left-[16px] !top-[72px]"
              logoMastercard2Color="#E91F63"
              logoMastercard2Fill="#FB8C00"
            />
            <RowPaymentMethod
              className="!absolute !left-[434px] !top-[72px]"
              icon={<LogoVisa className="!absolute !w-[32px] !h-[25px] !top-[24px] !left-[25px]" />}
              text="5248"
            />
            <ButtonTallFlexible className="!absolute !left-[665px] !top-[15px]" status="default" text="ADD NEW CARD" />
          </div>
        </div>
        <div className="absolute w-[738px] h-[584px] top-[641px] left-[298px]">
          <div className="relative w-[736px] h-[584px] bg-linearwhite rounded-[12px] shadow-drop-shadow-black">
            <div className="absolute top-[26px] left-[15px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[16px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Billing Information
            </div>
            <RowBillingInfo
              buttonExtrasmallIcon={<Icon16PxPencil className="!relative !w-[16px] !h-[16px]" color="#344767" />}
              className="!absolute !left-[16px] !top-[74px]"
            />
            <RowBillingInfo
              buttonExtrasmallIcon={<Icon16PxPencil className="!relative !w-[16px] !h-[16px]" color="#344767" />}
              className="!absolute !left-[16px] !top-[245px]"
              override={<Icon16PxDelete3 className="!relative !w-[16px] !h-[16px]" color="#F44334" />}
              text="Lucas Harper"
              text1="Stone Tech Zone"
              text2="lucas@stone-tech.com"
            />
            <RowBillingInfo
              buttonExtrasmallIcon={<Icon16PxPencil className="!relative !w-[16px] !h-[16px]" color="#344767" />}
              className="!absolute !left-[16px] !top-[416px]"
              override={<Icon16PxDelete3 className="!relative !w-[16px] !h-[16px]" color="#F44334" />}
              text="Ethan James"
              text1="Fiber Notion"
              text2="ethan@fiber.com"
            />
          </div>
        </div>
        <div className="absolute w-[524px] h-[584px] top-[641px] left-[1058px]">
          <div className="relative w-[518px] h-[584px] bg-linearwhite rounded-[12px] shadow-drop-shadow-black">
            <div className="absolute top-[26px] left-[15px] [font-family:'Roboto',Helvetica] font-bold text-lineardark-blue text-[16px] tracking-[0] leading-[22.4px] whitespace-nowrap">
              Your Transaction’s
            </div>
            <div className="absolute top-[72px] left-[15px] [font-family:'Roboto',Helvetica] font-bold text-lineargrey text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
              NEWEST
            </div>
            <div className="absolute top-[247px] left-[15px] [font-family:'Roboto',Helvetica] font-bold text-lineargrey text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
              YESTERDAY
            </div>
            <Date className="!absolute !left-[356px] !top-[27px]" />
            <RowTransaction
              className="!absolute !left-[16px] !top-[113px]"
              iconCircleIcon8PxArrowDown17Color="#E91F63"
            />
            <RowTransaction
              className="!absolute !left-[16px] !top-[177px]"
              override={
                <IconPxCircle
                  className="!border-lineargreen !absolute !left-0 !top-[3px]"
                  icon8PxArrowDown13Color="#4CAF50"
                />
              }
              text="Apple"
              text1="+ $ 2,000"
              text2="27 March 2020, at 04:30 AM"
              valueClassName="!text-lineargreen"
            />
            <RowTransaction
              className="!absolute !left-[16px] !top-[288px]"
              override={
                <IconPxCircle
                  className="!border-lineargreen !absolute !left-0 !top-[3px]"
                  icon8PxArrowDown13Color="#4CAF50"
                />
              }
              text="Stripe"
              text1="+ $ 750"
              text2="26 March 2020, at 13:45 PM"
              valueClassName="!text-lineargreen"
            />
            <RowTransaction
              className="!absolute !left-[16px] !top-[352px]"
              override={
                <IconPxCircle
                  className="!border-lineargreen !absolute !left-0 !top-[3px]"
                  icon8PxArrowDown13Color="#4CAF50"
                />
              }
              text="HubSpot"
              text1="+ $ 1,000"
              text2="26 March 2020, at 12:30 PM"
              valueClassName="!text-lineargreen"
            />
            <RowTransaction
              className="!absolute !left-[16px] !top-[416px]"
              override={
                <IconPxCircle
                  className="!border-lineargreen !absolute !left-0 !top-[3px]"
                  icon8PxArrowDown13Color="#4CAF50"
                />
              }
              text="Creative Tim"
              text1="+ $ 2,500"
              text2="26 March 2020, at 08:30 AM"
              valueClassName="!text-lineargreen"
            />
            <RowTransaction
              className="!absolute !left-[16px] !top-[480px]"
              override={
                <IconCircleWrapper
                  className="!border-lineardark-blue !absolute !left-0 !top-[3px]"
                  divClassName="!text-lineardark-blue"
                />
              }
              text="Webflow"
              text1="Pending"
              text2="26 March 2020, at 05:00 AM"
              valueClassName="!text-lineardark-blue"
            />
          </div>
        </div>
        <div className="inline-flex flex-col items-start gap-[16px] p-[16px] absolute top-[16px] left-[17px] rounded-[12px] [background:linear-gradient(180deg,rgb(62,61,69)_0%,rgb(32,32,32)_100%)]">
          <Logo
            className="!w-[203.59px]"
            img="https://c.animaapp.com/1ri1sOFK/img/vector-2.svg"
            overlapGroupClassName="bg-[url(https://c.animaapp.com/1ri1sOFK/img/vector-4.svg)]"
            vector="https://c.animaapp.com/1ri1sOFK/img/vector-3.svg"
            vector1="https://c.animaapp.com/1ri1sOFK/img/vector-1.svg"
          />
          <img
            className="relative w-[218px] h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/1ri1sOFK/img/line-8.svg"
          />
          <div className="w-[217.56px] relative h-[48px]">
            <div className="absolute top-[13px] left-[57px] [font-family:'Roboto',Helvetica] font-light text-linearwhite text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
              Brooklyn Alice
            </div>
            <div className="absolute w-[32px] h-[32px] top-[8px] left-[15px]">
              <IconDashboard
                className="!absolute !left-[6px] !top-[8px]"
                divClassName="!bg-linearwhite"
                divClassNameOverride="!bg-linearwhite"
                rectangleClassName="!bg-linearwhite"
                rectangleClassNameOverride="!bg-linearwhite"
              />
              <ProfilePicture profilePicture="https://c.animaapp.com/1ri1sOFK/img/profile-picture.svg" />
            </div>
            <Icon8PxArrowDown17 className="!w-[9px] !top-[22px] !left-[193px] !absolute !h-[8px]" color="white" />
          </div>
          <img
            className="relative w-[218px] h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/1ri1sOFK/img/line-8.svg"
          />
          <div className="flex flex-col w-[218px] items-start gap-[11px] relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
              <MenuButtonPrimary status="selected" />
              <MenuButton className="!rounded-[unset]" status="not-selected" text="Analytics" />
              <MenuButton className="!rounded-[unset]" status="not-selected" text="Discover" text1="D" />
              <MenuButton className="!rounded-[unset]" status="not-selected" text="Sales" text1="S" />
              <MenuButton className="!rounded-[unset]" status="not-selected" text="Automotive" text1="A" />
              <MenuButton className="!rounded-[unset]" status="not-selected" text="Smart Home" text1="S" />
            </div>
            <div className="relative w-fit [font-family:'Roboto',Helvetica] font-bold text-linearwhite text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
              PAGES
            </div>
            <div className="gap-[4px] inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="gap-[10px] inline-flex flex-col items-start relative flex-[0_0_auto]">
                <MenuButtonPrimary
                  className="!bg-lineardark-mud"
                  override={
                    <Icon16PxPanoramaVariant className="!absolute !w-[16px] !h-[16px] !top-[16px] !left-[21px]" />
                  }
                  status="selected"
                  text="Pages"
                />
                <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                  <div className="relative w-[218px] h-[48px]">
                    <div className="absolute top-[13px] left-[57px] [font-family:'Roboto',Helvetica] font-normal text-linearwhite text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
                      Profile
                    </div>
                    <div className="absolute w-[20px] top-[13px] left-[21px] [font-family:'Roboto',Helvetica] font-normal text-linearwhite text-[14px] text-center tracking-[0] leading-[19.6px]">
                      A
                    </div>
                    <Icon8PxArrowDown17
                      className="!w-[9px] !top-[22px] !left-[194px] !absolute !h-[8px]"
                      color="white"
                    />
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                  <div className="relative w-[218px] h-[48px]">
                    <div className="absolute top-[13px] left-[57px] [font-family:'Roboto',Helvetica] font-normal text-linearwhite text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
                      Users
                    </div>
                    <div className="absolute w-[20px] top-[13px] left-[21px] [font-family:'Roboto',Helvetica] font-normal text-linearwhite text-[14px] text-center tracking-[0] leading-[19.6px]">
                      U
                    </div>
                    <Icon8PxArrowDown17
                      className="!w-[9px] !top-[22px] !left-[194px] !absolute !h-[8px]"
                      color="white"
                    />
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                  <div className="bg-lineardark-mud relative w-[218px] h-[48px] rounded-[4px]">
                    <div className="absolute top-[13px] left-[57px] [font-family:'Roboto',Helvetica] font-normal text-linearwhite text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
                      Account
                    </div>
                    <div className="absolute w-[20px] top-[13px] left-[21px] [font-family:'Roboto',Helvetica] font-normal text-linearwhite text-[14px] text-center tracking-[0] leading-[19.6px]">
                      A
                    </div>
                    <Icon8PxArrowDown13
                      className="!w-[9px] !top-[19px] !left-[193px] !absolute !h-[8px]"
                      color="white"
                    />
                  </div>
                  <MenuButton className="!rounded-[unset]" status="not-selected" text="Settings" text1="S" />
                  <MenuButton status="selected" text="Billing" text1="B" />
                  <MenuButton className="!rounded-[unset]" status="not-selected" text="Invoice" text1="I" />
                  <MenuButton className="!rounded-[unset]" status="not-selected" text="Security" text1="S" />
                </div>
                <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                  <div className="relative w-[218px] h-[48px]">
                    <div className="absolute top-[13px] left-[57px] [font-family:'Roboto',Helvetica] font-normal text-linearwhite text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
                      Projects
                    </div>
                    <div className="absolute w-[20px] top-[13px] left-[21px] [font-family:'Roboto',Helvetica] font-normal text-linearwhite text-[14px] text-center tracking-[0] leading-[19.6px]">
                      P
                    </div>
                    <Icon8PxArrowDown17
                      className="!w-[9px] !top-[22px] !left-[194px] !absolute !h-[8px]"
                      color="white"
                    />
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                  <div className="relative w-[218px] h-[48px]">
                    <div className="absolute top-[13px] left-[57px] [font-family:'Roboto',Helvetica] font-normal text-linearwhite text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
                      Virtual Reality
                    </div>
                    <div className="absolute w-[20px] top-[13px] left-[21px] [font-family:'Roboto',Helvetica] font-normal text-linearwhite text-[14px] text-center tracking-[0] leading-[19.6px]">
                      P
                    </div>
                    <Icon8PxArrowDown17
                      className="!w-[9px] !top-[22px] !left-[194px] !absolute !h-[8px]"
                      color="white"
                    />
                  </div>
                </div>
                <MenuButton className="!rounded-[unset]" status="not-selected" text="Pricing Page" text1="P" />
                <MenuButton className="!rounded-[unset]" status="not-selected" text="RTL" text1="R" />
                <MenuButton className="!rounded-[unset]" status="not-selected" text="Widgets" text1="W" />
                <MenuButton className="!rounded-[unset]" status="not-selected" text="Charts" text1="C" />
                <MenuButton className="!rounded-[unset]" status="not-selected" text="Sweet Alerts" text1="S" />
                <MenuButton className="!rounded-[unset]" status="not-selected" text="Notifications" text1="N" />
              </div>
              <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                <MenuButtonPrimary
                  className="!rounded-[unset]"
                  icon={<IconArrowDown />}
                  override={<IconApps />}
                  status="not-selected"
                  text="Applications"
                />
              </div>
              <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                <MenuButtonPrimary
                  className="!rounded-[unset]"
                  icon={<IconArrowDown />}
                  override={<IconBasket />}
                  status="not-selected"
                  text="Ecommerce"
                />
              </div>
              <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                <MenuButtonPrimary
                  className="!rounded-[unset]"
                  icon={<IconArrowDown />}
                  override={<IconClipboard />}
                  status="not-selected"
                  text="Authentication"
                />
              </div>
            </div>
            <img
              className="mt-[-20593.00px] mr-[-2624.00px] relative w-[218px] h-px object-cover"
              alt="Line"
              src="https://c.animaapp.com/1ri1sOFK/img/icon-16px-apps@2x.png"
            />
            <div className="relative w-fit [font-family:'Roboto',Helvetica] font-bold text-linearwhite text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
              DOCS
            </div>
            <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                <MenuButtonPrimary
                  className="!rounded-[unset]"
                  icon={<IconArrowDown />}
                  override={<IconTextBox />}
                  status="not-selected"
                  text="Basic"
                />
              </div>
              <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                <MenuButtonPrimary
                  className="!rounded-[unset]"
                  icon={<IconArrowDown />}
                  override={<IconCubeScan />}
                  status="not-selected"
                  text="Components"
                />
              </div>
              <div className="relative w-[218px] h-[48px]">
                <div className="absolute top-[13px] left-[57px] [font-family:'Roboto',Helvetica] font-normal text-linearwhite text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
                  Changelog
                </div>
                <IconReceipt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
