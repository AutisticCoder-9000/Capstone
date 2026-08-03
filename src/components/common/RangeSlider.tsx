import React, { useEffect, useMemo, useRef, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';

interface Props {
  value: number;
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  onValueChange?: (v: number) => void;
  style?: any;
}

export default function RangeSlider({
  value,
  minimumValue = 0,
  maximumValue = 100,
  step = 1,
  onValueChange,
  style,
}: Props) {
  const trackWidth = useRef(0);
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const ratio = useMemo(() => {
    return maximumValue === minimumValue
      ? 0
      : (currentValue - minimumValue) / (maximumValue - minimumValue);
  }, [currentValue, minimumValue, maximumValue]);

  const toValue = (position: number) => {
    const width = trackWidth.current || 1;
    const bounded = Math.min(width, Math.max(0, position));
    const rawValue = minimumValue + (bounded / width) * (maximumValue - minimumValue);
    const steppedValue = Math.round(rawValue / step) * step;
    return Math.min(maximumValue, Math.max(minimumValue, steppedValue));
  };

  const handleGesture = (positionX: number) => {
    const nextValue = toValue(positionX);
    setCurrentValue(nextValue);
    onValueChange?.(nextValue);
  };

  const onLayout = (event: LayoutChangeEvent) => {
    trackWidth.current = event.nativeEvent.layout.width;
  };

  return (
    <View
      style={[styles.container, style]}
      onStartShouldSetResponder={() => true}
      onResponderGrant={(event) => handleGesture(event.nativeEvent.locationX)}
      onResponderMove={(event) => handleGesture(event.nativeEvent.locationX)}
      onResponderRelease={(event) => handleGesture(event.nativeEvent.locationX)}
      onLayout={onLayout}
    >
      <View style={styles.track}>
        <View style={[styles.filled, { width: `${ratio * 100}%` }]} />
        <View style={[styles.thumb, { left: `${ratio * 100}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%' },
  track: { height: 36, justifyContent: 'center' },
  filled: { position: 'absolute', left: 0, top: 16, height: 4, backgroundColor: '#3D6B6E', borderRadius: 3 },
  thumb: {
    position: 'absolute',
    top: 8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#3D6B6E',
    marginLeft: -10,
  },
});
