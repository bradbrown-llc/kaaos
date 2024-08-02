import { fromFileUrl } from 'https://deno.land/std@0.224.0/path/mod.ts'
import { compile } from "../../../../solc/lib/compile.ts";

const targetDir = fromFileUrl(import.meta.resolve('../../../../common/WETH9'))
const solcJsonInputPath = fromFileUrl(import.meta.resolve('./settings.json'))
const solcJsonOutput = await compile(solcJsonInputPath, targetDir)
const abi = solcJsonOutput.abi('WETH9')

console.log(solcJsonOutput.toString())
console.log(abi.signatureComponentsMap())