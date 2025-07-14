import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
// import { Filesystem, Directory } from '@capacitor/filesystem';
// import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

    // Function to take a photo using the device camera
  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 100, // Set the quality of the photo
        allowEditing: false, // Disable editing
        resultType: CameraResultType.Base64, // Store the image as a base64 string
        source: CameraSource.Camera, // Use the camera to capture the image
      });

      // Return the base64 image string
      return 'data:image/jpeg;base64,' + image.base64String;
    } catch (error) {
      console.error('Error taking photo: ', error);
      return '';
    }
  }


}
