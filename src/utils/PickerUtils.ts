export const PickerUtils = {
  pick: () => {
    // return new Promise(async (resolve, reject) => {
    //   try {
    //     await PermissionUtils.gallery();
    //   } catch (e) {
    //     showAlert({
    //       title: strings.permissions.permission_required,
    //       description: strings.permissions.gallery,
    //       buttons: [
    //         {
    //           title: strings.permissions.open_settings,
    //           onPress: openSettings,
    //           type: 'positive',
    //         },
    //         {
    //           title: strings.permissions.not_now,
    //           type: 'negative',
    //         },
    //       ],
    //     });
    //     return reject();
    //   }
    //   launchImageLibrary(imageOption, (response) => {
    //     if (response.didCancel) {
    //       return reject(undefined);
    //     }
    //     if (
    //       response.errorCode ||
    //       response.errorMessage ||
    //       !response.assets ||
    //       response.assets.length === 0 ||
    //       !response.assets[0].base64
    //     ) {
    //       return reject(response.errorCode || response.errorMessage || 'Something went wrong');
    //     }
    //     const base64 = response.assets[0].base64;
    //     return resolve({ base64 });
    //   });
    // });
  },
  takePhoto: () => {
    return new Promise(async (resolve, reject) => {
      // try {
      //   await PermissionUtils.camera();
      // } catch (e) {
      //   console.log(e);
      //   showAlert({
      //     title: strings.permissions.permission_required,
      //     description: strings.permissions.camera,
      //     buttons: [
      //       {
      //         title: strings.permissions.open_settings,
      //         onPress: openSettings,
      //         type: 'positive',
      //       },
      //       {
      //         title: strings.permissions.not_now,
      //         type: 'negative',
      //       },
      //     ],
      //   });
      //   return reject();
      // }
      // launchCamera(imageOption, (response) => {
      //   if (response.didCancel) {
      //     return reject(undefined);
      //   }
      //   console.log(response);
      //   if (
      //     response.errorCode ||
      //     response.errorMessage ||
      //     !response.assets ||
      //     response.assets.length === 0 ||
      //     !response.assets[0].base64
      //   ) {
      //     return reject(response.errorCode || response.errorMessage || 'Something went wrong');
      //   }
      //   const base64 = response.assets[0].base64;
      //   return resolve({ base64 });
      // });
    });
  },
};
