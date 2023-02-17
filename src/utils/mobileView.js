import Bowser from 'bowser'
import MobileView from 'mobile-view'

export default async function() {
  const browser = Bowser.getParser(window.navigator.userAgent)
  const isValidBrowser = browser.satisfies({
    mobile: true
  })
  if (isValidBrowser) {
    return
  }
  
  MobileView({
    message: 'IQToken Mobile Demo',
    tips: 'IQToken',
    logo: 'https://iqtoken.vercel.app/img/logo-01.c8004a5a.png'
  })
}