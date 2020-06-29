import * as fs from "fs";

export class JSONFileManager {

    private fileName: string 

    constructor(fileName: string) {
      this.fileName = fileName
    }
    public getObjectFromFile(): Object {
      const fileBuffer: Buffer = fs.readFileSync(this.fileName)
      const fileText: string = String(fileBuffer)
      return fileText ? JSON.parse(fileText) : []
    }
}