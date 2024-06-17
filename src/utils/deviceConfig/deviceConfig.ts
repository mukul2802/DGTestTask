import { Dimensions, Platform } from 'react-native';

// Extract the width and height of the window
const { width, height } = Dimensions.get('window');

// Base guideline dimensions for scaling
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 850;

// Function to scale size based on width
export const scale = (size: number): number => (width / guidelineBaseWidth) * size;

// Function to scale size based on height
export const verticalScale = (size: number): number => (height / guidelineBaseHeight) * size;

// Function to scale size moderately based on width with a customizable factor
export const moderateScale = (size: number, factor: number = 0.25): number =>
  size + (scale(size) - size) * factor;

// Function to scale size moderately based on height with a customizable factor
export const moderateVerticalScale = (size: number, factor: number = 0.5): number =>
  size + (verticalScale(size) - size) * factor;

// Function to get the current dimensions of the window
export const getDimensions = (): { height: number; width: number } => {
  return { height, width };
};

// Function to check if the platform is iOS
export const isIOS = (): boolean => Platform.OS === 'ios';

// Function to check if the platform is Android
export const isAndroid = (): boolean => Platform.OS === 'android';
