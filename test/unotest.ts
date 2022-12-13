import type { CSSObject, Rule } from 'unocss'

function cssObjectify(cssObj: CSSObject) {
  let result = ''
  for (const key in cssObj) {
    if (cssObj[key]) {
      result += key
      result += ': '
      result += cssObj[key]
      result += ';\n'
    }
  }
  return result
}

export function unoTest(rule: Rule, target: string) {
  if (typeof rule[0] === 'string') {
    if (target === rule[0]) {
      return cssObjectify(rule[1] as CSSObject)
    }
  }
  else {
    const matchs = target.match(rule[0])
    if (matchs) {
      const fun = rule[1] as (matchs: RegExpMatchArray) => CSSObject
      return cssObjectify(fun(matchs))
    }
  }
}