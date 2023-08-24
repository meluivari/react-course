import { useState } from "react";
import { fieldSettings, UserForm, UserFormKeys } from "../utils/forms";

export function Form() {
  const [formData, setFormData] = useState<Partial<UserForm>>({
    name: "",
    email: "",
    country: undefined,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="flex flex-col gap-4">
        {Object.keys(fieldSettings).map((it: UserFormKeys) => {
          const field = fieldSettings[it];
          return (
            <input
              key={it}
              onChange={(e) =>
                setFormData({ ...formData, [it]: e.target.value })
              }
              required={field.required}
              placeholder={field.label}
              value={formData[it]}
            />
          );
        })}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
