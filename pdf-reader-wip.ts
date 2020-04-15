class Store {
  @observable files: string[] = [];

  @action
  setFiles = (files: string[]) => {
    this.files = [...this.files, ...files];
  }
}

const readFile = (files: FileList | null) => {
  console.log(files)
  if(files) {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      store.setFiles([reader.result as string])
    }
  }
  
}


// <iframe 
//                                       className="iframe-test" 
//                                       src={store.files[0]}
//                                       scrolling="no"
//                                       marginHeight={0}
//                                       /></div>