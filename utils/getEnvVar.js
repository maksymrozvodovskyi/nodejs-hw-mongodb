import dotenv from 'dotenv';

dotenv.config();

export function getEnvVar(name, defaulValue) {
  const value = procces.env[name];

  if (value) return value;
  if (defaulValue) return defaulValue;

  throw new Error(`Missing: process.env['${name}']`);
}
