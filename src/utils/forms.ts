export type UserForm = {
  name: string;
  email: string;
  country: string;
};

export type UserFormKeys = keyof UserForm; // 'name'|'email'|'age'

type FieldSettings = { required: boolean; label: string };

export const fieldSettings = {
  name: { required: true, label: "Name" },
  email: { required: true, label: "Email" },
  country: { required: true, label: "Country" },
} satisfies Record<UserFormKeys, FieldSettings>;
