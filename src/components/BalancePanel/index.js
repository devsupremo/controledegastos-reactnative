import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

const BalancePanel = () => {
  const saldo = '2.064,35';
  return (
    <View style={styles.container}>
      <BalancePanelLabel currentBalance={saldo} />
      <BalancePanelChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BalancePanel;
