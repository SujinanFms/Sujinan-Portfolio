import { Switch } from "antd";
import React from "react";
import { useLocale } from "../../../context/LocaleContext";

const SwitchLanguage = () => {
  const { locale, toggleLocale } = useLocale();
  return (
    <div>
      <Switch
        checked={locale === "en"}
        onChange={toggleLocale}
        checkedChildren="EN"
        unCheckedChildren="TH"
      />
    </div>
  );
};

export default SwitchLanguage;
