import { BchValidation } from './bch';
import { BtcValidation } from './btc';
import { PpcValidation } from './ppc';
import { EthValidation } from './eth';

export interface IValidation {
  validateAddress(network: string, address: string): boolean;
}

const validation: { [chain: string]: IValidation } = {
  BTC: new BtcValidation(),
  BCH: new BchValidation(),
  PPC: new PpcValidation(),
  ETH: new EthValidation()
};

export class ValidationProxy {
  get(chain) {
    const normalizedChain = chain.toUpperCase();
    return validation[normalizedChain];
  }

  validateAddress(chain, network, address) {
    return this.get(chain).validateAddress(network, address);
  }
}

export default new ValidationProxy();
