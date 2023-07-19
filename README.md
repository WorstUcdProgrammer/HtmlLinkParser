# Html Link Parser

- an html parser that return all links within a page

## Installation

**CLI:**

```sh
npm install
```

## Usage

**CLI**

```bash
# Example with pacer.gov
$ node index.js
[
  'https://pacer.uscourts.gov/',
  '/themes/pacer/assets/img/favicons/apple-touch-icon.png',
  '/themes/pacer/assets/img/favicons/favicon-32x32.png',
  '/themes/pacer/assets/img/favicons/favicon-16x16.png',
  '/themes/pacer/assets/img/favicons/site.webmanifest',
  '/themes/pacer/assets/img/favicons/safari-pinned-tab.svg',
  '/themes/pacer/assets/img/favicons/favicon.ico',
  '/sites/default/files/css/css_dwHYH_R6tpPucON6y80zvqkjcRC5-1rTEUzV6B40GjE.css',
  '/sites/default/files/css/css_lDUFduUH2eVLtI8n3ZURQlr6BsBNiQXxpO_xbW-FbO4.css',
  '#main-content-jump',
  'https://pcl.uscourts.gov/pcl/index.jsf',
  'https://pacer.login.uscourts.gov/csologin/login.jsf',
  'https://pacer.psc.uscourts.gov/pscof/manage/maint.jsf',
  '/',
  '/register-account/pacer-case-search-only',
  '/register-account/attorney-filers-cmecf',
  '/register-account/non-attorney-filers-cmecf',
  '/register-account/group-billing',
  '/register-account',
  '/find-case/search-specific-court',
  '/find-case/search-national-index',
  '/find-case/court-opinions',
  '/find-case/phone-access-court-records',
  '/find-case',
  '/file-case/how-file-case',
  '/file-case/court-cmecf-lookup',
  '/file-case/get-ready-nextgen-cmecf',
  '/file-case/developer-resources',
  '/file-case',
  '/my-account-billing/manage-my-account-login',
  '/my-account-billing/billing',
  '/my-account-billing/forgot-username-or-password',
  '/my-account-billing/group-billing-access',
  '/my-account-billing',
  '/pacer-pricing-how-fees-work',
  '/help/pacer',
  '/help/cmecf',
  '/help/faqs',
  '/contact-us',
  '/help',
  '/find-a-case',
  '/node/247',
  '/node/13',
  'mailto:pacer@psc.uscourts.gov',
  'https://www.uscourts.gov/services-forms/fees/electronic-public-access-fee-schedule',
  '/my-account-billing/billing/options-access-records-if-you-cannot-afford-pacer-fees',
  '?page=0',
  '/announcements/2023/07/10/pacer-quarterly-announcements-july-2023',
  '/announcements/2023/05/18/update-your-account-user-type',
  '/announcements/2023/04/11/pacer-quarterly-announcements-april-2023',
  '/announcements',
  '#',
  '/about-us',
  '/policy-procedures',
  '/privacy',
  'https://www.uscourts.gov',
  'tel:(800) 676-6856'
]
```

## Reference

- [nodeJs](https://nodejs.org/en/docs)
- [npm](https://www.npmjs.com/)
- [axios](https://axios-http.com/docs/intro)
- [cheerio](https://cheerio.js.org/docs/api)

## License

Copyright (c) 2023, Yizeng Zhou. (MIT License)
