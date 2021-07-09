import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CommonService {

    constructor() { 
    }
    
    public getFileExtension(fileName: string): string {
        let extensionRegex = /(?:\.([^.]+))?$/;
        return extensionRegex.exec(fileName)[1];
    }

    public generateFileName(filePath: string, format: string): string {
        let fileNameIndex = filePath.lastIndexOf("/");
        let fileName = filePath.substring(fileNameIndex + 1);
        let extension = this.getFileExtension(fileName);
        let folder = fileName.replace("." + extension, "");
        if (format !== "htm") {
            return filePath.substring(0, fileNameIndex + 1) + folder + "." + format;
        }
        return filePath.substring(0, fileNameIndex + 1) + folder + "/" + folder + "." + format;
    }

}
