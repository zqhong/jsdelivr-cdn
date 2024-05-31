import { addDashboardShareTab, ShareModalTabModel } from 'app/features/dashboard/components/ShareModal';
import { SharePDF } from './SharePDF';

const sharePDFTab: ShareModalTabModel = {
  label: 'PDF',
  value: 'pdf',
  component: SharePDF,
};

export function initReporting() {
  addDashboardShareTab(sharePDFTab);
}
