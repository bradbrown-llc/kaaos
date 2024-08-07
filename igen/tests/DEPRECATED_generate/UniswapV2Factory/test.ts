import { fromFileUrl } from 'https://deno.land/std@0.224.0/path/mod.ts'
import { compile } from "../../../../solc/lib/DEPRECATED_compile.ts";

const targetDir = fromFileUrl(import.meta.resolve('../../../../common/@uniswap/v2-core/contracts'))
const solcJsonInputPath = fromFileUrl(import.meta.resolve('./settings.json'))
const solcJsonOutput = await compile(solcJsonInputPath, targetDir)
const abi = solcJsonOutput.abi('UniswapV2Factory')

console.log(solcJsonOutput.toString())
console.log(abi.signatureComponentsMap())