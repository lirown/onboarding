import { svg, html } from './base';
import { urlForName } from '../services/router';

/**
 * Creating a the ninja logo
 * @return {HTMLElement}
 */
export function Logo() {
  return html`<a class="logo" href="${urlForName('home')}"
    >${svg`
<svg width="102" height="33" viewBox="0 0 102 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.294 24.328L67.29 23.184L68.236 14.208L63.11 12.184L56.048 12.91L55.894 11.062L63.44 10.314L70.436 12.932L69.138 24.79L60.624 26.198L60.294 24.328ZM57.192 13.746H59.194L59.634 26.484H57.632L57.192 13.746ZM73.055 18.102L74.925 17.816L75.937 24.746L79.897 24.636L80.293 16.606L72.835 16.738L72.857 15L82.273 14.846L81.679 26.308L74.331 26.55L73.055 18.102ZM85.2014 10.226H87.7754V12.778H85.2014V10.226ZM81.9894 30.554L85.5094 27.738V14.78H87.4454V28.442L83.0894 31.962L81.9894 30.554ZM90.5218 18.102L92.3918 17.816L93.4038 24.746L97.3638 24.636L97.7598 16.606L90.3018 16.738L90.3238 15L99.7398 14.846L99.1458 26.308L91.7978 26.55L90.5218 18.102Z" fill="white"/>
<path d="M60.294 24.328L60.2133 23.8346C60.0813 23.8561 59.9635 23.9297 59.8862 24.0387C59.8088 24.1477 59.7783 24.2832 59.8016 24.4149L60.294 24.328ZM67.29 23.184L67.3707 23.6774C67.593 23.6411 67.7636 23.4605 67.7872 23.2364L67.29 23.184ZM68.236 14.208L68.7332 14.2604C68.7568 14.0371 68.6285 13.8254 68.4196 13.7429L68.236 14.208ZM63.11 12.184L63.2936 11.7189C63.2191 11.6895 63.1385 11.6784 63.0588 11.6866L63.11 12.184ZM56.048 12.91L55.5497 12.9515C55.5608 13.0853 55.6254 13.209 55.7287 13.2948C55.832 13.3805 55.9655 13.4211 56.0991 13.4074L56.048 12.91ZM55.894 11.062L55.8446 10.5644C55.5729 10.5914 55.373 10.8314 55.3957 11.1035L55.894 11.062ZM63.44 10.314L63.6152 9.84571C63.5436 9.81891 63.4668 9.80889 63.3906 9.81644L63.44 10.314ZM70.436 12.932L70.933 12.9864C70.9579 12.7591 70.8254 12.5439 70.6112 12.4637L70.436 12.932ZM69.138 24.79L69.2195 25.2833C69.4408 25.2467 69.6106 25.0673 69.635 24.8444L69.138 24.79ZM60.624 26.198L60.1316 26.2849C60.1792 26.5548 60.4352 26.736 60.7055 26.6913L60.624 26.198ZM57.192 13.746V13.246C57.0564 13.246 56.9266 13.3011 56.8324 13.3986C56.7381 13.4961 56.6876 13.6277 56.6923 13.7633L57.192 13.746ZM59.194 13.746L59.6937 13.7287C59.6844 13.4595 59.4634 13.246 59.194 13.246V13.746ZM59.634 26.484V26.984C59.7696 26.984 59.8994 26.9289 59.9936 26.8314C60.0878 26.7339 60.1384 26.6023 60.1337 26.4667L59.634 26.484ZM57.632 26.484L57.1323 26.5013C57.1416 26.7705 57.3625 26.984 57.632 26.984V26.484ZM60.3747 24.8214L67.3707 23.6774L67.2093 22.6906L60.2133 23.8346L60.3747 24.8214ZM67.7872 23.2364L68.7332 14.2604L67.7387 14.1556L66.7927 23.1316L67.7872 23.2364ZM68.4196 13.7429L63.2936 11.7189L62.9263 12.6491L68.0523 14.6731L68.4196 13.7429ZM63.0588 11.6866L55.9968 12.4126L56.0991 13.4074L63.1611 12.6814L63.0588 11.6866ZM56.5462 12.8685L56.3922 11.0205L55.3957 11.1035L55.5497 12.9515L56.5462 12.8685ZM55.9433 11.5596L63.4893 10.8116L63.3906 9.81644L55.8446 10.5644L55.9433 11.5596ZM63.2647 10.7823L70.2607 13.4003L70.6112 12.4637L63.6152 9.84571L63.2647 10.7823ZM69.9389 12.8776L68.6409 24.7356L69.635 24.8444L70.933 12.9864L69.9389 12.8776ZM69.0564 24.2967L60.5424 25.7047L60.7055 26.6913L69.2195 25.2833L69.0564 24.2967ZM61.1164 26.1111L60.7864 24.2411L59.8016 24.4149L60.1316 26.2849L61.1164 26.1111ZM57.192 14.246H59.194V13.246H57.192V14.246ZM58.6943 13.7633L59.1343 26.5013L60.1337 26.4667L59.6937 13.7287L58.6943 13.7633ZM59.634 25.984H57.632V26.984H59.634V25.984ZM58.1317 26.4667L57.6917 13.7287L56.6923 13.7633L57.1323 26.5013L58.1317 26.4667ZM73.055 18.102L72.9794 17.6077C72.7068 17.6494 72.5194 17.904 72.5606 18.1767L73.055 18.102ZM74.925 17.816L75.4198 17.7437C75.4005 17.612 75.3295 17.4933 75.2224 17.4141C75.1153 17.3348 74.9811 17.3016 74.8494 17.3217L74.925 17.816ZM75.937 24.746L75.4422 24.8182C75.4789 25.0691 75.6975 25.2528 75.9509 25.2458L75.937 24.746ZM79.897 24.636L79.9109 25.1358C80.172 25.1286 80.3835 24.9215 80.3964 24.6606L79.897 24.636ZM80.293 16.606L80.7924 16.6306C80.7992 16.4924 80.7484 16.3575 80.6521 16.2581C80.5558 16.1587 80.4225 16.1036 80.2842 16.1061L80.293 16.606ZM72.835 16.738L72.335 16.7317C72.3333 16.8669 72.3865 16.9971 72.4823 17.0924C72.5782 17.1878 72.7086 17.2403 72.8438 17.2379L72.835 16.738ZM72.857 15L72.8488 14.5001C72.5784 14.5045 72.3605 14.7232 72.357 14.9937L72.857 15ZM82.273 14.846L82.7723 14.8719C82.7795 14.7335 82.729 14.5984 82.6328 14.4988C82.5366 14.3991 82.4033 14.3438 82.2648 14.3461L82.273 14.846ZM81.679 26.308L81.6955 26.8077C81.9551 26.7992 82.1649 26.5933 82.1783 26.3339L81.679 26.308ZM74.331 26.55L73.8366 26.6247C73.8745 26.8754 74.094 27.0581 74.3475 27.0497L74.331 26.55ZM73.1306 18.5963L75.0006 18.3103L74.8494 17.3217L72.9794 17.6077L73.1306 18.5963ZM74.4302 17.8882L75.4422 24.8182L76.4318 24.6737L75.4198 17.7437L74.4302 17.8882ZM75.9509 25.2458L79.9109 25.1358L79.8831 24.1362L75.9231 24.2462L75.9509 25.2458ZM80.3964 24.6606L80.7924 16.6306L79.7936 16.5814L79.3976 24.6114L80.3964 24.6606ZM80.2842 16.1061L72.8262 16.2381L72.8438 17.2379L80.3018 17.1059L80.2842 16.1061ZM73.335 16.7443L73.357 15.0063L72.357 14.9937L72.335 16.7317L73.335 16.7443ZM72.8652 15.4999L82.2812 15.3459L82.2648 14.3461L72.8488 14.5001L72.8652 15.4999ZM81.7737 14.8201L81.1797 26.2821L82.1783 26.3339L82.7723 14.8719L81.7737 14.8201ZM81.6625 25.8083L74.3145 26.0503L74.3475 27.0497L81.6955 26.8077L81.6625 25.8083ZM74.8254 26.4753L73.5494 18.0273L72.5606 18.1767L73.8366 26.6247L74.8254 26.4753ZM85.2014 10.226V9.726C84.9253 9.726 84.7014 9.94986 84.7014 10.226H85.2014ZM87.7754 10.226H88.2754C88.2754 9.94986 88.0515 9.726 87.7754 9.726V10.226ZM87.7754 12.778V13.278C88.0515 13.278 88.2754 13.0541 88.2754 12.778H87.7754ZM85.2014 12.778H84.7014C84.7014 13.0541 84.9253 13.278 85.2014 13.278V12.778ZM81.9894 30.554L81.6771 30.1636C81.4632 30.3347 81.4268 30.646 81.5954 30.8618L81.9894 30.554ZM85.5094 27.738L85.8218 28.1284C85.9404 28.0335 86.0094 27.8899 86.0094 27.738H85.5094ZM85.5094 14.78V14.28C85.2333 14.28 85.0094 14.5039 85.0094 14.78H85.5094ZM87.4454 14.78H87.9454C87.9454 14.5039 87.7215 14.28 87.4454 14.28V14.78ZM87.4454 28.442L87.7597 28.8309C87.8771 28.736 87.9454 28.593 87.9454 28.442H87.4454ZM83.0894 31.962L82.6954 32.2698C82.7779 32.3754 82.8994 32.4435 83.0325 32.4588C83.1657 32.474 83.2994 32.4351 83.4037 32.3509L83.0894 31.962ZM85.2014 10.726H87.7754V9.726H85.2014V10.726ZM87.2754 10.226V12.778H88.2754V10.226H87.2754ZM87.7754 12.278H85.2014V13.278H87.7754V12.278ZM85.7014 12.778V10.226H84.7014V12.778H85.7014ZM82.3018 30.9444L85.8218 28.1284L85.1971 27.3476L81.6771 30.1636L82.3018 30.9444ZM86.0094 27.738V14.78H85.0094V27.738H86.0094ZM85.5094 15.28H87.4454V14.28H85.5094V15.28ZM86.9454 14.78V28.442H87.9454V14.78H86.9454ZM87.1311 28.0531L82.7751 31.5731L83.4037 32.3509L87.7597 28.8309L87.1311 28.0531ZM83.4834 31.6542L82.3834 30.2462L81.5954 30.8618L82.6954 32.2698L83.4834 31.6542ZM90.5218 18.102L90.4462 17.6077C90.1736 17.6494 89.9862 17.904 90.0274 18.1767L90.5218 18.102ZM92.3918 17.816L92.8865 17.7437C92.8673 17.612 92.7963 17.4933 92.6892 17.4141C92.5821 17.3348 92.4479 17.3016 92.3162 17.3217L92.3918 17.816ZM93.4038 24.746L92.909 24.8182C92.9457 25.0691 93.1643 25.2528 93.4177 25.2458L93.4038 24.746ZM97.3638 24.636L97.3777 25.1358C97.6388 25.1286 97.8503 24.9215 97.8632 24.6606L97.3638 24.636ZM97.7598 16.606L98.2592 16.6306C98.266 16.4924 98.2152 16.3575 98.1189 16.2581C98.0226 16.1587 97.8893 16.1036 97.7509 16.1061L97.7598 16.606ZM90.3018 16.738L89.8018 16.7317C89.8001 16.8669 89.8533 16.9971 89.9491 17.0924C90.045 17.1878 90.1754 17.2403 90.3106 17.2379L90.3018 16.738ZM90.3238 15L90.3156 14.5001C90.0452 14.5045 89.8273 14.7232 89.8238 14.9937L90.3238 15ZM99.7398 14.846L100.239 14.8719C100.246 14.7335 100.196 14.5984 100.1 14.4988C100.003 14.3991 99.8701 14.3438 99.7316 14.3461L99.7398 14.846ZM99.1458 26.308L99.1623 26.8077C99.4219 26.7992 99.6317 26.5933 99.6451 26.3339L99.1458 26.308ZM91.7978 26.55L91.3034 26.6247C91.3413 26.8754 91.5608 27.0581 91.8143 27.0497L91.7978 26.55ZM90.5974 18.5963L92.4674 18.3103L92.3162 17.3217L90.4462 17.6077L90.5974 18.5963ZM91.897 17.8882L92.909 24.8182L93.8985 24.6737L92.8865 17.7437L91.897 17.8882ZM93.4177 25.2458L97.3777 25.1358L97.3499 24.1362L93.3899 24.2462L93.4177 25.2458ZM97.8632 24.6606L98.2592 16.6306L97.2604 16.5814L96.8644 24.6114L97.8632 24.6606ZM97.7509 16.1061L90.2929 16.2381L90.3106 17.2379L97.7686 17.1059L97.7509 16.1061ZM90.8018 16.7443L90.8238 15.0063L89.8238 14.9937L89.8018 16.7317L90.8018 16.7443ZM90.332 15.4999L99.748 15.3459L99.7316 14.3461L90.3156 14.5001L90.332 15.4999ZM99.2405 14.8201L98.6465 26.2821L99.6451 26.3339L100.239 14.8719L99.2405 14.8201ZM99.1293 25.8083L91.7813 26.0503L91.8143 27.0497L99.1623 26.8077L99.1293 25.8083ZM92.2922 26.4753L91.0162 18.0273L90.0274 18.1767L91.3034 26.6247L92.2922 26.4753Z" fill="white"/>
<path d="M9.99096 7.72964C11.191 8.52964 11.1576 10.063 10.991 10.7296C10.3243 10.7296 8.49096 10.4296 6.49096 9.22964C3.99096 7.72964 3.99096 5.22964 4.99096 6.22964C5.99096 7.22964 8.49096 6.72964 9.99096 7.72964Z" fill="#00BA7F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.866 31C30.3218 31 36.366 24.9558 36.366 17.5C36.366 10.0442 30.3218 4 22.866 4C17.8855 4 13.535 6.697 11.1951 10.7102C10.8945 10.0199 10.2672 9.18045 9.18392 9.02898C8.30905 8.90664 7.37424 9.21301 6.49122 9.5024C5.57221 9.80359 4.7093 10.0864 4.02848 9.84836C2.6935 9.38165 3.77883 11.6338 6.68215 11.8997C8.44202 12.0609 9.89138 11.7982 10.7517 11.5355C9.86445 13.3341 9.36598 15.3588 9.36598 17.5C9.36598 24.9558 15.4101 31 22.866 31Z" fill="#00D894"/>
<path d="M10 18.7751C10 15.24 13.3326 12.6531 16.7572 13.5298L19.8817 14.3297C21.5995 14.7695 23.4005 14.7695 25.1183 14.3297L28.2428 13.5298C31.6674 12.6531 35 15.24 35 18.7751C35 22.2936 32.4636 25.2996 28.9953 25.8915L24.6029 26.6411C23.211 26.8787 21.789 26.8787 20.3971 26.6411L16.0047 25.8915C12.5364 25.2996 10 22.2936 10 18.7751Z" fill="white"/>
<rect width="2" height="11.9986" rx="1" transform="matrix(-0.00237127 -0.999997 -0.999997 0.00237127 47.7319 26)" fill="white"/>
<rect width="1.38663" height="5.05457" rx="0.693315" transform="matrix(0.862928 -0.505328 0.698438 0.715671 15.3853 19.3826)" fill="#1E283D"/>
<rect width="1.37876" height="5.16064" rx="0.689382" transform="matrix(-0.85121 -0.524826 0.716642 -0.697442 16.5645 20.3228)" fill="#1E283D"/>
<rect width="1.38663" height="5.05457" rx="0.693315" transform="matrix(-0.862928 0.505328 -0.698437 -0.715671 29.2437 19.6174)" fill="#1E283D"/>
<rect width="1.37876" height="5.16064" rx="0.689382" transform="matrix(0.85121 0.524826 -0.716642 0.697441 28.0645 18.6772)" fill="#1E283D"/>
<rect width="2" height="12" rx="1" transform="matrix(-0.866025 0.5 0.5 0.866025 1.73193 13)" fill="white"/>
<path d="M15.3837 14.9892C15.2541 14.5947 14.8261 14.3755 14.4529 14.5577C13.6418 14.9538 12.9369 15.5454 12.4045 16.2839C11.7249 17.2267 11.3614 18.3606 11.3663 19.5228C11.3711 20.685 11.7439 21.8158 12.4313 22.7529C12.9697 23.487 13.6795 24.0727 14.4939 24.4621C14.8685 24.6412 15.2947 24.4184 15.4211 24.0229C15.5475 23.6274 15.3243 23.2102 14.9594 23.0121C14.4442 22.7324 13.9941 22.3412 13.6438 21.8636C13.1443 21.1826 12.8734 20.361 12.8699 19.5165C12.8664 18.6721 13.1305 17.8482 13.6243 17.1632C13.9707 16.6827 14.4176 16.2878 14.9304 16.0038C15.2937 15.8027 15.5134 15.3837 15.3837 14.9892Z" fill="#1E283D"/>
<path d="M29.1026 24.1141C29.2059 24.4999 29.6051 24.7332 29.9739 24.5801C30.8168 24.2304 31.5631 23.6749 32.1418 22.9596C32.8729 22.0562 33.2989 20.9443 33.3589 19.7837C33.4188 18.623 33.1096 17.4732 32.4755 16.4992C31.9735 15.7282 31.2884 15.0987 30.4861 14.664C30.1349 14.4738 29.7138 14.6647 29.5713 15.0378C29.4287 15.4109 29.6203 15.8237 29.9621 16.0302C30.4825 16.3445 30.9283 16.7736 31.2634 17.2883C31.7308 18.0062 31.9587 18.8536 31.9145 19.7091C31.8703 20.5645 31.5563 21.384 31.0175 22.0499C30.6312 22.5273 30.1436 22.9082 29.5936 23.1673C29.2322 23.3374 28.9992 23.7283 29.1026 24.1141Z" fill="#1E283D"/>
<
  `}</a
  >`;
}
