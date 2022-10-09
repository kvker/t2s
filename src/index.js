export default function templateToString(template, params) {
  const keys = Object.keys(params);
  const values = Object.values(params);
  return new Function(...keys, `return \`${template}\``)(...values)
}