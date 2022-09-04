import React, { useRef } from "react"
import { Animated } from "react-native"
import { getFakeCreditCards } from "../../utils/get-fake-credit-cards.util";
import { CreditCard } from "./component/credit-card"

export const CreditCardListPage: React.FC = () => {
  const y = useRef(new Animated.Value(0)).current;
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: {y}}}], { useNativeDriver: true})

  return (
    <Animated.FlatList
      scrollEventThrottle={16}
      bounces={false}
      data={getFakeCreditCards()}
      renderItem={({item, index}) => {
        return (
          <CreditCard index={index} card={item.type} y={y} />
        )
      }}
      keyExtractor={user => user.index.toString()}
      onScroll={onScroll}
    />
  )
}