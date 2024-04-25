import React, {useEffect, useState} from 'react';
import {
  TabsContent,
  TabsContentItem,
  TabsHeader,
  TabsHeaderItem,
  TabsHeaderItemText,
  TabsContainer,
  TabsScrollIndicator,
  TabsScrollIndicatorWrapper,
  TabsStyle,
} from './tabs.styles';
import {TabItemProps} from './components/tab-item/tab-item';
import {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {LayoutChangeEvent} from 'react-native';

type PanGestureHandlerContextType = {
  x: number;
};
type TabsProps = Partial<TabsStyle> & {
  children: React.ReactElement<TabItemProps>[];
  onScroll?: (scroll: number) => void;
  onChangeTab?: (index: number) => void;
  initialTab?: number;
};

const TAB_ITEM_THRESHOLD = 0.2;

interface TabPosition {
  index: number;
  value: number;
}

export const Tabs: React.FC<TabsProps> = ({
  onScroll,
  onChangeTab,
  children,
  initialTab = 0,
  headerStyle,
  scrollIndicatorStyle,
  scrollIndicatorContainerStyle,
}) => {
  const translateX = useSharedValue(0);
  const [tabItemWidth, setTabItemWidth] = useState(0);
  const [activeTab, setActiveTab] = useState(initialTab);
  const [tabsPosition, setTabsPosition] = useState<TabPosition[]>([]);

  const totalTabs = children.length;

  useEffect(() => {
    if (!!tabItemWidth) {
      const _tabPositions: TabPosition[] = [];

      Array.from({length: totalTabs}).map((_, index) => {
        _tabPositions.push({
          index,
          value: tabItemWidth * index,
        });
      });
      setTabsPosition(_tabPositions);
      translateX.value = -initialTab * tabItemWidth;
    }
  }, [tabItemWidth]);

  const scrollTo = (index: number) => {
    'worklet';

    console.log('tabs', tabsPosition);
    const translateValue =
      tabsPosition.find(item => item.index === index)?.value || 0;

    translateX.value = withTiming(-translateValue);

    if (index != activeTab) {
      runOnJS(setActiveTab)(index);

      if (onChangeTab) {
        runOnJS(onChangeTab)(index);
      }
    }
  };

  const gesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    PanGestureHandlerContextType
  >({
    onStart: (_event, context) => {
      context.x = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.x;
    },
    onEnd: (event, _context) => {
      const absTranslationX = Math.abs(event.translationX);
      const requiredTranslationX = tabItemWidth * TAB_ITEM_THRESHOLD;
      const canMoveToAnotherTab = absTranslationX > requiredTranslationX;

      if (canMoveToAnotherTab) {
        const moveToRight = event.translationX < requiredTranslationX;

        if (moveToRight) {
          const hasExtrapolateTab = activeTab + 1 === totalTabs;

          if (hasExtrapolateTab) {
            scrollTo(activeTab);
          } else {
            scrollTo(activeTab + 1);
          }
        } else {
          const hasExtrapolateTab = activeTab - 1 < 0;

          if (hasExtrapolateTab) {
            scrollTo(activeTab);
          } else {
            scrollTo(activeTab - 1);
          }
        }
      } else {
        scrollTo(activeTab);
      }
    },
  });

  const styleContent = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  const onLayout = (event: LayoutChangeEvent) => {
    setTabItemWidth(event.nativeEvent.layout.width);
  };

  const tabHeaderScrollIndicatorStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: -(translateX.value / totalTabs),
        },
      ],
    };
  });

  return (
    <TabsContainer>
      <TabsHeader style={headerStyle}>
        {children?.map((item, index) => (
          <TabsHeaderItem
            key={item.props.title}
            onPress={() => scrollTo(index)}>
            <TabsHeaderItemText
              active={index === activeTab}
              style={headerStyle?.text}
              activeTextColor={headerStyle?.text?.activeColor}
              inactiveTextColor={headerStyle?.text?.inactiveColor}>
              {item.props.title}
            </TabsHeaderItemText>
          </TabsHeaderItem>
        ))}
      </TabsHeader>

      <TabsScrollIndicatorWrapper style={scrollIndicatorContainerStyle}>
        <TabsScrollIndicator
          numberOfTabs={children.length}
          color={headerStyle?.text?.activeColor}
          style={[scrollIndicatorStyle, tabHeaderScrollIndicatorStyles]}
        />
      </TabsScrollIndicatorWrapper>

      <PanGestureHandler onGestureEvent={gesture}>
        <TabsContent onLayout={onLayout} style={styleContent}>
          {children?.map((item, index) => (
            <TabsContentItem key={`tab-content-item-${index}`}>
              {item}
            </TabsContentItem>
          ))}
        </TabsContent>
      </PanGestureHandler>
    </TabsContainer>
  );
};
