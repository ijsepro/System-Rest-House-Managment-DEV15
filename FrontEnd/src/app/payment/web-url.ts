export class WebUrl {
  private static packageUrl = 'http://localhost:80/Server Projects/Data/packages.php';
  private static eventUrl = 'http://localhost:80/Server Projects/Data/events.php';

  static getPackageUrl() {
    return this.packageUrl;
  }

  static getEventsUrl() {
    return this.eventUrl;
  }
}
