import React from "react";
import logo from "@/assets/FinZuu_Logo-V2/finzuu-logo-icon.svg";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();
    return (
        <header className="flex flex-col items-center mb-2">
            <img src={logo} alt="logo finzuu" className="w-28 h-28 md:w-40 md:h-40" />
            
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-2 text-center transform -translate-y-3 md:-translate-y-5">
               {t("header.insights.title")}
            </h1>
            
            <div className="text-center px-4">
                <p className="mt-2 mb-2 text-sm md:text-base transform -translate-y-3 md:-translate-y-5">
                {t("header.insights")}<br />
                {t("header.insights1")}<br />
                {/*  <span>{t("header.visit")} </span>
                    <a
                        href="https://fintech4esg.com"
                        className="underline-none text-[#19af58] hover:text-primary font-semibold"
                        target="_blank"
                        rel="noopener noreferrer">
                        www.fintech4esg.com 
                    </a>
                    <span>  {t("header.visit1")}</span> */}
                </p>
            </div>
        </header>

    );
}