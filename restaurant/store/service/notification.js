import PushNotification from 'react-native-push-notification';

class NotificationService {
//   configure = () => {  
//         PushNotification.configure({
//             onNotification: function (notification) {
//                 console.log('NOTIFICATION:', notification);
//             },
//         });
          
//   };

  createDefaultChannel = () => {
     PushNotification.createChannel(
       {
         channelId: 'reschannel-id', // (required)
         channelName: 'resMy channel', // (required)
         channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
         playSound: false, // (optional) default: true
         soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
         importance: 4, // (optional) default: Importance.HIGH. Int value of the Android notification importance
         vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
       },
       created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
       error => console.log('Error creating channel:', error),
     );
  };

  sendLocalNotification = message => {
    PushNotification.localNotification({
      channelId: 'reschannel-id',
      title: 'Local Notification',
      message: message,
      channelId: 'default-channel-id', // Specify the channel ID
      picture:
        'https://educationwireonline.web.app/static/media/mainpageimage.153ab7957e6162f9c941.jpg',
    });
    console.log('done')
  };

  sendNotification = message => {
    PushNotification.localNotificationSchedule(
      {
        channelId: 'reschannel-id',
        title: 'My Notification',
        message: message,
        date: new Date(Date.now() + 5 * 1000),
      },
      console.log('done she'),
    );
  }
    
}

const notificationService = new NotificationService();
export default notificationService;
