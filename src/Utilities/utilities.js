// export const loadDynamicScript = (key, src) => {
//     var promise = new Promise(async (resolve, reject) => {
//         let id = `script_${key}`;
//         const existingScript = document.getElementById(id);

//         if (!existingScript) {
//             const script = document.createElement('script');
//             script.id = id;
//             script.src = src;
//             document.body.appendChild(script);

//             script.onload = () => {
//                 resolve();
//             };
//         }
//         else {
//             resolve();
//         }
//     });

//     return promise;
// };

// export const loadDynamicStyle = (key, href) => {
//     var promise = new Promise(async (resolve, reject) => {
//         let id = `link_${key}`;
//         const existingScript = document.getElementById(id);

//         if (!existingScript) {
//             const link = document.createElement('link');
            
//             link.id = id;
//             link.href = href;
//             link.rel = 'stylesheet';

//             document.body.appendChild(link);

//             link.onload = () => {
//                 resolve();
//             };
//         }
//         else {
//             resolve();
//         }
//     });

//     return promise;
// };

// export const getRandomID = () => {
//     return Math.round(Math.random() * 999999) * -1;
// };

// export const toPrice = (value) => {
//     return value && value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// };