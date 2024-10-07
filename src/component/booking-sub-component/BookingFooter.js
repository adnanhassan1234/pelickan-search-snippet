import React from "react";

function BookingFooter({
  newsletter,
  handlenewsletter,
  privacy,
  errors,
  handlePrivacy,
}) {
  return (
    <div className="booking__form__footer">
      <div>
        <input
          type="checkbox"
          name="newsletter"
          checked={newsletter}
          onChange={handlenewsletter}
        />
        <label>Subscribe to Newsletter and Offer</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="privacy"
          checked={privacy}
          onChange={handlePrivacy}
        />
        <label style={{ color: errors.privacy ? "red" : "white" }}>
          I accept the terms and conditions & privacy policy
        </label>
      </div>
    </div>
  );
}

export default BookingFooter;
