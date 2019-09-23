module.exports = {
  BTC: {
    lib: require('bitcore-lib'),
    p2p: require('bitcore-p2p'),
  },
  BCH: {
    lib: require('bitcore-lib-cash'),
    p2p: require('bitcore-p2p-cash'),
  },
  PPC: {
    lib: require('bitcore-lib-peercoin'),
    p2p: require('bitcore-p2p-peercoin'),
  },
}
