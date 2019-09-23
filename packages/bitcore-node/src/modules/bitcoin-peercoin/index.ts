import { BitcoinP2PWorker } from '../bitcoin/p2p';
import { BaseModule } from '..';
import { PPCStateProvider } from '../../providers/chain-state/ppc/ppc';

export default class PPCModule extends BaseModule {
  constructor(services) {
    super(services);
    services.Libs.register('PPC', 'bitcore-lib-peercoin', 'bitcore-p2p-peercoin');
    services.P2P.register('PPC', BitcoinP2PWorker);
    services.CSP.registerService('PPC', new PPCStateProvider());
  }
}
