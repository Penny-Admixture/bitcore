const BitcoreLibPeercoin = require('bitcore-lib-peercoin');
import { AbstractBitcoreLibDeriver } from '../btc';
export class PpcDeriver extends AbstractBitcoreLibDeriver {
  bitcoreLib = BitcoreLibPeercoin;
}
