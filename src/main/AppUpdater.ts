import { getLogger } from '@/shared/logger';
import { autoUpdater } from 'electron-updater';
const LOG = getLogger('AutoUpdater');

export default class AppUpdater {
  private checkForUpdatesInterval: NodeJS.Timeout | undefined;
  constructor() {
    autoUpdater.logger = LOG;
  }

  public async checkForUpdatesAndNotify(): Promise<void> {
    try {
      await autoUpdater.checkForUpdatesAndNotify();
    } catch (e) {
      LOG.error(`An error occurred while trying to check for updates: ${e}`);
    }
  }

  public startCheckForUpdatesInterval() {
    LOG.info('startCheckForUpdatesInterval called, starting interval...');
    this.checkForUpdatesInterval = setInterval(
      this.checkForUpdatesAndNotify,
      10 * 60 * 1000
    );
  }
}
