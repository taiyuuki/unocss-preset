export function joinReg(...args: string[]) {
  return new RegExp(args.join(''))
}