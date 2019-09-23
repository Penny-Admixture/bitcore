export class PPCTxProvider {
  lib = require('bitcore-lib-peercoin');
  create({ recipients, utxos, change, fee, timestamp }) {
    let tx = new this.lib.Transaction().from(utxos).fee(Number(fee));
    for (const recipient of recipients) {
      tx.to(recipient.address, recipient.amount);
    }
    if (change) {
      tx.change(change);
    }
    if (timestamp) {
      tx.at(timestamp);
    }
    return tx;
  }
}
