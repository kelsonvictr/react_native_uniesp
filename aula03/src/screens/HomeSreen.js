import { View, Button } from 'react-native'
import React from 'react'

const HomeSreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'anything you want here',
        }
        )}
      />
    </View>
  )
}

export default HomeSreen