import React, { useEffect } from 'react'
import { useTranslation, initReactI18next } from "react-i18next";
import { useStore } from '../store/RootStore';
import cookies from "js-cookie"
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

const LangsComponents = () => {
  const { t, i18n } = useTranslation();

  let { langStore } = useStore();
  let { langs } = langStore;
  let currentLang = cookies.get('i18next') || 'en'
  let currentLangFinde = langs.find(l => l.code === currentLang)
  useEffect(() => {
    document.title = t('app_title');
    document.body.dir = currentLangFinde?.dir || 'ltr'
  }, [currentLangFinde, t])

  return (
    <div>
      {langs.map(item => {
        return (

          <button
            key={item.code}
            onClick={() => i18next.changeLanguage(item.code)} style={{ cursor: "pointer" }}>
            <span
              className={`flag-icon flag-icon-${item.countryCode} mx-2`}
              style={{ opacity: item.code === currentLangFinde?.code ? 0.5 : 1 }}
            ></span>
          </button>
        )


      })}

    </div>
  )
}


export default observer(LangsComponents)