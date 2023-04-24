import PocketBase from "./pocketbase-js-sdk/pocketbase.es.mjs";
export { host }

/* for production */
const host = new PocketBase('https://petite-match.pockethost.io');


/* for development
const host = new PocketBase( 'http://127.0.0.1:8090' )
 */