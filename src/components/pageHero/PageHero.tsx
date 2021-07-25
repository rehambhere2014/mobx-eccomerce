import React from 'react';
import { Link } from 'react-router-dom';
import { LinkItem, Wrapper } from './pageHero.style';
import { useTranslation, initReactI18next } from "react-i18next";
import i18next from 'i18next';

const PageHero: React.FC<{ product?: string, title: string }> = ({ product, title }) => {
  const { t, i18n } = useTranslation();
  return (
    <main>
      <Wrapper>
        <div className="section-center">
          <h3>
            <LinkItem to="/">{t('home')}</LinkItem>/{t(title)}

          </h3>
        </div>
      </Wrapper>
    </main>


  )
}

export default PageHero