import { z } from 'https://deno.land/x/zod@v3.23.8/mod.ts'
import { abiElementObject } from '../schemas/_DEPRECATED_abiElementObject.ts';

export type AbiElementObject = z.infer<typeof abiElementObject>