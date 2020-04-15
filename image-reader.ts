// const readFile = (selectorFiles: FileList | null) => {
//   if(selectorFiles) {

//     for (let el of Array.from(selectorFiles)) {
//       const reader = new FileReader();
//       reader.readAsDataURL(el);
//       reader.addEventListener('progress', (e) => {
//         console.log(e);
//       })
//       reader.onload = () => {
//         store.setFiles([...store.files, reader.result as string]);
//         if(inputRef.current) {
//           inputRef.current.value = '';
//         }
        
//       }
//       reader.onerror = () => {
//         console.log(reader.error);
//       }
//     }
//   }
// }


// class Store {
//   @observable test: string = 'hi';
//   @observable files: string[] = [];

//   @action
//   setTest = () => {
//     console.log('test')
//     this.test = Date.now().toString();
//   }

//   @action
//   setFiles = (files: string[]) => {
//     this.files = files;
//   }

//   deleteFile = (index: number) => {
//     const updatedFiles = this.files.filter((item, i) => i !== index);
//     console.log(updatedFiles)
//     this.setFiles(updatedFiles);
//   }
// }