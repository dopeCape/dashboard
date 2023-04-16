import React from "react";
import "./UpgradeCard.css";

function UpgradCard() {
  return (
    <div className="main__card">
      <div className="p__small">Your free trial is</div>

      <div className="p__small">about to end in</div>

      <div className="p__Large">10 days.</div>

      <div className="p_xsmall">
        You will not be billed during your free trial
      </div>

      <div className="p_xsmall">
        To keep your projects running after the trial end, upgrade to a paid
        option.
      </div>
      <button className="upgrade__card">Upgrade</button>
    </div>
  );
}

export default UpgradCard; 
