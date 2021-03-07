/**
 * Converts a key value pair object into a string.
 *
 * @example { "key": "value" }
 * @returns `key=value`
 */
function stringify(object: { [key: string]: string }): string {
  let result = '';
  for (const [key, value] of Object.entries(object)) {
    if (!key) continue;
    const line = `${key}=${String(value)}`;
    result += line + '\n';
  }
  return result;
}

export { stringify };
