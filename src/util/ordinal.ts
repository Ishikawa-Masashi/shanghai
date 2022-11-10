const english_ordinal_rules = new Intl.PluralRules('en', { type: 'ordinal' });
const suffixes = {
  zero: '',
  one: 'st',
  two: 'nd',
  few: 'rd',
  other: 'th',
  many: 'th',
};

export function ordinal(n: number) {
  const suffix = suffixes[english_ordinal_rules.select(n)];
  return n + suffix;
}
