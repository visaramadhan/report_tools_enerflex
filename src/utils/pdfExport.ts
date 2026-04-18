import { Platform } from 'react-native';

export const exportReportsPdfWeb: typeof import('./pdfExport.web').exportReportsPdfWeb =
  Platform.OS === 'web' ? require('./pdfExport.web').exportReportsPdfWeb : require('./pdfExport.native').exportReportsPdfWeb;

