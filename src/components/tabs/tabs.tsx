import React, { useContext, useState } from 'react';
import { TabContent, TabContentItem, TabHeader, TabHeaderItem, TabHeaderItemText, TabsContainer } from './tabs.styles';
import { TabItemProps } from './components/tab-item/tab-item';
import { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withDecay, withDelay, withTiming } from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { LayoutChangeEvent } from 'react-native';

type ContextType = {
  x: number;
}
interface TabsProps {
  children?: React.ReactElement<TabItemProps>[]
  onScroll?: (scroll: number) => void;
}

const MOVE_TAB_ITEM_THRESHOLD = 0.2;

export const Tabs: React.FC<TabsProps> = ({ onScroll, children }) => {

  const translateX = useSharedValue(0);
  const [tabItemWidth, setTabItemWidth] = useState(0);


  const gesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
    onStart: (event, context) => {
      context.x = context.x ?? 0;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.x;
      if (onScroll) {
        runOnJS(onScroll)(translateX.value);
      }
    },
    onEnd: (event, context) => {
      console.log('tabItem', tabItemWidth)
      if (Math.abs(event.translationX) > tabItemWidth * MOVE_TAB_ITEM_THRESHOLD) {
        const next = event.translationX < tabItemWidth * MOVE_TAB_ITEM_THRESHOLD;
        if (next) {
          translateX.value = withTiming(context.x - tabItemWidth);
          context.x = context.x - tabItemWidth;
        } else {
          translateX.value = withTiming(context.x + tabItemWidth);
          context.x = context.x + tabItemWidth;
        }
      } else {
        translateX.value = withTiming(context.x)
      }

      //context.x = context.x + event.translationX;
    }

  });

  const styleContent = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value
        }
      ]
    }
  });

  const onLayout = (event: LayoutChangeEvent) => {
    setTabItemWidth(event.nativeEvent.layout.width);
  };

  return (
    <TabsContainer>
      <TabHeader>
        {children?.map((item) => (
          <TabHeaderItem key={item.props.title}>
            <TabHeaderItemText>
              {item.props.title}
            </TabHeaderItemText>
          </TabHeaderItem>
        ))}
      </TabHeader>

      <PanGestureHandler onGestureEvent={gesture}>
        <TabContent
          onLayout={onLayout}
          style={styleContent}
        >

          {children?.map((item, index) => (
            <TabContentItem key={`tab-content-item-${index}`}>
              {item}
            </TabContentItem>
          ))}
        </TabContent>
      </PanGestureHandler>

    </TabsContainer>
  )
}