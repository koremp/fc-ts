// todo : fix this

export function get(key: any) {
  return (obj: any) => obj[key];
}

// todo : fix this

export function equal(key: string, value: any) {
  return (obj: any) => obj[key] === value;
}
