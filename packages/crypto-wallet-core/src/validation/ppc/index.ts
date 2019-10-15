import { IValidation } from '..';
const BitcorePeercoin = require('bitcore-lib-peercoin');

export class PpcValidation implements IValidation {
  validateAddress(network: string, address: string): boolean {
      // Check if the input is a valid uri or address
      const URIPeercoin = BitcorePeercoin.URI;
      const AddressPeercoin = BitcorePeercoin.Address;

       // Bip21 uri
      let uri, uriAddress;
      if (/^peercoin:|^peercointest:i/.test(address)) {
        if (URIPeercoin.isValid(address)) {
          uri = new URIPeercoin(address);
          uriAddress = uri.address.toString();
          return AddressPeercoin.isValid(uriAddress, network);
        }
      }

       // Regular Address: try Bitcoin Cash
      return AddressPeercoin.isValid(address, network);
    }
}
