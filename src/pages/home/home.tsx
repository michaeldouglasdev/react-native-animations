import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BottomSheet } from '../../components/bottomsheet/bottomsheet';
import { ScreenItem } from './home.styles';

export const HomePage: React.FC = () => {
  const navigation = useNavigation();
  const [visibleBottomsheet, setVisibleBottomsheet] = useState<boolean>(false);

  const handleClickOpenBottomsheet = () => {
    setVisibleBottomsheet(true);
  }

  const handleClickCloseBottomsheet = () => {
    setVisibleBottomsheet(false);
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate("ParallaxPage")}>
          <ScreenItem>
            <Text>Parallax</Text>
          </ScreenItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("TravelListPage")}>
        <ScreenItem>
          <Text>Parallax + Shared Element</Text>
          </ScreenItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CreditCardListPage")}>
        <ScreenItem>
        <Text>CreditCard List + Scroll Behind</Text>
          </ScreenItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("UserListPage")}>
        <ScreenItem>
          <Text>User List + Scale</Text>
          </ScreenItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("BannersListPage")}>
        <ScreenItem>
        <Text>Banner Stacked List</Text>
          </ScreenItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SnapchatPage")}>
        <ScreenItem>
        <Text>Snapchat</Text>
          </ScreenItem>
      </TouchableOpacity>
      </ScrollView>


      <Button title='Open Bottomsheet' onPress={handleClickOpenBottomsheet} />
      <BottomSheet isVisible={visibleBottomsheet} onClose={handleClickCloseBottomsheet} title='This is a title'>
        <View style={{alignItems: 'center'}}>
          <Text>Text 1</Text>
          <Text>Text 2</Text>
          <Text>Text 3</Text>
          <Text>Text 4</Text>
          <Text>Text 5</Text>
          <Text>Text 6</Text>
          <Text>Text 7</Text>
          <Text>Text 8</Text>
          <Text>Text 9</Text>
          <Text>Text 10</Text>
          <Text>Text 11</Text>
          <Text>Text 12</Text>
        </View>
      </BottomSheet>
    </SafeAreaView>
  )
}