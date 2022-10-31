import { WHITELIST_DOMAIN } from "../untilities/constants";
export const corsOptions = {
  origin: function (origin, callback) {
    if (WHITELIST_DOMAIN.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error(`${origin}not allowed by CORS`))
    }
  },
  optionsSuccessStatus: 200
}