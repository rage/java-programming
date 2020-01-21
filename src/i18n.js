import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import CourseSettings from "../course-settings"
import commonEN from "./locales/common/en"
import pointsBalloonEN from "./locales/pointsBalloon/en"
import userEN from "./locales/user/en"
import commonFI from "./locales/common/fi"
import pointsBalloonFI from "./locales/pointsBalloon/fi"
import userFI from "./locales/user/fi"

const resources = {
  en: {
    common: commonEN,
    "points-balloon": pointsBalloonEN,
    user: userEN,
  },
  fi: {
    common: commonFI,
    "points-balloon": pointsBalloonFI,
    user: userFI,
  },
}

i18n.use(initReactI18next).init({
  resources,
  ns: ["common", "user", "points-balloon"],
  defaultNS: "common",
  react: {
    wait: true,
  },
  lng: CourseSettings.default.language,
})

export default i18n
