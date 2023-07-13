import { FC, useState } from "react";

export const PaywallNotice: FC<{ userId: string }> = ({ userId }) => {
  const [hasClickedBuy, setHasClickedBuy] = useState(false);

  const handleClickBuy = () => {
    setHasClickedBuy(true);
  };

  const paymentLink = "https://buy.stripe.com/test_abcdefghijkl21347890";

  return (
    <>
      <h2>🧱🧱🧱🧱 Paywall 🧱🧱🧱🧱</h2>

      <p>
        This app has advanced features that are only available for paying users.
      </p>
      <a
        href={`${paymentLink}?client_reference_id=${userId}&utm_source=miro-app-panel`}
        target="_blank"
        className={"button button-primary"}
        onClick={handleClickBuy}
      >
        Buy ($5 once)
      </a>

      {hasClickedBuy && (
        <div>
          <hr />
          <p>Done? Click the button below to validate your payment.</p>
          <button
            type="button"
            className="button button-primary"
            onClick={() => window.location.reload()}
          >
            I've paid!
          </button>
        </div>
      )}
    </>
  );
};
