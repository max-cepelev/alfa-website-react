import React from "react";

export default function Reserve({ title }: { title: string }) {
  return (
    <div className="reserve">
      <input id="b_1" className="reserve__input" type="checkbox" value="1" />
      <label htmlFor="b_1" className="reserve__label _icon-chek">
        {title}
      </label>
    </div>
  );
}
