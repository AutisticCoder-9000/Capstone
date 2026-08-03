interface CheckoutValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pin: string;
}

export type ValidationErrors = Partial<Record<keyof CheckoutValues, string>>;

const EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export function validateCheckout(values: CheckoutValues): ValidationErrors {
  const errors: ValidationErrors = {};
  if (!values.name.trim()) errors.name = 'Enter the recipient name.';
  if (!EMAIL_PATTERN.test(values.email)) errors.email = 'Enter a valid email address.';
  if (!/^\d{10}$/.test(values.phone)) errors.phone = 'Enter a valid 10-digit mobile number.';
  if (values.address.trim().length < 8) errors.address = 'Enter a complete delivery address.';
  if (!values.city.trim()) errors.city = 'Enter a city.';
  if (!/^\d{6}$/.test(values.pin)) errors.pin = 'Enter a valid 6-digit PIN code.';
  return errors;
}
