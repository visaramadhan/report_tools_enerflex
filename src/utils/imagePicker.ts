import * as ImagePicker from 'expo-image-picker';

export const IMAGE_MEDIA_TYPES = (((ImagePicker as any).MediaType && (ImagePicker as any).MediaType.Images)
  ? [(ImagePicker as any).MediaType.Images]
  : (ImagePicker as any).MediaTypeOptions?.Images) as any;

