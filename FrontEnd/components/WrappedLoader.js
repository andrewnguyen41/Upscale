import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react';

const WrappedLoader = (WrappedComponent) => (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={loading? styles.activityContainer :styles.container}>
      {loading ? <ActivityIndicator size="small" /> : <WrappedComponent {...props} />}
    </View>
  )
}

export default WrappedLoader

const styles = StyleSheet.create({
    container:{
        display:'flex',
        backgroundColor:'#FAFCFB',
        flex:1,
        },
        activityContainer:{
          display:'flex',
          flex:1,
          backgroundColor:'#FAFCFB',
          alignItems:'center',
          justifyContent:"center"
        },
})