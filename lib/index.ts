declare var require: any;
import { sha256Digest } from './bichlmeier-sha256';

/**
 * @param {string} message
 * @return {string} In hex format
 */
export function sha256Plus(message: string) {
  if (typeof message !== 'string') {
    console.log(message);
    throw new Error('sha256Plus only accepts inputs of type string');
  }
  const hash1 = sha256Digest(message);
  const hash2 = sha256Digest(hash1 + message);
  return hash2;
}
