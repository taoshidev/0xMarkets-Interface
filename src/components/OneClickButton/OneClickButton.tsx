import "./OneClickButton.scss";

import SettingsIcon24 from "img/ic_settings_24.svg?react";

export function OneClickButton({ openSettings }: { openSettings: () => void }) {
  return (
    <div className="OneClickButton bg-slate-800" onClick={openSettings}>
      <SettingsIcon24 size={16} className="OneClickButton-icon" />
    </div>
  );
}
