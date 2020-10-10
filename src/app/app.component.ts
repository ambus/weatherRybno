import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private swPush: SwPush) {
    console.log('try to show notification');
    Notification.requestPermission(function (result) {
      console.log('User choice', result);
      if (result !== 'granted') {
        console.log('No notification permission granted!');
      } else {
        navigator.serviceWorker.getRegistration().then((reg) => {
          reg
            .showNotification('Test', {
              body: 'jakas tresc',
              icon: 'assets/icon/favicon.png',
              // actions: <any>notification.actions,
              // data: notification.data,
              vibrate: [100, 50, 10, 20, 20]
            })
            .then(
              (res) => {
                console.log('showed notification', res);
              },
              (err) => {
                console.error(err);
              }
            );
        });
      }
    });
  }
  title = 'weatherRybno';
}
